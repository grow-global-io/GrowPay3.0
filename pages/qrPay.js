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
    const { activeChain } = useNetwork();
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
        paymentHelper.connectWallet(activeChain);
        setAvailableTokens(paymentHelper.data().availableTokens);
        console.log("token", paymentHelper.data().availableTokens);
    }, [activeChain]);

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

            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h3>Start sending payments immediately.</h3>
                    <p>
                        Scan your friend's QR code here and send cryptocurrency almost
                        instantly.
                    </p>
                    <div className="spacer-10"></div>
                    {!activeChain?.id ? (
                        <BusyLoader
                            loaderType={LoaderType.Ring}
                            color={"#ffffff"}
                            size={50}
                        >
                            <b>Click on the Connect Wallet button !!</b>
                        </BusyLoader>
                    ) : !scanResultWebCam ? (
                        <Html5QrcodePlugin
                            fps={10}
                            qrbox={250}
                            disableFlip={false}
                            qrCodeSuccessCallback={onNewScanResult}
                        />
                    ) : (
                        <>
                            <form
                                name="contactForm"
                                className="form-border"
                                onSubmit={transfer}
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Name</label>
                                            <p className="form-control"> {walletName}</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Wallet Address:</label>
                                            <p className="form-control">
                                                {" "}
                                                {ellipseAddress(scanResultWebCam, 15)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Choose the currency</label>

                                            <Select
                                                placeholder="Select Your Token"
                                                value={selectedOption}
                                                options={getTokenByChain(activeChain?.id)}
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
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Amount to Transfer</label>
                                            <input
                                                className="form-control"
                                                id="myInput"
                                                wrapperClass="flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] mt-2 p-1"
                                                placeholder="Amount to transfer"
                                                onChange={(e) => {
                                                    updateFormInput({
                                                        ...formInput,
                                                        amount: Number(e.target.value),
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className=" mt-4 grid grid-cols-3 gap-2">
                                        <div>Available Balance: {balanceToken}</div>
                                    </div>
                                    <div className=" mt-4 grid grid-cols-2 gap-1">
                                        <div className="col-md-6">
                                            <div className="field-set"></div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    {loadingState === true ? (
                                        <BusyLoader
                                            loaderType={LoaderType.Beat}
                                            wrapperClass="white-busy-container"
                                            className="white-busy-container"
                                            color={"#000000"}
                                            size={15}
                                        >
                                            Connecting to blockchain. Please wait
                                        </BusyLoader>
                                    ) : (
                                        <div className="col-md-15 offset-md-5">
                                            {
                                                <div>
                                                    <button onClick={() => transfer()}>
                                                        <div className="col-md-12">
                                                            <div id="submit" className="pull-left">
                                                                <input
                                                                    type="submit"
                                                                    id="send_message"
                                                                    value="Tranfer"
                                                                    className=" btn-main color-2"
                                                                />
                                                            </div>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                    )}
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};
export default QrPay;
