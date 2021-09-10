import { inject, observer } from "mobx-react";
import React from "react";
import "./home.scss";
import AppStore from "../../Store";
import Welcome from "../../components/Welcome/Welcome";
import ShortenForm from "../../components/ShortenForm/ShortenForm";
import Result from "../../components/Result/Result";
import Statistic from "../../components/Statistic/Statistic";
import BoostLink from "../../components/BoostLink/BoostLink";
import ShorteningLinkService from "../../core/services/shortening-link.service";
import { ShorteningLinkDto } from "../../core/interfaces/dtos/shorteningLink.dto";
import { Modal } from "antd";
import recognition_icon from "../../assets/images/icons/icon-brand-recognition.svg";
import records_icon from "../../assets/images/icons/icon-detailed-records.svg";
import customizable_icon from "../../assets/images/icons/icon-fully-customizable.svg";
import { AllResultsDto } from "../../core/interfaces/dtos/allResults.dto";
interface IState {
  shortedLink?: ShorteningLinkDto;
  allResults: AllResultsDto[];
  givenLink: string;
  btnClicked: boolean;
  inputClass: string;
  textClass: string;
  isCopied: boolean;
  copyBtnText: string;
}
@inject("appStore")
@observer
export default class HomePage extends React.Component<{
  appStore: AppStore;
}> {
  private shorteningLinkService: ShorteningLinkService = new ShorteningLinkService();
  state: IState = {
    shortedLink: undefined,
    allResults: [],
    givenLink: "",
    btnClicked: false,
    inputClass: "",
    textClass: "",
    isCopied: false,
    copyBtnText: "Copy",
  };
  public getShortenLink = (givenLink: string) => {
    this.setState({ givenLink });
  };
  onShorten = () => {
    this.setState({ btnClicked: true });
    if (this.state.givenLink) {
      this.getShortedLink(this.state.givenLink);
      this.setState({ inputValue: "" });
    } else {
      this.setState({ inputClass: "error_input", textClass: "error_text" });
    }
  };
  onCopied = (index: number, short_link: string) => {
    const allResults = this.state.allResults;
    allResults.forEach((result) => {
      result.isCopied = false;
      result.copyBtnText = "Copy";
    });
    this.setState({ isCopied: true, copyBtnText: "Copied!", allResults });

    this.state.allResults[index].isCopied = true;
    this.state.allResults[index].copyBtnText = "Copied!";

    navigator.clipboard.writeText(`${short_link}`);
  };
  private getShortedLink = async (givenLink: string) => {
    try {
      const shortedLink = await this.shorteningLinkService.getLink(givenLink);
      shortedLink.copyBtnText = "Copy";
      shortedLink.isCopied = false;

      this.state.allResults.push(shortedLink);

      this.setState({
        shortedLink,
      });
    } catch (error) {
      Modal.error({
        title: "The link is uncorrect, please write correct one!",
      });
    }
  };

  render() {
    return (
      <div className="home">
        <Welcome />
        <ShortenForm
          onShorten={this.onShorten}
          handleShortenLinkValue={this.getShortenLink}
          btnClicked={this.state.btnClicked}
          inputClass={this.state.inputClass}
          textClass={this.state.textClass}
        />
        <Result allResults={this.state.allResults} onCopied={this.onCopied} />

        <div className="advanced_statistics">
          <h1 className="adv_stats_title">Advanced Statistics</h1>
          <p className="adv_stats_text">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <Statistic
                  line={false}
                  class=""
                  title="Brand Recognition"
                  text="Boost your brand recognition with each click. Generic
                      links don’t mean a thing. Branded links help instil
                      confidence in your content."
                  image={recognition_icon}
                />
              </div>
              <div className="col-12 col-md-4">
                <Statistic
                  class="second_stat"
                  title="Detailed Records"
                  text="Gain insights into who is clicking your links. Knowing
                      when and where people engage with your content helps
                      inform better decisions."
                  image={records_icon}
                  line={true}
                />
              </div>
              <div className="col-12 col-md-4">
                <Statistic
                  line={true}
                  class="third_stat"
                  title="Fully Customizable"
                  text="Improve brand awareness and content discoverability
                      through customizable links, supercharging audience
                      engagement."
                  image={customizable_icon}
                />
              </div>
            </div>
          </div>
          <div className="desk_line">
            <hr className="line" />
          </div>
        </div>
        <BoostLink />
      </div>
    );
  }
}
