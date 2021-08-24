import React, {Component} from 'react';
import './Statistics.scss';
import {StatisticsDto} from '../../core/interfaces/dtos/statistics.dto'

export default class Statistics extends Component<StatisticsDto>{
    render(){
        return(
            <div className="statistics">
                <img src={'../../assets/images/icon-brand-recognition.svg'} alt="statistics img" />
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
