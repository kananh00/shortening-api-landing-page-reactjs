import { inject, observer } from "mobx-react";
import React, { ChangeEvent } from "react";
import http from "../../core/services/http";
import "./home.scss";
import AppStore from "../../Store";
import illustrationWorking from "../../assets/images/illustration-working.svg";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import ShorteningLinkService from "../../core/services/shortening-link.service";
import { ShorteningLinkDto } from "../../core/interfaces/dtos/shorteningLink.dto";
import { Input, Button, Modal } from "antd";
import Statistics from "../../components/Statistics/Statistics";
import recognition_icon from "../../assets/images/icon-brand-recognition.svg";
import records_icon from "../../assets/images/icon-detailed-records.svg";
import customizable_icon from "../../assets/images/icon-fully-customizable.svg";
import { AllResultsDto } from "../../core/interfaces/dtos/allResults.dto";
import { CopiedLinkDto } from "../../core/interfaces/dtos/copiedLink.dto";
interface IState {
  shortedLink?: ShorteningLinkDto;
  allResults: AllResultsDto[];
  // result: ResultsDto;
  givenLink: string;
  btnClicked: boolean;
  inputClass: string;
  textClass: string;
  isCopied: boolean;
  // copiedLink?: CopiedLinkDto;
  copyBtnText: string;
  inputValue: string;
}
@inject("appStore")
@observer
export default class HomePage extends React.Component<{
  appStore: AppStore;
}> {
  private shorteningLinkService: ShorteningLinkService =
    new ShorteningLinkService();
  state: IState = {
    shortedLink: undefined,
    allResults: [],
    givenLink: "",
    btnClicked: false,
    inputClass: "",
    textClass: "",
    isCopied: false,
    copyBtnText: "Copy",
    inputValue: "",
    // copiedLink: undefined
  };
  onShorten = () => {
    this.setState({ btnClicked: true });
    if (this.state.givenLink) {
      this.getShortedLink(this.state.givenLink);
      this.setState({inputValue: ""})
      // this.state.allResults[0].result.copy.isCopied = false;
    } else {
      this.setState({ inputClass: "error_input" });
      this.setState({ textClass: "error_text" });
    }
  };
  onCopied = (index:number, short_link:string) => {
    this.state.allResults.map((copied: CopiedLinkDto) => (
      copied.isCopied = false
    ))
    this.state.allResults.map((copied: CopiedLinkDto) => (
      copied.copyBtnText="Copy"
    ))
    this.setState({ isCopied: true });
    this.setState({ copyBtnText: "Copied!" });
    // this.setState({allResults[index].result.copy.isCopied: true})
    
    this.state.allResults[index].isCopied = true;
    this.state.allResults[index].copyBtnText = "Copied!";
    console.log(this.state.allResults[index])
    // console.log(this.state.allResults[index].result.copy.copyBtnText);
    
    navigator.clipboard.writeText(
      `${short_link}`
    );
  };
  private getShortedLink = async (givenLink: string) => {
    try {
      const shortedLink = await this.shorteningLinkService.getLink(givenLink);
      shortedLink.copyBtnText="Copy"
      shortedLink.isCopied=false;
      
        // let isCopied: false,
        // let copyBtnText: "Copy"
      
      this.state.allResults.push(shortedLink);
      console.log(this.state.allResults);
      // this.state.allResults.push(this.state.result)
      this.setState({
        shortedLink,
      });

      // this.saveResult(this.state.shortedLink?.result.full_short_link, this.state.shortedLink?.result.original_link);
    } catch (error) {
      console.error(error);
      Modal.error({
        title: "The link is uncorrect, please write correct one!",
      });
    }
  };

  // saveResult = (fullLink: string | undefined, originalLink: string | undefined) => {
  //   const result: ResultsDto = {
  //     full_short_link: fullLink,
  //     original_link: originalLink
  //   }
  //   const data: ShorteningLinkDto = {
  //     result,
  //   }
  //   this.shorteningLinkService.addResult(data);
  //   this.getAllSaved();
  // }
  // private getAllSaved = async () => {
  //   try {
  //     const allResults = await this.shorteningLinkService.getResults;
  //     console.log(this.state.allResults)
  //     this.setState({
  //       allResults,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     Modal.error({
  //       title: "Error",
  //     });
  //   }
  // }
  onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ givenLink: event.target.value });
    console.log(event.target.value);
    this.setState({inputValue: event.target.value})
  };

  render() {
    const { shortedLink } = this.state;
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
                  className={`shorten_input ${
                    this.state.btnClicked ? `${this.state.inputClass}` : ""
                  }`}
                  placeholder="Shorten a link here..."
                  onChange={this.onChangeInputValue}
                  value={this.state.inputValue}
                />
              </div>
              <div className="col-12 p-0">
                <i
                  className={`normal_error_text ${
                    this.state.btnClicked ? `${this.state.textClass}` : " "
                  }`}
                >
                  Please add a link
                </i>
              </div>
              <div className="col-12 p-0">
                <Button
                  className="shorten_btn"
                  type="primary"
                  onClick={this.onShorten}
                >
                  Shorten it!
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*         
        {this.state.allResults.map((resultShortedLink: ShorteningLinkDto)=> (
          <div className="result">
          <div
            className={`shortened_link_wrapper ${
              resultShortedLink?.result.full_short_link ? "showWrapper" : ""
            }`}
          >
            <p className="result_link ">{resultShortedLink?.result.full_short_link}</p>
            <hr className="shorted_link_divider_line" />
            <p className="result_link colored_link">{resultShortedLink?.result.original_link}</p>
            <Button
              className={`shorten_btn ${this.state.isCopied ? "copied" : ""}`}
              type="primary"
              onClick={this.onCopied}
            >
              {this.state.copyBtnText}
            </Button>
          </div>
        </div>
        ))} */}

                
        {this.state.allResults.map((link: AllResultsDto, index:number)=> (
          <div className="result" key={index}>
          <div
            className={`shortened_link_wrapper ${
              link.result?.full_short_link ? "showWrapper" : ""
            }`}
          >
            <p className="result_link ">{link.result?.full_short_link}</p>
            <hr className="shorted_link_divider_line" />
            <p className="result_link colored_link">{link.result?.original_link}</p>
            <Button
              className={`shorten_btn ${link.isCopied ? "copied" : ""}`}
              // className={`shorten_btn ${this.state.isCopied ? "copied" : ""}`}
              type="primary"
              onClick={() => this.onCopied(index, link.result?.full_short_link)}
              // onClick={this.onCopied}
            >
              {link.copyBtnText ? link.copyBtnText : "Copy"}
              {/* {this.state.copyBtnText} */}
            </Button>
          </div>
        </div>
        ))}
        {/* <div className="result">
          <div
            className={`shortened_link_wrapper ${
              shortedLink?.result.full_short_link ? "showWrapper" : ""
            }`}
          >
            <p className="result_link ">
              {shortedLink?.result.full_short_link}
            </p>
            <hr className="shorted_link_divider_line" />
            <p className="result_link colored_link">
              {shortedLink?.result.original_link}
            </p>
            <Button
              className={`shorten_btn ${this.state.isCopied ? "copied" : ""}`}
              type="primary"
              onClick={this.onCopied}
            >
              {this.state.copyBtnText}
            </Button>
          </div>
        </div> */}

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
