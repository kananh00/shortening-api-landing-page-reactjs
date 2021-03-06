import React, { Component } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.svg";
import Menu from "../Menu/Menu";
import { Button } from "antd";
export default class Header extends Component {
  state = {
    menuIsVisible: false,
  };
  onMenuIconClick = () => {
    this.setState({
      menuIsVisible: !this.state.menuIsVisible
    })
  };
  render() {
    return (
      <div className="header">
        <div className="header_menu">
          <Menu
            onMenuIconClick={this.onMenuIconClick}
            visible={this.state.menuIsVisible}
          />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-md-2 d-flex align-items-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="col d-md-none">
              <div className="menu_icon">
                <img
                  onClick={() => this.onMenuIconClick()}
                  src={menu}
                  alt="menu"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-7 d-none d-md-flex align-items-center">
              <div className="nav_bar">
                <p className="nav_link">Features</p>
                <p className="nav_link">Pricing</p>
                <p className="nav_link">Resources</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 d-none d-md-flex align-items-center">
              <p className="login_btn nav_link">Login</p>
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
