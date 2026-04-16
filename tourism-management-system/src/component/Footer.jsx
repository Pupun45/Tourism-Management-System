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
                    noValidate
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
                    <li><Link to="/">Home</Link></li>
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
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </a>

                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>

                    <a
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.568-.992 3.992-.283 1.193.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.094.393-.306 1.241-.347 1.411-.054.223-.178.271-.413.162-1.545-.718-2.511-2.971-2.511-4.786 0-3.896 2.833-7.472 8.163-7.472 4.281 0 7.608 3.05 7.608 7.124 0 4.256-2.68 7.683-6.4 7.683-1.251 0-2.428-.65-2.83-1.42l-.771 2.935c-.279 1.063-1.036 2.39-1.543 3.205 1.272.391 2.628.601 4.024.601 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>
                    </a>

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
                  <Link to="/"> Tourism Management System.</Link>
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
