import { inject, observer } from "mobx-react";
import React from "react";
import http from "../../core/services/http";
import "./home.scss";
import AppStore from "../../Store";
import illustrationWorking from "../../assets/images/illustration-working.svg";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import { Input, Button } from "antd";
import Statistics from "../../components/Statistics/Statistics";
import recognition from '../../assets/images/icon-brand-recognition.svg';
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
          <PrimaryBtn />
        </div>
        <div className="shorten_link">
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-12">
                <Input
                  className="shorten_input"
                  placeholder="Shorten a link here..."
                />
              </div>
              <div className="col-12">
                <Button className="shorten_btn" type="primary">
                  Shorten
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="advanced_statistics">
          <h1 className="adv_stats_title">Advanced Statistics</h1>
          <p className="adv_stats_text">Track how your links are performing across the web with our advanced statistics dashboard</p>
          <Statistics image="recognition" title="Brand Recognition" text="hello"/>
        </div>
      </div>
    );
  }
}
