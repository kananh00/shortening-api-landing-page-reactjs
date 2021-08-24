import { inject, observer } from "mobx-react";
import React from "react";
import http from "../../core/services/http";
import "./home.scss";
import AppStore from "../../Store";
import illustrationWorking from "../../assets/images/illustration-working.svg";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import { Input, Button } from "antd";
import Statistics from "../../components/Statistics/Statistics";
import recognition_icon from "../../assets/images/icon-brand-recognition.svg";
import records_icon from "../../assets/images/icon-detailed-records.svg";
import customizable_icon from "../../assets/images/icon-fully-customizable.svg";
@inject("appStore")
@observer
export default class HomePage extends React.Component<{
  appStore: AppStore;
}> {
  render() {
    return (
      <div className="home">
        <div className="home_img">
          <div className="illustration">
            <img src={illustrationWorking} alt="illustration working" />
          </div>
        </div>
        <div className="home_info">
          <h1 className="info_title">More than just shorter links</h1>
          <p className="info_text">
            Build your brand's recognition and get detailed insight on how your
            links are performing.
          </p>
          <Button className="started_btn" type="primary" shape="round">
            Get Started
          </Button>
        </div>
        <div className="shorten_link">
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 p-0">
                <Input
                  className="shorten_input"
                  placeholder="Shorten a link here..."
                />
              </div>
              <div className="col-12 p-0">
                <Button className="shorten_btn" type="primary">
                  Shorten it!
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="advanced_statistics">
          <h1 className="adv_stats_title">Advanced Statistics</h1>
          <p className="adv_stats_text">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
          <div className="statistics">
            <div className="stats_img_wrapper">
              <img src={recognition_icon} alt="recognition" />
            </div>
            <div className="stats_text_wrapper">
              <h3 className="stats_title">Brand Recognition</h3>
              <p className="stats_text">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div className="statistics">
            <div className="stats_img_wrapper">
              <img src={records_icon} alt="records" />
            </div>
            <div className="stats_text_wrapper with_line">
              <h3 className="stats_title">Detailed Records</h3>
              <p className="stats_text">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div className="statistics">
            <div className="stats_img_wrapper">
              <img src={customizable_icon} alt="recognition" />
            </div>
            <div className="stats_text_wrapper with_line">
              <h3 className="stats_title">Fully Customizable</h3>
              <p className="stats_text">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="boost_link">
          <h1 className="boost_title">Boost your links today</h1>
          <Button className="started_btn" type="primary" shape="round">
            Get Started
          </Button>
        </div>
      </div>
    );
  }
}
