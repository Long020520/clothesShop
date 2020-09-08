import React, { Component } from "react";
// import { Input, Button } from "reactstrap";
// import "./Header.scss";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#EFEFEF",
            width: "100%",
          }}
        >
          <div
            style={{
              marginLeft: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                paddingRight: "10px",
                opacity: ".5",
              }}
            >
              <i class="fas fa-phone-alt"></i>
            </p>
            <p style={{ marginTop: "10px", fontSize: "13px" }}>
              <b>0866765101-0356949107</b>
            </p>
          </div>
          <div
            style={{
              marginRight: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "13px", margin: "0px 30px 16px 30px" }}>
              <i class="fas fa-phone-alt"></i>
              Tài khoản
            </p>
            <p style={{ fontSize: "13px", margin: "0px 30px 16px 0px" }}>
              <i class="fas fa-phone-alt"></i>
              Giỏ hàng(0)
            </p>
          </div>
        </div>
        <div
          style={{
            // display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // height: "80px",
          }}
        >
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">current</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Header;
