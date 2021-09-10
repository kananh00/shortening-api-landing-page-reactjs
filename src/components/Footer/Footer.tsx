import React, { Component } from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icons/icon-facebook.svg";
import twitter from "../../assets/images/icons/icon-twitter.svg";
import pinterest from "../../assets/images/icons/icon-pinterest.svg";
import instagram from "../../assets/images/icons/icon-instagram.svg";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3">
              <img className="footer_logo" src={logo} alt="logo" />
            </div>
            <div className="col-12 col-md-2">
              <div className="features footer_links_heading">
                <h4 className="footer_headings">Features</h4>
                <ul>
                  <li>Link Shortening</li>
                  <li>Branded Links</li>
                  <li>Analytics</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="resources footer_links_heading">
                <h4 className="footer_headings">Resources</h4>
                <ul>
                  <li>Blog</li>
                  <li>Developers</li>
                  <li>Support</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="company footer_links_heading">
                <h4 className="footer_headings">Company</h4>
                <ul>
                  <li>About</li>
                  <li>Our Team</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="social_media">
                <img
                  src={facebook}
                  alt="facebook"
                  className="social_icon facebook"
                />
                <img src={twitter} alt="twitter" className="social_icon" />
                <img src={pinterest} alt="pinterest" className="social_icon" />
                <img src={instagram} alt="instagram" className="social_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
