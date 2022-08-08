import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Breakpoint, {
  BreakpointProvider,
  setDefaultBreakpoints,
} from "react-socks";
import Link from "next/link";
import useOnclickOutside from "react-cool-onclickoutside";
import { CgProfile } from "react-icons/cg";
import { FcSettings } from "react-icons/fc";
import { BsCashCoin } from "react-icons/bs";
import { AiOutlineQrcode } from "react-icons/ai";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import toast, { Toaster } from "react-hot-toast";
import { ellipseAddress } from "../utils";
import PhoneLink from "../../artifacts/contracts/phoneLink.sol/phoneLink.json";
import { getConfigByChain } from "../../config";
import Web3Modal from "web3modal";

setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }]);

const Header = function () {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const { address } = useAccount();
  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  const closeMenu1 = () => {
    setOpenMenu1(false);
  };
  const ref = useOnclickOutside(() => {
    closeMenu();
  });
  const ref1 = useOnclickOutside(() => {
    closeMenu1();
  });

  const [showmenu, btn_icon] = useState(false);
  const [admin, setAdmin] = useState();
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
      if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  useEffect(() => {
    if (!window.ethereum) {
      toast.error(
        "Install a crypto wallet(ex: Metamask, Coinbase, etc..) to proceed"
      );
    } else if (!address) {
      toast.error("Connect Your Wallet.");
    } else {
      toast.success(`Welcome ${ellipseAddress(address)} !!`);
      getAdmin();
    }
  }, [address]);

  async function getAdmin() {
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
    const data = await phoneLinkContract.getMarketOwner();
    setAdmin(data); //comment this line to withdraw admin restrictions
    //setAdmin(address) //comment this line to restrict admin access
  }

  return (
    <header id="myHeader" className="navbar white">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <div className="row w-100-nav">
          <div className="logo px-0">
            <div className="navbar-title navbar-item">
              <Link href="/">
                <div className="h-10 w-10">
                  <img
                    width={50}
                    height={50}
                    src="./img/logos.png"
                    //className="img-fluid d-none"
                    alt="#"
                  />
                </div>
              </Link>
            </div>
          </div>

          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu && (
                <div className="menu">
                  <div className="navbar-item">
                    <Link href="/" onClick={() => btn_icon(!showmenu)}>
                      Home
                    </Link>
                  </div>

                  <div className="navbar-item">
                    <Link href="/register" onClick={() => btn_icon(!showmenu)}>
                      Link Wallet
                    </Link>
                  </div>
                  {address === admin && address ? (
                    <div className="navbar-item">
                      <Link href="/admin" onClick={() => btn_icon(!showmenu)}>
                        Admin
                      </Link>
                    </div>
                  ) : (
                    <></>
                  )}

                  <div className="navbar-item">
                    <div ref={ref1}>
                      <div
                        className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick1}
                      >
                        <CgProfile />
                      </div>
                      {openMenu1 && (
                        <div className="item-dropdown">
                          <div className="dropdown" onClick={closeMenu1}>
                            <Link
                              href="/myprofile"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              <div className="flex">
                                <FcSettings />
                                &nbsp;&nbsp;My Profile
                              </div>
                            </Link>
                            <Link href="/pay">
                              <div className="flex">
                                <BsCashCoin /> &nbsp;&nbsp;Send Crypto
                              </div>
                            </Link>
                            <Link
                              href="/qrPay"
                              onClick={() => btn_icon(!showmenu)}
                            >
                              <div className="flex">
                                <AiOutlineQrcode />
                                &nbsp;&nbsp;Scan QR and Pay
                              </div>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Breakpoint>

            <Breakpoint xl>
              <div className="menu">
                <div className="navbar-item">
                  <Link href="/">Home</Link>
                </div>

                <div className="navbar-item">
                  <Link href="/register">Link Wallet</Link>
                </div>

                {address === admin && address ? (
                  <div className="navbar-item">
                    <Link href="/admin" onClick={() => btn_icon(!showmenu)}>
                      Admin
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
                {address && (
                  <div className="navbar-item">
                    <div ref={ref1}>
                      <div
                        className="dropdown-custom dropdown-toggle btn"
                        onMouseEnter={handleBtnClick1}
                        onMouseLeave={closeMenu1}
                      >
                        <CgProfile />
                        <span className="lines"></span>
                        {openMenu1 && (
                          <div className="item-dropdown">
                            <div className="dropdown" onClick={closeMenu1}>
                              <Link href="/myprofile">
                                <div className="flex flex-wrap">
                                  <FcSettings />
                                  &nbsp;&nbsp;My Profiles
                                </div>
                              </Link>
                              <Link href="/pay">
                                <div className="flex flex-wrap">
                                  <BsCashCoin /> &nbsp;&nbsp;Send Crypto
                                </div>
                              </Link>
                              <Link
                                href="/qrPay"
                                onClick={() => btn_icon(!showmenu)}
                              >
                                <div className="flex flex-wrap">
                                  <AiOutlineQrcode />
                                  &nbsp;&nbsp;Scan QR and Pay
                                </div>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Breakpoint>
          </BreakpointProvider>

          <div className="mainside">
            <ConnectButton showBalance={false} chainStatus="icon" />
          </div>
        </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>
      </div>
    </header>
  );
};
export default Header;
