import React, { Component } from "react";

import "./DetailItem.scss";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { CarouselItem, Carousel, CarouselControl } from "reactstrap";

class DetailItem extends Component {
  state = {
    imgSource: this.props.dataItem.imgSource,
    listImg: [
      this.props.dataItem.imgDetail,
      this.props.dataItem.imgDetailOne,
      this.props.dataItem.imgDetailTwo,
    ],
    activeIndex: 0,
    animating: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      activeIndex: 0,
    });
  };

  next = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === this.state.listImg.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex,
    });
  };

  previous = () => {
    if (this.state.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.listImg.length - 1
        : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex,
    });
  };

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const slides = this.state.listImg.map((item, index) => {
      return (
        <CarouselItem
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
          key={index}
        >
          <img src={item} alt="img" width="100%" />
        </CarouselItem>
      );
    });
    console.log(this.props);
    return <div></div>;
  }
}

export default DetailItem;
