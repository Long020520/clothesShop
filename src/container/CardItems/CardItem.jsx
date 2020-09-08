import React, { Component } from "react";

import "./CardItem.scss";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { CarouselItem, Carousel } from "reactstrap";
import { CarouselIndicators } from "reactstrap";
import { CarouselControl } from "reactstrap";

class CardItem extends Component {
  state = {
    isOpen: false,
    imgSource: this.props.imgSource,
    // imgDetail: this.props.imgDetail,
    // imgDetailOne: this.props.imgDetailOne,
    // imgDetailTwo: this.props.imgDetailTwo,
    listImg: [
      this.props.imgDetail,
      this.props.imgDetailOne,
      this.props.imgDetailTwo,
    ],
    activeIndex: 0,
    animating: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      imgSource: this.props.imgSource,
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
    return (
      <div className="cardDefault">
        <div>
          <div className="cardActive" style={{ textAlign: "center" }}>
            <img src={this.props.imgSource} alt="" width="100%" />
            <p className="content" style={{ marginBottom: 0, fontSize: 12 }}>
              {this.props.content}
            </p>
            <p style={{ fontWeight: "bold" }}>{this.props.price}</p>
          </div>
          <div className="cardActiveHover" style={{ textAlign: "center" }}>
            <img src={this.props.imgDetail} alt="" width="100%" />
            <p
              className="content"
              style={{
                marginBottom: 0,
                fontSize: 12,
              }}
            >
              {this.props.content}
            </p>
            <p style={{ fontWeight: "bold" }}>{this.props.price}</p>
          </div>
          <div className="cardHover">
            <Button onClick={this.toggle} style={{ width: "50%" }}>
              <i class="fas fa-shopping-cart fa-sm"> Mua nhanh</i>
            </Button>
            <Button style={{ width: "50%" }}>
              <i class="far fa-eye fa-sm"> Xem chi tiết</i>
            </Button>
          </div>
        </div>
        <div>
          <Modal isOpen={this.state.isOpen} className="modal-config-width">
            <ModalHeader toggle={this.toggle}>
              <span style={{ fontWeight: "bold" }}>{this.props.content}</span>
            </ModalHeader>
            <ModalBody>
              <div style={{ display: "flex" }}>
                <div style={{ width: "15%" }}>
                  {this.state.listImg.map((item, index) => {
                    return (
                      <div
                        className="imgActive"
                        style={{
                          width: 60,
                          height: 85,
                          padding: 5,
                          border: "1px solid #dbdada",
                          marginBottom: 5,
                        }}
                        onClick={() => this.setState({ activeIndex: index })}
                        key={index}
                      >
                        <img src={item} alt="imgDetail" width="100%" />
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    width: "50%",
                    marginLeft: 5,
                    marginRight: 10,
                    // height: "70%",
                  }}
                >
                  {/* <img src={this.state.imgSource} width="100%" /> */}
                  <Carousel
                    autoPlay={false}
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    {/* <CarouselIndicators
                      items={this.state.listImg}
                      activeIndex={this.state.activeIndex}
                      onClickHandler={this.goToIndex}
                    /> */}
                    {slides}
                    <CarouselControl
                      direction="prev"
                      directionText="Previous"
                      onClickHandler={this.previous}
                    />
                    <CarouselControl
                      direction="next"
                      directionText="Next"
                      onClickHandler={this.next}
                    />
                  </Carousel>
                </div>
                <div style={{ width: "35%" }}>3</div>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default CardItem;
