import React from "react";

const Footer = () => {
  return (
      <footer>
        <div className="link_wrapper">
          <div className="main">
            <a href="#">
              <b>find a store</b>
            </a>
            <a href="#">
              <b>sign up for email</b>
            </a>
            <a href="#">
              <b>become a member</b>
            </a>
            <a href="#">
              <b>send us feedback</b>
            </a>
          </div>

          <div className="get_help">
            <h2>get help</h2>
            <a href="#">Order Status</a>
            <a href="#">Shiping and Delivery</a>
            <a href="#">Returns</a>
            <a href="#">Payment Options</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="about_nike">
            <h2>about nike</h2>
            <a href="#">News</a>
            <a href="#">Careers</a>
            <a href="#">Investors</a>
            <a href="#">Sustainability</a>
          </div>

          <div className="social_media">
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>

        <hr />

        <div className="footer_wrapper_bottom">
          <div className="location">
            <a href="#">
              <i className="fa fa-map-marker"></i>Iran
            </a>
          </div>

          <div className="copy_right">
            <p>
              Copyright {new Date().getFullYear()} |{" "}
              <a href="http://n4jari.ir" target="_blank">
                {" "}
                &copy;n4jari{" "}
              </a>
            </p>
          </div>

          <div className="footer_wrapper_list">
            <a href="#">Guides</a>
            <a href="#">Terms of Use</a>
            <a href="#">Terms of Sale</a>
            <a href="#">Copmany Details</a>
            <a href="#">Privacy & Cookie Policy</a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
