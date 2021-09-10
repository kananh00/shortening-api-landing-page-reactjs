import React, { Component, ChangeEvent } from "react";
import { Input, Form, Button, message } from "antd";
import "./ShortenForm.scss";

interface IProps {
  onShorten: React.MouseEventHandler<HTMLButtonElement>;
  handleShortenLinkValue: (givenLink: string) => void;
  btnClicked: boolean;
  inputClass: string;
  textClass: string;
}
interface IState {
    inputValue: string;
}
export default class ShortenForm extends Component<IProps, IState> {
    state: IState = {
        inputValue: ""
    }
  onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.handleShortenLinkValue(event.target.value);
    this.setState({inputValue: event.target.value})
  };
  onFinish = () => {
    message.success("Wait, we start shortening!");
    this.setState({inputValue: ""})
  };
  onFinishFailed = () => {
    message.error("Shortening process is failed!");
    
  };
 
  render() {
    return (
      <div className="shorten_link">
        <Form onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center align-items-md-end">
              <div className="col-12 col-md-9 p-0 order-md-1">
                <div className="shorten_input">
                  <Input
                    className={`shorten_input ${
                      this.props.btnClicked ? `${this.props.inputClass}` : ""
                    }`}
                    placeholder="Shorten a link here..."
                    onChange={this.onChangeInputValue}
                    value={this.state.inputValue}
                  />
                </div>
              </div>
              <div className="col-12 order-md-3 p-0">
                <i
                  className={`normal_error_text ${
                    this.props.btnClicked ? `${this.props.textClass}` : " "
                  }`}
                >
                  Please add a link
                </i>
              </div>
              <div className="col-12 col-md-3 p-0 order-md-2">
                <Button
                  className="shorten_btn"
                  type="primary"
                  onClick={this.props.onShorten}
                  htmlType="submit"
                >
                  Shorten it!
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}
