import React, { Component } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.svg";
import Menu from "../Menu/Menu";
export default class Header extends Component {
  state = {
    menuIsVisible: false,
  };
  onMenuIconClick = () => {
    if (this.state.menuIsVisible === false) {
      this.setState({ menuIsVisible: true });
    } else {
      this.setState({ menuIsVisible: false });
    }
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
            <div className="col">
              <img src={logo} alt="logo" />
            </div>
            <div className="col">
              <div className="menu_icon">
                <img
                  onClick={() => this.onMenuIconClick()}
                  src={menu}
                  alt="menu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
