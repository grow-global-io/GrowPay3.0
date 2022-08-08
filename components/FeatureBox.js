import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Link from "next/link";



const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const featurebox = () => (
  <div className="row">
    <div className="col-lg-4 col-md-6 mb-3">
      <Link href="/register">
        <div className="feature-box f-boxed style-3">
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={0}
            duration={600}
            triggerOnce
          >
            <i className="bg-color-2 i-boxed icon_wallet"></i>
          </Reveal>
          <div className="text">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={100}
              duration={600}
              triggerOnce
            >
              <h4 className="">Connect Your Wallet</h4>
            </Reveal>
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={200}
              duration={600}
              triggerOnce
            >
              <p className="">
                Aunthenticate yourself by connecting to you wallet. You can
                choose from the multiple wallet choosing feature.{" "}
              </p>
            </Reveal>
          </div>
          <i className="wm icon_wallet"></i>
        </div>
      </Link>
    </div>

    <div className="col-lg-4 col-md-6 mb-3">
      <Link href="/register">
        <div className="feature-box f-boxed style-3">
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={0}
            duration={600}
            triggerOnce
          >
            <i className=" bg-color-2 i-boxed icon_cloud-upload_alt"></i>
          </Reveal>
          <div className="text">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={100}
              duration={600}
              triggerOnce
            >
              <h4 className="">Validate You Phone/Email with OTP</h4>
            </Reveal>
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={200}
              duration={600}
              triggerOnce
            >
              <p className="">
                Register your phone/email address and validate the same using a
                One-Time-Password.
              </p>
            </Reveal>
          </div>
          <i className="wm icon_cloud-upload_alt"></i>
        </div>
      </Link>
    </div>

    <div className="col-lg-4 col-md-6 mb-3">
      <Link href="/pay">
        <div className="feature-box f-boxed style-3">
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={0}
            duration={600}
            triggerOnce
          >
            <i className=" bg-color-2 i-boxed icon_tags_alt"></i>
          </Reveal>
          <div className="text">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={100}
              duration={600}
              triggerOnce
            >
              <h4 className="">Starting sending Crypto</h4>
            </Reveal>
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={200}
              duration={600}
              triggerOnce
            >
              <p className="">
                Start sending crypto directly to your friend's Phone number,
                email ID or QR code.
              </p>
            </Reveal>
          </div>
          <i className="wm icon_tags_alt"></i>
        </div>
      </Link>
    </div>
  </div>
);
export default featurebox;
