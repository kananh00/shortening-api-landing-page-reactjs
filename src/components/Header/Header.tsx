import React, {Component} from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/menu.svg'
export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="col">
                            <div className="menu_icon">
                                <img src={menu} alt="menu"/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}