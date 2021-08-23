import React, {Component} from 'react';
import './Statistics.scss';
import {StatisticsDto} from '../../core/interfaces/dtos/statistics.dto'
import recognition from '../../assets/images/icon-brand-recognition.svg';
export default class Statistics extends Component<StatisticsDto>{
    render(){
        return(
            <div className="statistics">
                <img src={`${this.props.image}`} alt="statistics img" />
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
