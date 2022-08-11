import {
  FaEnvelope,
  FaFacebookF,
  FaFax,
  FaGithub,
  FaMedium,
  FaStickyNote,
  FaTicketAlt,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
  FaDiscord,
  FaTelegram
} from "react-icons/fa";
import Link from "next/link";

const style = {
  logoText: ` ml-[0.8rem] font-semibold text-2xl tracking-tight text-white`,
  img: `fill-current h-8 w-8 mr-2`,
};

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-purple-700 to-blue-600 text-center text-white lg:text-left">
        <div className="flex items-center justify-center border-b border-gray-300  lg:justify-between">
          <div className="mr-12 hidden lg:block">
            <span>Connect with us on social networks:</span>
          </div>
          <div className="flex justify-center">
            <a href="https://www.facebook.com/GrowPay" className="mr-6 text-white">
              <FaFacebookF title="facebook" className="w-2.5" />
            </a>
            <a href="https://twitter.com/gll_app" className="mr-6 text-white">
              <FaTwitter title="twitter" className="w-4" />
            </a>
            <a href="https://discord.com/invite/RVcBCYka" className="mr-6 text-white">
              <FaDiscord title="google" className="w-3.5" />
            </a>
            <a href="https://medium.com/@growlimitless" className="mr-6 text-white">
              <FaMedium title="instagram" className="w-3.5" />
            </a>
            <a href="https://www.linkedin.com/company/growglobalstrategies/" className="mr-6 text-white">
              <FaLinkedinIn title="linkedin" className="w-3.5" />
            </a>
            <a href="https://www.t.me/GLL_Community" className="text-white">
              <FaTelegram title="github" className="w-4" />
            </a>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <h1 className="mb-4 flex items-center justify-center text-2xl font-black font-semibold uppercase md:justify-start">
                <div className="mr-6 flex flex-shrink-0 items-center text-white">
                  <img

                    src="./img/GLLLogo.png"
                    //className="img-fluid d-none"
                    alt="#"
                  />
                </div>
              </h1>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase text-[#00ff00]">
                ABOUT
              </h6>
              <p className="mb-4">
                <a href="https://discord.com/invite/RVcBCYka" className="text-white-200">
                  Community
                </a>
              </p>
              <p className="mb-4">
                <a href="https://growlimitless.app/" className="text-white-200">
                  Token
                </a>
              </p>
              <p className="mb-4">
                <a href="https://gll.gitbook.io/growlimitless-whitepaper-gll/" className="text-white-200">
                  Documentation
                </a>
              </p>
              <p className="mb-4">
                <a href="https://growlimitless.app/" className="text-white-200">
                  FAQ
                </a>
              </p>
            </div>

            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase text-[#00ff00] md:justify-start">
                HELP
              </h6>
              <a href="#" className="mb-4 flex items-center justify-center md:justify-start">

                <FaStickyNote title="address" className="mr-4 w-4" />
                Report An Issue
              </a>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <FaEnvelope title="e-mail" className="mr-4 w-4" />{" "}
                operations@growglobal.io
              </p>

            </div>
          </div>
        </div>
        <div className="bg-black p-6 text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-xl text-transparent">
            © 2022 Copyright:{" "}
          </span>
          <a className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-xl text-transparent">
            A Product From Grow Global Strategies Pvt Ltd.
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;