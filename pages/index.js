import React, { useEffect } from "react";
import SliderMain from "../components/SliderMain";
import Demo from "../components/demo";
import { useAccount, useNetwork } from "wagmi";
import Footer from "../components/menu/Footer";
import { createGlobalStyle } from "styled-components";
import Header from "../components/menu/header";
import FeatureBox from "../components/FeatureBox";

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

const Home = () => {
  const { address, isConnected } = useAccount();

  return (
    <div>
      <GlobalStyles />
      <Header />
      <section
        className="jumbotron breadcumb no-bg h-vh bg-blur"
        style={{
          backgroundImage: `url(${"./img/gallery/6.png"})`,
        }}
      >
        <SliderMain />
      </section>

      <section className="no-bottom container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Demo</h2>
              <div className="small-border"></div>
            </div>
          </div>

          <Demo />
        </div>
      </section>

      <section className="container-fluid bg-gray">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Send and Receive Crypto to your Phone/Email</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <FeatureBox />
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Home;
