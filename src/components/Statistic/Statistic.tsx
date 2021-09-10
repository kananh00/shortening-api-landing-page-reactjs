import React, {Component} from 'react';
import './Statistic.scss';

interface IProps{
    title: string;
    text: string;
    image: string;
    class: string;
    line: boolean;
}
export default class Statistic extends Component<IProps>{
    render(){
        console.log(this.props.image)
        return(
            <div className={`statistics ${this.props.class}`}>
                  <div className="stats_img_wrapper">
                    <img src={this.props.image} alt="recognition" />
                  </div>
                  <div className={`stats_text_wrapper ${this.props.line ? "with_line" : ""}`}>
                    <h3 className="stats_title">{this.props.title}</h3>
                    <p className="stats_text">
                      {this.props.text}
                    </p>
                  </div>
                </div>
        )
    }
}