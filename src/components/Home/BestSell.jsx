import React, { Component } from "react";

import CardItem from "../../container/CardItems/CardItem";
import { connect } from "react-redux";

class BestSell extends Component {
  render() {
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
          {this.props.data.map((item, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3">
                <CardItem {...this.props} dataItem={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataReducer.data,
  };
};

export default connect(mapStateToProps, null)(BestSell);
