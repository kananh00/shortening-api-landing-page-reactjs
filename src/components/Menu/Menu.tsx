import React, { Component } from "react";
import { Button } from "antd";
import "./Menu.scss";
interface IProps{
    onMenuIconClick: React.MouseEventHandler<HTMLButtonElement>;
    visible: boolean;
}
export default class Menu extends Component<IProps> {
  render() {
    return (
      <div className={`menu ${this.props.visible ? "menu_visible" : "menu_not_visible"}`}>
        <div className="container-fluid"></div>
        <div className="row">
          <div className="col-12">
            <div className="menu_link">
              <p>Features</p>
            </div>
          </div>
          <div className="col-12">
            <div className="menu_link">
              <p>Pricing</p>
            </div>
          </div>
          <div className="col-12">
            <div className="menu_link">
              <p>Resources</p>
            </div>
          </div>
          <hr className="menu_line" />
          <div className="col-12">
            <div className="menu_btn menu_link login">
              <p>Login</p>
            </div>
          </div>
          <div className="col-12">
            <div className="menu_btn signup">
              <Button className="started_btn" type="primary" shape="round">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
