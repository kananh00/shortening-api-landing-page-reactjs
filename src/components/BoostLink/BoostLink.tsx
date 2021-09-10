import React, { Component } from "react";
import {Button} from "antd";
import "./BoostLink.scss";

export default class BoostLink extends Component {
  render() {
    return (
      <div className="boost_link">
        <h1 className="boost_title">Boost your links today</h1>
        <Button className="started_btn" type="primary" shape="round">
          Get Started
        </Button>
      </div>
    );
  }
}
