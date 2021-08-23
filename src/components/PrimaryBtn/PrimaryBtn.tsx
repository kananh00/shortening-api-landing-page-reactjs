import React, {Component} from 'react';
import './PrimaryBtn.scss';

export default class PrimaryBtn extends Component{
    render(){
        return(
            <div className="primary_btn">
                <div className="btn_wrapper">
                    <p className="primary_btn_text">Get Started</p>
                </div>
            </div>
        )
    }
}