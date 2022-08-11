import { useState, useEffect } from "react";
import { getTokenByChain, TokenInfo } from "../assets/tokenConfig.ts";
import { createGlobalStyle } from "styled-components";
import Select from "react-select";
import { useAccount, useNetwork } from "wagmi";
import { ellipseAddress } from "../components/utils";
import BusyLoader, { LoaderType } from "../components/BusyLoader.tsx";
import PaymentHelper from "../components/PaymentHelper";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/menu/Footer";
import Html5QrcodePlugin from "../components/HTML5QrcodePlugin.jsx";
import Header from "../components/menu/header";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import InputIcon from '../components/InputIcon.tsx'
import { FaBackspace, FaMoneyBillWave } from "react-icons/fa";

const style = {
    wrapper: `relative`,
    info: `flex justify-between text-[#e4e8eb] drop-shadow-xl`,
    infoLeft: `flex-0.2 flex-wrap`,
    container: `flex flex-wrap before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b from-purple-600 to-blue-300 before:bg-cover before:bg-center before:bg-fixed before:opacity-100`,
    contentWrapper: `w-full m-4 h-screen relative justify-center flex-wrap items-center block flex-grow lg:flex lg:items-center lg:w-auto`,
    center: ` h-screen relative justify-center flex-wrap items-center `,
    searchBar: `flex flex-1 w-full border-black items-center bg-[#faf9f7] rounded-[0.8rem] mt-2`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#000000] placeholder:text-[#5e5d5b] placeholder:text-sm`,
    copyContainer: `flex flex-1 w-full border-black items-center bg-[#faf9f7] rounded-[0.8rem]`,
    title: `relative text-black justify-center text-2xl lg:text-[46px] font-semibold`,
    description: `text-[#000000] container-[400px] text-lg lg:text-lg mt-[0.8rem] mb-[2.5rem]`,
    spinner: `w-full h-screen flex justify-center text-white mt-20 p-100 object-center`,
    nftButton: `font-bold w-full mt-4 bg-[#43058f] text-white text-lg rounded-xl p-3  shadow-lg hover:bg-[#6f41b7] cursor-pointer`,
    dropDown: `font-bold w-full mt-4 bg-[#2181e2] text-white text-sm lg:text-lg rounded p-4 shadow-sm cursor-pointer`,
    option: `font-bold w-1/2 lg:w-full mt-4 bg-[#2181e2] text-white text-sm lg:text-lg rounded p-4 shadow-lg cursor-pointer`,
    glowDivBox: `relative group w-full lg:w-[40%] mt-30 rounded-2xl `,
};
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

const defaults = {
    balanceToken: "0",
    walletName: "Fetching data. Please Wait...",
};

const QrPay = () => {
    const [scanResultWebCam, setScanResultWebCam] = useState(null);
    const [formInput, updateFormInput] = useState({ amount: 0 });
    const { chain, chains } = useNetwork();
    const [paymentHelper, setPaymentHelper] = useState(PaymentHelper());
    const [balanceToken, setBalanceToken] = useState(defaults.balanceToken);
    // const [selectedToken, setSelectedToken] = useState<TokenInfo | undefined>()
    const [loadingState, setLoadingState] = useState(false);
    // const [loadingBalanceState, setLoadingBalanceState] = useState(false)
    const [defaultAccount, setDefaultAccount] = useState("");
    const [walletName, setWalletName] = useState(defaults.walletName);
    const [availableTokens, setAvailableTokens] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        setLoadingState(true);
        paymentHelper.initialize().then((_) => setLoadingState(false));
    }, [defaultAccount]);

    useEffect(() => {
        paymentHelper.connectWallet(chain);
        setAvailableTokens(paymentHelper.data().availableTokens);
        console.log("token", paymentHelper.data().availableTokens);
    }, [chain]);

    async function fetchDetails(address) {
        setLoadingState(true);
        setWalletName(
            (await paymentHelper.fetchDetails(address)) ?? defaults.walletName
        );
        setLoadingState(false);
    }

    async function loadBalance(selectToken) {
        if (selectToken) {
            setLoadingState(true);
            setBalanceToken(
                (await paymentHelper.loadBalance(selectToken)) ?? defaults.balanceToken
            );
            setLoadingState(false);
        } else {
            setBalanceToken(defaults.balanceToken);
        }
    }
    const handleChange = async (e) => {
        setSelectedOption(e);
        const selectedValue = e.address;
        let token;
        console.log("selVal", selectedValue);
        if (selectedValue) {
            token = e;
        }
        await loadBalance(token);
    };

    async function transfer() {
        setLoadingState(true);
        await paymentHelper
            .transfer(formInput.amount, scanResultWebCam, true)
            .catch((error) => {
                toast.error("User Denied Payment.");
                setLoadingState(false);
            });
        setLoadingState(false);
        await loadBalance(paymentHelper.data().selectedToken);
    }

    const onNewScanResult = (decodedText, decodedResult) => {
        setScanResultWebCam(decodedText);
        fetchDetails(decodedText);
    };

    return (
        <div>
            <GlobalStyles />
            <Toaster position="top-center" reverseOrder={false} />
            <Header />
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.contentWrapper}>
                        <div className={style.glowDivBox}>
                            <div className="relative h-[full] w-[95%] text-center justify-center  divide-x divide-gray-600 rounded-lg bg-gradient-to-b from-purple-300 to-blue-200 px-7  py-9 leading-none lg:w-full">
                                {!chain?.id ? (
                                    <div className="flex flex-wrap text-center mx-auto">
                                        <ConnectButton label="Connect Your Wallet And Start Sending Crypto" />
                                    </div>
                                ) : !scanResultWebCam ? (
                                    <Html5QrcodePlugin
                                        fps={10}
                                        qrbox={250}
                                        disableFlip={false}
                                        qrCodeSuccessCallback={onNewScanResult}
                                    />
                                ) : (
                                    <>
                                        <div className={style.details}>
                                            <span className="flex flex-wrap justify-center space-x-5">
                                                <span className="pr-6 text-xl text-black font-bold lg:text-3xl">Send Crypto</span>
                                            </span>
                                            <span className="flex flex-wrap justify-center items-center space-x-5">
                                                <span className="mt-4 text-[#111111] font-sans not-italic text-base leading-5 text-center justify-center mb-3">
                                                    Choose a Cyptocurrency and send it
                                                </span>
                                            </span>
                                        </div>

                                        <div className="font-bold drop-shadow-xl">
                                            <div className={style.info}>
                                                <div className={style.infoLeft}>
                                                    <div className='text-[#000000] font-normal text-sm mt-4 mb-2'>Choose Cryptocurrency:</div>
                                                </div>
                                            </div>
                                            <Select
                                                placeholder="Select Your Token"
                                                value={selectedOption}
                                                options={getTokenByChain(chain?.id)}
                                                onChange={handleChange}
                                                getOptionLabel={(e) => (
                                                    <div
                                                        style={{ display: "flex", alignItems: "center" }}
                                                    >
                                                        <img
                                                            width={30}
                                                            height={30}
                                                            alt=""
                                                            src={e.token_icon}
                                                        />
                                                        <span style={{ marginLeft: 15 }}>{e.symbol}</span>
                                                    </div>
                                                )}
                                            />
                                            <div className={style.info}>
                                                <div className={style.infoLeft}>
                                                    <div className='text-[#000000] font-normal text-sm '>Balance :&nbsp;&nbsp;{balanceToken}</div>
                                                </div>
                                            </div>

                                            <div className={style.info}>
                                                <div className={style.infoLeft}>
                                                    <div className='text-[#000000] font-normal text-sm mt-4'>Friend's Wallet:</div>
                                                </div>
                                            </div>
                                            <div className={style.searchBar}>
                                                <input
                                                    className={style.searchInput}
                                                    value={scanResultWebCam}
                                                    disabled
                                                />
                                            </div>


                                            <div className={style.info}>
                                                <div className={style.infoLeft}>
                                                    <div className='text-[#000000] font-normal text-sm mt-4'>Amount To Transfer:</div>
                                                </div>
                                            </div>
                                            <div className={style.searchBar}>
                                                <InputIcon className="input-icon" Icon={FaMoneyBillWave} />
                                                <input
                                                    type="number"
                                                    className={style.searchInput}
                                                    placeholder="Amount to transfer"
                                                    value={formInput.amount}
                                                    onChange={(e) =>
                                                        updateFormInput((formInput) => ({
                                                            ...formInput,
                                                            amount: Number(e.target.value),
                                                        }))
                                                    }
                                                />
                                                <button
                                                    type="button"
                                                    onClick={(_) =>
                                                        updateFormInput((formInput) => ({
                                                            ...formInput,
                                                            amount: 0.0,
                                                        }))
                                                    }
                                                >
                                                    <InputIcon className="input-icon" Icon={FaBackspace} />
                                                </button>
                                            </div>

                                            {loadingState === true ? (
                                                <BusyLoader
                                                    loaderType={LoaderType.Beat}
                                                    wrapperClass="white-busy-container"
                                                    className="white-busy-container"
                                                    color={"#000000"}
                                                    size={15}
                                                >
                                                    <div className={style.description}> Connecting to blockchain. Please wait</div>
                                                </BusyLoader>
                                            ) : (
                                                <button type="submit" onClick={transfer} className={style.nftButton}>
                                                    Transfer
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
export default QrPay;
