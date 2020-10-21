import React, { Component } from "react";

import ImgItem from "../../Image/imgItem.jpg";
import DetailItem from "../../container/DetailItem/DetailItem";

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
    // console.log(this.state);
    return (
      <div className="container">
        <DetailItem />
      </div>
    );
  }
}

export default Dress;
