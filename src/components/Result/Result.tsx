import React, {Component} from 'react';
import {Button} from "antd";
import { AllResultsDto } from "../../core/interfaces/dtos/allResults.dto";
import './Result.scss';
 interface IProps{
    allResults: AllResultsDto[];
    onCopied: (index: number, shortLink: string) => void;
 }
export default class Result extends Component<IProps>{
    render(){
        return(
            <div className="result-component">
                {this.props.allResults.map((link: AllResultsDto, index: number) => (
                <div className="result" key={index}>
                  <div
                    className={`shortened_link_wrapper ${
                      link.result?.full_short_link ? "showWrapper" : ""
                    }`}
                  >
                    <div className="container-fluid p-0">
                      <div className="row justify-content-between">
                        <div className="col-12 col-md-7">
                          <p className="result_link original_link">
                            {link.result?.original_link}
                          </p>
                        </div>
                        <div className="col-12 d-md-none p-0">
                          <hr className="shorted_link_divider_line" />
                        </div>
                        <div className="col-12 col-md-3">
                          <p className="result_link colored_link">
                            {link.result?.full_short_link}
                          </p>
                        </div>
                        <div className="col-12 col-md-2">
                          <div className="copy_btn">
                            <Button
                              className={`shorten_btn ${
                                link.isCopied ? "copied" : ""
                              }`}
                              type="primary"
                              onClick={() =>
                                this.props.onCopied(index, link.result?.full_short_link)
                              }
                            >
                              {link.copyBtnText ? link.copyBtnText : "Copy"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
        )
    }
}