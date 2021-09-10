import React, { Component } from "react";
import { Button } from "antd";

import illustrationWorking from "../../assets/images/illustration-working.svg";
import "./Welcome.scss";

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="container-fluid p-0 my-md-4">
          <div className="row m-0">
            <div className="col-12 col-md-5 p-0 order-md-2">
              <div className="home_img">
                <div className="illustration">
                  <img src={illustrationWorking} alt="illustration working" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 order-md-1">
              <div className="home_info">
                <h1 className="info_title">More than just shorter links</h1>
                <p className="info_text">
                  Build your brand's recognition and get detailed insight on how
                  your links are performing.
                </p>
                <Button className="started_btn" type="primary" shape="round">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
