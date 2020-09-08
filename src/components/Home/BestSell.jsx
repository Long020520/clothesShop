import React, { Component } from "react";

import ImgItem from "../../Image/imgItem.jpg";
import ImgDetail from "../../Image/imgDetail.jpg";
import ImgDetailOne from "../../Image/imgDetailOne.jpg";
import ImgDetailTwo from "../../Image/imgDetailTwo.jpg";
import CardItem from "../../container/CardItems/CardItem";
// import { Col, Row } from "reactstrap";

class BestSell extends Component {
  render() {
    const data = [
      {
        imgSource: ImgItem,
        content: "Váy cổ V",
        price: "399,000đ",
        imgDetail: ImgDetail,
        imgDetailOne: ImgDetailOne,
        imgDetailTwo: ImgDetailTwo,
      },
      {
        imgSource: ImgItem,
        content: "Chân váy cạp chun",
        price: "399,000đ",
        imgDetail: ImgDetail,
        imgDetailOne: ImgDetailOne,
        imgDetailTwo: ImgDetailTwo,
      },
      {
        imgSource: ImgItem,
        content: "Váy nhăn cổ tròn nhún eo",
        price: "399,000đ",
        imgDetail: ImgDetail,
        imgDetailOne: ImgDetailOne,
        imgDetailTwo: ImgDetailTwo,
      },
      {
        imgSource: ImgItem,
        content:
          "Váy mixi 2 dây hoạ tiết chun eo jashjd jhasdbas jhasdb ạdba sabd ",
        price: "399,000đ",
        imgDetail: ImgDetail,
        imgDetailOne: ImgDetailOne,
        imgDetailTwo: ImgDetailTwo,
      },
    ];
    console.log(this.props);
    return (
      <div className="container-fluid">
        <p
          style={{
            fontWeight: "bold",
            fontSize: 25,
            marginBottom: 20,
            marginLeft: -20,
          }}
        >
          SẢN PHẨM BÁN CHẠY
        </p>
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3">
                <CardItem
                  {...this.props}
                  key={index}
                  imgSource={item.imgSource}
                  content={item.content}
                  price={item.price}
                  imgDetail={item.imgDetail}
                  imgDetailOne={item.imgDetailOne}
                  imgDetailTwo={item.imgDetailTwo}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BestSell;
