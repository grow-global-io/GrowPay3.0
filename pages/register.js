import { useState, useEffect } from "react";
import Footer from "../components/menu/Footer";
import { createGlobalStyle } from "styled-components";
import { useAccount, useNetwork } from "wagmi";
import toast, { Toaster } from "react-hot-toast";
import "react-phone-number-input/style.css";
import PhoneLink from "../artifacts/contracts/phoneLink.sol/phoneLink.json";
import { getConfigByChain } from "../config";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { randomString } from "../components/utils";
import emailjs from "@emailjs/browser";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import getFirebaseApp from "../components/firebase.ts";
import BusyLoader, { LoaderType } from "../components/BusyLoader.tsx";
import IdInput, {
  IdInputValidate,
  IdType,
  IdTypeName,
} from "../components/IdInput.tsx";
import Header from "../components/menu/header";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const style = {
  wrapper: `relative`,
  container: `flex flex-wrap before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b from-purple-600 to-blue-300 before:bg-cover before:bg-center before:bg-fixed before:opacity-100`,
  contentWrapper: `w-full m-4 h-screen relative justify-center flex-wrap items-center block flex-grow lg:flex lg:items-center lg:w-auto`,
  searchBar: `flex flex-1 w-full h-[3rem] mt-2 border-black items-center bg-[#faf9f7] rounded-[0.8rem] mt-2`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#000000] placeholder:text-[#5e5d5b] placeholder:text-sm`,
  glowDivBox: `relative group w-full lg:w-[40%] mt-30 rounded-2xl `,
  details: `p-3`,
  infoRight: ` text-right ml-4 md:ml-36 lg:ml-36 mt-1 justify-right`,
  nftButton: `font-bold w-full mt-4 bg-[#43058f] text-white text-lg rounded-xl p-3  shadow-lg hover:bg-[#6f41b7] cursor-pointer`,
};

const Register = () => {
  const [firebaseApp, setFirebaseApp] = useState();
  const [signInData, setSignInData] = useState("");
  const { address } = useAccount();
  const { chain, chains } = useNetwork();
  const [toggle, setToggle] = useState(true)
  const [details, setDetails] = useState([]);
  const [formInput, updateFormInput] = useState({
    name: "",
    otp: "",
    identifier: "",
    type: IdType.phone,
  });
  const [loadingState, setLoadingState] = useState(false);
  const [otp, setOtp] = useState(false);
  const [emailOTP, setEmailOTP] = useState("");

  useEffect(() => {
    fetWalletDetails();
  }, [address]);

  useEffect(() => {
    getFirebaseApp().then((app) => setFirebaseApp(app));
  }, [firebaseApp]);

  async function configureCaptcha() {
    const auth = getAuth(firebaseApp);
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: () => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.info("recaptcha verifying");
          onSignInSubmit().then((_) => console.info("recaptcha verified"));
        },
      },
      auth
    );
  }
  async function fetWalletDetails() {
    await window.ethereum.send("eth_requestAccounts"); // opens up metamask extension and connects Web2 to Web3
    const provider = new ethers.providers.Web3Provider(window.ethereum); //create provider
    const signer = provider.getSigner(); // get signer
    const network = await provider.getNetwork();
    const phoneLinkContract = new ethers.Contract(
      getConfigByChain(network.chainId)[0].phoneLinkAddress,
      PhoneLink.abi,
      signer
    );
    const dataDetails = await phoneLinkContract.getWalletDetails(address);
    const items = dataDetails
      .filter((i) => i.typeOfIdentifier)
      .map((i) => {
        return {
          name: i.name,
          identifier: i.identifier,
          typeOfIdentifier: i.typeOfIdentifier,
          connectedWalletAddress: i.connectedWalletAddress,
          isPrimaryWallet: i.isPrimaryWallet == true,
        };
      });
    console.log("items", items);
    if (dataDetails?.length) {
      //   Router.push({ pathname: "/register" });
      // } else {
      setDetails(items);
    }
  }
  async function onSignInSubmit(e) {
    try {
      e?.preventDefault();
    } catch (error) {
      console.error(error);
    }
    console.log("validate", validate());
    await window.ethereum.send("eth_requestAccounts"); // opens up metamask extension and connects Web2 to Web3
    const provider = new ethers.providers.Web3Provider(window.ethereum); //create provider
    const signer = provider.getSigner(); // get signer
    const network = await provider.getNetwork();

    const phoneLinkContract = new ethers.Contract(
      getConfigByChain(network.chainId)[0].phoneLinkAddress,
      PhoneLink.abi,
      signer
    );
    const tx = await phoneLinkContract.uniqueEntry(
      formInput.identifier.toLowerCase()
    );
    !tx && toast.error("Phone/Email already registered.");
    if (validate() && tx) {
      if (formInput.type === IdType.email) {
        var OTP = randomString(10, "base64");
        setEmailOTP(OTP);
        var templateParams = {
          user: formInput.name,
          email: formInput.identifier,
          message: OTP,
        };
        emailjs
          .send(
            "service_t2xue7p",
            "template_dnzci4u",
            templateParams,
            "Z8B2Ufr9spWJFx4js"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              toast.success("Check email for OTP");
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
        setOtp(true);
      } else if (formInput.type === IdType.phone) {
        console.log("phone otp");
        configureCaptcha();
        const signInPhoneNumber = formInput.identifier;
        console.info({ signInPhoneNumber });

        const appVerifier = window.recaptchaVerifier;
        const auth = getAuth(firebaseApp);
        try {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = await signInWithPhoneNumber(
            auth,
            signInPhoneNumber,
            appVerifier
          );
          toast.success("OTP sent. Please enter the OTP");
          setOtp(true);
        } catch (error) {
          console.error(error);
        }
      } else {
        toast.error("Please enter phone/email to proceed.");
      }
    }
  }

  const validate = () => {
    const validationResult = IdInputValidate(
      formInput.identifier,
      formInput.type,
      true
    );
    if (validationResult.valid) {
      return true;
    } else {
      toast.error(
        `Entered ${IdTypeName[validationResult.inputType]} is invalid.`
      );
    }
    return false;
  };

  async function onSubmitOTP(e) {
    try {
      e?.preventDefault();
    } catch (error) {
      console.error(error);
    }
    if (formInput.type === IdType.email) {
      if (emailOTP.toString() === formInput.otp) {
        toast.success("Email Authenticated");
        await link();
      } else {
        toast.error("Wrong OTP entered.");
      }
    } else {
      const code = formInput.otp;
      console.info({ code });
      try {
        const result = await window.confirmationResult.confirm(code);
        // User signed in successfully.
        const user = result.user;
        console.info({ user });
        toast.success("user is verified");
        await link();
        // ...
      } catch (error) {
        // User couldn't sign in (bad verification code?)
        // ...
        toast.error("Wrong otp");
        console.error(error);
      }
    }
  }

  async function link() {
    setLoadingState(true);
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const network = await provider.getNetwork();
    const phoneLinkContract = new ethers.Contract(
      getConfigByChain(network.chainId)[0].phoneLinkAddress,
      PhoneLink.abi,
      signer
    );
    const tx = await phoneLinkContract
      .enterDetails(
        formInput.name,
        formInput.identifier.toLowerCase(),
        formInput.type.toString()
      )
      .catch(() => {
        toast.error("User Denied Transaction.");
        setLoadingState(false);
      });

    toast("Creating block... Please Wait", { icon: "👏" });
    const receipt = await provider
      .waitForTransaction(tx.hash, 1, 150000)
      .then(() => {
        toast.success("Transfer Successful.");
      });
    setOtp(false);
    setLoadingState(false);
  }

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Toaster position="top-center" reverseOrder={false} />

      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.contentWrapper}>
            {!chain?.id ? (
              <div className="flex flex-wrap">
                <h3>Click on the Connect Wallet button !!</h3>
                <BusyLoader
                  loaderType={LoaderType.Ring}
                  color={"#a067e6"}
                  size={50}
                ></BusyLoader>
              </div>
            ) : (
              <>
                <div className={style.glowDivBox}>
                  <div className="relative h-[full] w-[95%] items-center justify-center  divide-x divide-gray-600 rounded-lg bg-gradient-to-b from-purple-300 to-blue-200 px-7  py-9 leading-none lg:w-full">
                    <div className={style.details}>
                      <span className="flex flex-wrap justify-center space-x-5">
                        <span className="pr-6 text-xl text-black font-bold lg:text-3xl">
                          Link Your Wallet
                        </span>
                      </span>
                      <div className="relative group w-full mt-4 rounded-2xl ">
                        <div className="relative h-[full] w-full items-center justify-center  divide-x divide-gray-600 rounded-lg bg-[#e1e5f5] leading-none lg:w-full">
                          <div className={style.details}>
                            <span className="flex flex-wrap  space-x-5">
                              <div className="justify-center">
                                {details?.length ? (
                                  <div className="justify-center">
                                    <span onClick={() => setToggle(!toggle)} className="text-[#111111] flex flex-wrap font-sans not-italic font-bold text-xs lg:text-base leading-5">

                                      Your Wallet is already linked with :

                                      <div className={style.infoRight}>
                                        {toggle ? <AiOutlineUp /> : <AiOutlineDown />}
                                      </div>
                                    </span>

                                    {toggle && (

                                      details.map((detail, id) => (
                                        <div className="mt-2 text-[#111111] font-sans not-italic text-sm leading-5">
                                          <b>{detail.typeOfIdentifier}:&nbsp;&nbsp;</b>
                                          <b>{detail.identifier}</b>
                                          <br />
                                        </div>
                                      ))
                                    )}
                                  </div>
                                ) : (
                                  <>
                                    <span className="text-[#111111] font-sans not-italic font-bold text-base leading-5">
                                      Haven't linked your wallet yet? Link Now.
                                      <br />
                                    </span>
                                    <div className="mt-2 text-[#111111] font-sans not-italic text-sm leading-5">
                                      Link your wallet with your phone or email
                                      ID with a One Time Password and start
                                      sending/receiving crypto with your friends
                                      using just your phone number. .
                                    </div>
                                  </>
                                )}
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-[#e4e8eb] drop-shadow-xl">
                        <div className="spacer-10"></div>
                        {Boolean(otp) === false ? (
                          <form onSubmit={onSignInSubmit}>
                            <div id="sign-in-button"></div>

                            <div className={style.searchBar}>
                              <input
                                className={style.searchInput}
                                placeholder="Enter your name"
                                onChange={(e) =>
                                  updateFormInput((formInput) => ({
                                    ...formInput,
                                    name: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <IdInput
                              className={style.searchInput}
                              id="myInput"
                              wrapperClass={style.searchBar}
                              placeholder="Enter Phone or Email"
                              delay={500}
                              onChange={(val, idType) =>
                                updateFormInput((formInput) => ({
                                  ...formInput,
                                  identifier: val,
                                  type: idType,
                                }))
                              }
                              excludeIdTypes={[IdType.wallet]}
                            />

                            <button type="submit" className={style.nftButton}>
                              Register Now
                            </button>
                          </form>
                        ) : (
                          <form onSubmit={onSubmitOTP}>
                            <div className={style.searchBar}>
                              <input
                                className={style.searchInput}
                                placeholder="Enter OTP"
                                onChange={(e) =>
                                  updateFormInput((formInput) => ({
                                    ...formInput,
                                    name: e.target.value,
                                  }))
                                }
                              />
                            </div>

                            <button type="submit" className={style.nftButton}>
                              Verify OTP
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Register;
