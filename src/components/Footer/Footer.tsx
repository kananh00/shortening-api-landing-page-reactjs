import React, {Component} from "react";
import './Footer.scss';
import logo from '../../assets/images/logo.svg';
export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="features">
                                <h4 className="footer_headings">Features</h4>
                                <ul>
                                    <li>Link Shortening</li>
                                    <li>Branded Links</li>
                                    <li>Analytics</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="resources">
                                <h4 className="footer_headings">Resources</h4>
                                <ul>
                                    <li>Blog</li>
                                    <li>Developers</li>
                                    <li>Support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="company">
                                <h4 className="footer_headings">Company</h4>
                                <ul>
                                    <li>About</li>
                                    <li>Our Team</li>
                                    <li>Careers</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="social_media">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}