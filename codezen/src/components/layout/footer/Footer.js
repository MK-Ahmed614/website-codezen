import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
  BsGithub,
  BsFillTelephoneFill
} from "react-icons/bs";
import {ImLocation} from "react-icons/im";
import {FaEnvelope} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer
        className="footer-upper"
        style={{ borderBottom: "1px solid #3b4149" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="sign d-flex align-items-center text-white">
                <img src="../images/newsletter.png" alt="newsletter" />
                <p>best offers in your inbox</p>
              </div>
            </div>
            <div className="col-7">
              <div className="Sub-email">
                <div className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      subscribe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer
        className="footer-center"
        style={{ borderBottom: "1px solid #3b4149" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="txt-footer-center">
                <div className="footer-center-links">
                  <div className="img-logo-footer">
                    <img src="../images/15.png" alt="logo" />
                  </div>
                  <div className="social_icons">
                  <ul className="wrapper">
  <li className="icon facebook">
    <span className="tooltip">Facebook</span>
    <span> <BsFacebook/> </span>
  </li>
  <li className="icon twitter">
    <span className="tooltip">Twitter</span>
    <span><BsTwitter/> </span>
  </li>
  <li className="icon instagram">
    <span className="tooltip">Instagram</span>
    <span> <BsInstagram/> </span>
  </li>
  <li className="icon github">
    <span className="tooltip">Github</span>
    <span> <BsGithub/> </span>
  </li>
  <li className="icon youtube">
    <span className="tooltip">Youtube</span>
    <span> <BsYoutube/> </span>
  </li>
</ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="txt-footer-center">
              <h4>contact us</h4>
                <div className="footer-center-links">
                <address style={{ color: "#dadada", fontSize: "14px", marginBottom: '5px' }}>
                  <ImLocation style={{margin: '0 3px'}}/> Giza - Egypt
                  </address>
                  <a href="tel: +201118459882"> <BsFillTelephoneFill style={{margin: '0 3px'}}/>+201118459882</a>
                  <a
                    style={{ textTransform: "lowercase" }}
                    href="mailto: codezen99@gmail.com"
                  >
                  <FaEnvelope style={{margin: '0 3px'}}/>  codezen99@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="txt-footer-center">
                <h4>codezen</h4>
                <div className="footer-center-links">
                  <Link>home</Link>
                  <Link>our services</Link>
                  <Link>who are we</Link>
                  <Link>why choose us</Link>
                  <Link>our project</Link>
                  <Link>contact us</Link>
                  <Link>privacy policy</Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="txt-footer-center">
                <h4>our services</h4>
                <div className="footer-center-links">
                <Link>web developer</Link>
                  <Link>web applications</Link>
                  <Link>mobile applications</Link>
                  <Link>marketing</Link>
                  <Link>E-commerce App</Link>
                  <Link>Ui Ux design</Link>
                  <Link>graphic design</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="txt-co">
                <p style={{ textTransform: "capitalize" }}>
                  &copy; CodeZen. 2023. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="cards d-flex justify-content-end">
                <div>
                  <img src="./images/discover-svgrepo-com.svg" alt="discover" />
                </div>
                <div>
                  <img
                    src="./images/master-card-svgrepo-com.svg"
                    alt="master-card"
                  />
                </div>
                <div>
                  <img src="./images/paypal-3-svgrepo-com.svg" alt="paypal" />
                </div>
                <div>
                  <img src="./images/wepay-svgrepo-com.svg" alt="wepay" />
                </div>
                <div>
                  <img src="./images/maestro-svgrepo-com.svg" alt="maestro" />
                </div>
                <div>
                  <img src="./images/shopify-svgrepo-com.svg" alt="shopify" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
