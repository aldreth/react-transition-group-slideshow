import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Slide from "../Slide";
import "./Slideshow.css";

export default class TransitionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picNum: 0,
      slideDirection: "right"
    };
  }

  childFactoryCreator = slideDirection => child => {
    return React.cloneElement(child, {
      classNames: slideDirection
    });
  };

  leftClickHandler = () => {
    const currentPicNum = this.state.picNum;
    const nextPicNum = currentPicNum === 0 ? 4 : currentPicNum - 1;
    this.setState({ picNum: nextPicNum, slideDirection: "left" });
  };

  rightClickHandler = () => {
    const currentPicNum = this.state.picNum;
    const nextPicNum = currentPicNum === 4 ? 0 : currentPicNum + 1;
    this.setState({ picNum: nextPicNum, slideDirection: "right" });
  };

  render() {
    return (
      <div className="container">
        <a className="left-arrow" onClick={this.leftClickHandler}>
          &#9664;
        </a>
        <TransitionGroup
          childFactory={this.childFactoryCreator(this.state.slideDirection)}
          className="slideshow-container"
        >
          <CSSTransition
            key={this.state.picNum}
            classNames={this.state.slideDirection}
            timeout={1000}
          >
            <Slide picNum={this.state.picNum} />
          </CSSTransition>
        </TransitionGroup>
        <a className="right-arrow" onClick={this.rightClickHandler}>
          &#9654;
        </a>
      </div>
    );
  }
}
