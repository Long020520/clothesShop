import React, { Component } from "react";

import "./CardItem.scss";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { CarouselItem, Carousel, CarouselControl } from "reactstrap";

class CardItem extends Component {
  state = {
    isOpen: false,
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
    return (
      <div className="cardDefault">
        <div>
          <div className="cardActive" style={{ textAlign: "center" }}>
            <img src={this.props.dataItem.imgSource} alt="" width="100%" />
            <p className="content" style={{ marginBottom: 0, fontSize: 12 }}>
              {this.props.content}
            </p>
            <p style={{ fontWeight: "bold" }}>{this.props.dataItem.price}</p>
          </div>
          <div className="cardActiveHover" style={{ textAlign: "center" }}>
            <img src={this.props.dataItem.imgDetail} alt="" width="100%" />
            <p
              className="content"
              style={{
                marginBottom: 0,
                fontSize: 12,
              }}
            >
              {this.props.content}
            </p>
            <p style={{ fontWeight: "bold" }}>{this.props.dataItem.price}</p>
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
            <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "10%",
                    marginRight: 15,
                  }}
                >
                  {this.state.listImg.map((item, index) => {
                    return (
                      <button
                        className="imgActive"
                        style={{
                          padding: 5,
                          border: "1px solid #dbdada",
                          marginBottom: 5,
                        }}
                        onClick={() => this.setState({ activeIndex: index })}
                        key={index}
                      >
                        <img src={item} alt="imgDetail" width="100%" />
                      </button>
                    );
                  })}
                </div>
                <div
                  style={{
                    width: "50%",
                    marginLeft: 5,
                    marginRight: 10,
                  }}
                >
                  <Carousel
                    interval={false}
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
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
                <div style={{ width: "35%", marginLeft: 15 }}>
                  <div>
                    <p className="title">{this.props.dataItem.content}</p>
                    <p>
                      Tình trạng:{" "}
                      <span className="title">
                        {this.props.dataItem.content}
                      </span>
                    </p>
                    <hr
                      style={{ borderTop: "1px dotted #8c8b8b", opacity: 0.5 }}
                    />
                    <p className="title">{this.props.dataItem.price}</p>
                    <p className="title">Màu sắc</p>

                    <div className="borderColor">
                      {/* <button> */}
                      <img src={this.state.listImg[0]} alt="1" width="100%" />
                      {/* <img src={this.state.listImg[0]} alt="1" width="100%" /> */}
                      {/* </button> */}
                    </div>
                    {/* <p className="borderColor">
                      <button>
                        <img src={this.state.listImg[0]} alt="1" width="100%" />
                      </button>
                    </p> */}
                    <div style={{ marginTop: 10, marginBottom: 15 }}>
                      <button
                        className="imgActive"
                        style={{
                          width: "15%",
                          padding: 10,
                          border: "1px solid #dbdada",
                          marginBottom: 5,
                          marginRight: 8,
                        }}
                      >
                        {" "}
                        M
                      </button>
                      <button
                        className="imgActive"
                        style={{
                          width: "15%",
                          padding: 10,
                          border: "1px solid #dbdada",
                          marginBottom: 5,
                        }}
                      >
                        {" "}
                        L
                      </button>
                    </div>
                    <div>
                      <Button style={{ width: "60%" }}>Sở hữu ngay</Button>
                    </div>
                    <hr
                      style={{ borderTop: "1px dotted #8c8b8b", opacity: 0.5 }}
                    />
                    <div style={{ textAlign: "center" }}>
                      <a style={{ color: "black" }} href="/">
                        Xem chi tiết sản phầm {">>"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default CardItem;
