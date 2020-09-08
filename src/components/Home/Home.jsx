import React, { Component } from "react";

import background from "../../Image/background.jpg";
import backgroundTwo from "../../Image/background2.jpg";
import backgroundThree from "../../Image/background3.jpg";
import backgroundFour from "../../Image/background4.jpg";
import backgroundFive from "../../Image/background5.jpg";
import BestSell from "./BestSell";

class Home extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
          data-interval="2500"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={background} alt="First slide" />
            </div>
            <div class="carousel-item ">
              <img
                class="d-block w-100"
                src={backgroundTwo}
                alt="First slide"
              />
            </div>
            <div class="carousel-item ">
              <img
                class="d-block w-100"
                src={backgroundThree}
                alt="First slide"
              />
            </div>
            <div class="carousel-item ">
              <img
                class="d-block w-100"
                src={backgroundFour}
                alt="First slide"
              />
            </div>
            <div class="carousel-item ">
              <img
                class="d-block w-100"
                src={backgroundFive}
                alt="First slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div style={{ marginTop: 60 }}>
          <BestSell {...this.props} />
        </div>
      </div>
    );
  }
}

export default Home;
