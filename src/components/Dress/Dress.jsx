import React, { Component } from "react";

import ImgItem from "../../Image/imgItem.jpg";
import CardItem from "../../container/CardItems/CardItem";
import { Col, Row } from "reactstrap";

class Dress extends Component {
  render() {
    const data = [
      {
        imgSource: ImgItem,
        content: "Vay dep1",
        price: "399,000đ",
      },
      {
        imgSource: ImgItem,
        content: "Vay dep2",
        price: "399,000đ",
      },
      {
        imgSource: ImgItem,
        content: "Vay dep3",
        price: "399,000đ",
      },
      {
        imgSource: ImgItem,
        content: "Vay dep4",
        price: "399,000đ",
      },
    ];
    console.log(this.props);
    return (
      <div className="container">
        <p style={{ fontWeight: "bold", fontSize: 25 }}>SẢN PHẨM BÁN CHẠY</p>
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3">
                <CardItem
                  key={index}
                  imgSource={item.imgSource}
                  content={item.content}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Dress;
