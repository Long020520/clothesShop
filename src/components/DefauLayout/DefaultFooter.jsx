import React, { Component } from "react";

import { Input, Button } from "reactstrap";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <hr />
        <div
          className="row"
          style={
            {
              // paddingLeft: "auto",
              // paddingRight: "auto",
              // padding: "20px 80px",
            }
          }
        >
          <div className="col-sm-6 col-lg-3">
            <h6>GỌI MUA HÀNG ( 8:00 - 22:00 )</h6>
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "0px" }}>
                <i class="fas fa-phone-alt"></i>
              </div>
              <h5 style={{ marginLeft: "10px" }}>0356949107</h5>
            </div>
            <p style={{ fontSize: "12px" }}>Tất cả các ngày trong tuần</p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h6> GÓP Ý,KHIẾU NẠI ( 8:00 - 21:00 )</h6>
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "0px" }}>
                <i class="fas fa-phone-alt"></i>
              </div>
              <h5 style={{ marginLeft: "10px" }}>0356949107</h5>
            </div>
            <p style={{ fontSize: "12px" }}>
              Tất cả các ngày trong tuần(Trừ ngày lễ)
            </p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h6>ĐĂNG KÍ NHẬN THÔNG TIN MỚI</h6>
            <div style={{ display: "flex" }}>
              <Input
                placeholder="Nhập email của bạn"
                style={{ width: "60%" }}
              />
              <Button style={{ marginLeft: "5px" }}>Đăng kí</Button>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h6>THEO DÕI CHÚNG TÔI</h6>
            <div style={{ display: "flex", padding: "10px" }}>
              <i class="fab fa-facebook-f fa-2x"></i>
              <i class="fab fa-facebook-f fa-2x"></i>
              <i class="fab fa-facebook-f fa-2x"></i>
              <i class="fab fa-facebook-f fa-2x"></i>
            </div>
          </div>
        </div>
        <div
          className="row"
          // style={{
          //   padding: " 20px 40px 20px 40px",
          //   display: "flex",
          //   backgroundColor: "#EFEFEF",
          // }}
        >
          <div className="col-sm-6 col-lg-3" style={{ fontSize: "13px" }}>
            <p>HỖ TRỢ KHÁCH HÀNG</p>

            <div style={{ marginTop: "10px" }}>Nhượng quyền thương hiệu</div>
            <div style={{ marginTop: "10px" }}>Hướng dẫn mua hàng</div>
            <div style={{ marginTop: "10px" }}>CHính sách đổi trả</div>
            <div style={{ marginTop: "10px" }}>Hình thức thanh toán</div>
            <div style={{ marginTop: "10px" }}>Chính sách giao hàng</div>
            <div style={{ marginTop: "10px" }}>Thông tin bảo mật</div>
            <div style={{ marginTop: "10px" }}>Liên hệ</div>
          </div>
          <div className="col-sm-6 col-lg-3" style={{ fontSize: "13px" }}>
            <p>HỖ THỐNG CỦA HÀNG</p>
            <div style={{ marginTop: "5px" }}>TGOSK shop</div>
            <div style={{ marginTop: "5px" }}>
              <b>Địa chỉ : 31 ngõ 105 Yên Hoà, Cầu Giấy, Hà Nội</b>
            </div>
            <div style={{ marginTop: "5px" }}>
              <b>Điện thoại: 0356949107</b>
            </div>
            <div style={{ marginTop: "5px" }}>
              <b>MST: </b>0866765101
            </div>
            <div style={{ marginTop: "5px" }}>
              <b>Người đại diện: Nongg</b>
            </div>
            <div style={{ marginTop: "5px" }}>Hệ thống cửa hàng</div>
            <div></div>
          </div>
          <div className="col-sm-6 col-lg-3" style={{ fontSize: "13px" }}>
            <p>VỀ CHÚNG TÔI</p>
            <div style={{ marginTop: "10px" }}>
              Với hơn 20 cửa hàng trải dài cả nước, Germe hy vọng sẽ mang đến sự
              phục vụ chu đáo cho tất cả các khách hàng. Hệ thống cửa hàng thời
              trang Germe luôn luôn lắng nghe những ý kiến đóng góp từ các khách
              hàng với mục tiêu đẩy mạnh dịch vụ, mở rộng hệ thống và làm hài
              lòng những vị khách đến trên toàn quốc
            </div>
          </div>
          <div className="col-sm-6 col-lg-3" style={{ fontSize: "13px" }}>
            <p>FANPAGE CHÚNG TÔI</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
