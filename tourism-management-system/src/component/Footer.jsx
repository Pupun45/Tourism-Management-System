import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="new_footer_area bg_color ">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">

              {/* ======================== COLUMN 1 ======================== */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                  <p>Checked out our TSM.</p>

                  <form
                    action="#"
                    className="f_subscribe_two mailchimp"
                    method="post"
                    noValidate="true"
                  >
                    <input
                      type="text"
                      name="EMAIL"
                      className="form-control memail"
                      placeholder="Email"
                    />
                    <button className="btn btn_get btn_get_two" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              {/* ======================== COLUMN 2 ======================== */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Main menu</h3>
                  <ul className="list-unstyled f_list">
                    <li><Link to="/tourism-management-system">Home</Link></li>
                    <li><Link to="/about-us"> About</Link></li>
                    <li><Link to="/Package">Package</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    <li><Link to="/Contact">Contact us</Link></li>
                  </ul>
                </div>
              </div>

              {/* ======================== COLUMN 3 ======================== */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                  <ul className="list-unstyled f_list">
                    <li><button className="footer-button">FAQ</button></li>
                    <li><button className="footer-button">Terms & Conditions</button></li>
                    <li><button className="footer-button">Reporting</button></li>
                    <li><button className="footer-button">Documentation</button></li>
                    <li><button className="footer-button">Support Policy</button></li>
                    <li><button className="footer-button">Privacy</button></li>
                  </ul>
                </div>
              </div>

              {/* ======================== COLUMN 4 (SOCIAL) ======================== */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                >
                  <h3 className="f-title f_600 t_color f_size_18">Connect With Us</h3>
                  <div className="f_social_icon">

                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fab fa-facebook"
                    ></a>

                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fab fa-twitter"
                    ></a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fab fa-linkedin"
                    ></a>

                    <a
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fab fa-pinterest"
                    ></a>

                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* FOOTER BG */}
          <div className="footer_bg">
            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="footer_bottom">
          <div className="container">
            <div className="align-items-center copyright1">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">
                  © 2024 All rights reserved
                  <Link to="/tourism-management-system"> Tourism Management System.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
