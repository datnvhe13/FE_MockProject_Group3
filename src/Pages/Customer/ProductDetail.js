import React, { useEffect, useState } from "react";
import "../../carDetail.css";
import { useParams } from "react-router-dom";
// import { getListCarAPI } from "../API/CarAPI";
import { getListCarAPI } from "../../API/CarAPI";

function ProductDetail() {
  // Get the userId param from the URL.
  let { ID } = useParams();
  // ...
  console.log("ID : ", ID);
  // declare state
  const [carDetail, setCarDetail] = useState({});

  // call API to get list cars
  let fetchListCar = () => {
    // call getListAPI function
    getListCarAPI().then((response) => {
      const detail = response.find((car) => car.id === ID);
      setCarDetail(detail);
    });
  };

  let imagePathState = `../../Asset/${carDetail.image}`;

  // hook
  useEffect(() => {
    fetchListCar();
    console.log(carDetail);
  }, []);
  //

  return (
    <>
      {/* // <!-- Header --> */}
      <div className="carDetailContainer">
        <div class="row">
          <div
            style={{ textAlign: "center", marginTop: "8px" }}
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
          >
            <h1>BMW THẠCH THẤT SHOWROOM</h1>
            <p style={{ color: "gray", fontSize: "22px" }}>
              Liên hệ Mr.Dat : 098542125
            </p>
          </div>
        </div>

        <div class="row">
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
            style={{ marginTop: "28px", marginBottom: "8px", fontSize: "24px" }}
          >
            <b>
              {carDetail.name} {carDetail.yearOfManu} - GIÁ BÁN:{" "}
              {carDetail.price} VNĐ
            </b>
          </div>
        </div>

        <div class="row" style={{ fontSize: "18px" }}>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <p>
              <i class="bx bx-calendar" style={{ paddingRight: "8px" }}></i>Năm
              SX: <b>{carDetail.yearOfManu}</b>
            </p>
            <p>
              <i class="bx bx-gas-pump" style={{ paddingRight: "8px" }}></i>
              Nhiên liệu: <b>Xăng</b>
            </p>
            <p>
              <i class="bx bx-chair" style={{ paddingRight: "8px" }}></i>Số chỗ
              ngồi: <b>07</b>
            </p>
            <p>
              <i class="bx bx-info-circle" style={{ paddingRight: "8px" }}></i>
              Xuất xứ: <b>Nhập khẩu nguyên chiếc tại Đức</b>
            </p>
          </div>

          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <p>
              <i class="bx bx-info-circle" style={{ paddingRight: "8px" }}></i>
              Kiểu dáng: <b>{carDetail.category}</b>
            </p>
            <p>
              <i class="bx bx-info-circle" style={{ paddingRight: "8px" }}></i>
              Hộp số: <b>Tự động</b>
            </p>
            <p>
              <i class="bx bx-info-circle" style={{ paddingRight: "8px" }}></i>
              Trạng thái: <b>Mới 100%</b>
            </p>
            <p>
              <i class="bx bx-calendar" style={{ paddingRight: "8px" }}></i>Đăng
              ngày: <b>06.04.2023</b>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <img
              style={{ width: "100%", height: "800px" }}
              src={imagePathState}
              class="img-responsive"
              alt="Image"
            />
          </div>
        </div>

        <div class="row" style={{ margin: "5px 5px" }}>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img
              style={{ width: "100%", height: "100%" }}
              src={imagePathState}
              class="img-responsive"
              alt="Image"
            />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img
              style={{ width: "100%", height: "100%" }}
              src={imagePathState}
              class="img-responsive"
              alt="Image"
            />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img
              style={{ width: "100%", height: "100%" }}
              src={imagePathState}
              class="img-responsive"
              alt="Image"
            />
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img
              style={{ width: "100%", height: "100%" }}
              src={imagePathState}
              class="img-responsive"
              alt="Image"
            />
          </div>
        </div>
      </div>

      {/* // <!-- Page content --> */}
      <div
        class="w3-content"
        // style="max-width:1100px"
        style={{ maxWidth: "1100px" }}
      >
        {/* <!-- About Section --> */}
        <div class="w3-row w3-padding-64" id="about">
          <div class="w3-col m6 w3-padding-large w3-hide-small">
            <img
              src={imagePathState}
              class="w3-round w3-image w3-opacity-min"
              alt="Table Setting"
              width="600"
              height="750"
            />
          </div>

          <div class="w3-col m6 w3-padding-large">
            <h1 class="w3-center">{carDetail.name}</h1>
            <br />
            <h5 class="w3-center">
              {carDetail.name} THE NEW {carDetail.yearOfManu}
            </h5>
            <p class="w3-large">{carDetail.information}</p>
            <p class="w3-large w3-text-grey w3-hide-medium">
              Ở phiên bản mới, BMW tham vọng biến {carDetail.name} thành “ông
              vua” trong nhóm SUV hạng sang, khi kết hợp giữa sự sang trọng và
              công nghệ. Hãng xe Đức cũng tuyên bố hùng hồn rằng những thứ có
              trên X7 sẽ không thể tìm thấy trên một chiếc Mercedes-Benz hay
              Audi.
            </p>
          </div>
        </div>

        <hr />

        {/* <!-- Menu Section --> */}
        <div class="w3-row w3-padding-64" id="menu">
          <div class="w3-col l6 w3-padding-large">
            <h1 class="w3-center">Động cơ và công suất</h1>
            <br />
            <h4>Hệ dẫn động AWD</h4>
            <p class="w3-text-grey">
              Động cơ I6 3.0L tăng áp kép, công suất 380 mã lực và mô-men xoắn
              520 Nm. Mức hiệu suất này tăng 40 mã lực và 70,5 Nm so với phiên
              bản tiền nâng cấp.
            </p>
            <br />

            <h4>Hệ thống hybrid 48V</h4>
            <p class="w3-text-grey">
              Được đặt trong vỏ hộp số 8 cấp của ZF, nó hoạt động như một bộ nạp
              mô-men xoắn. Khi gạt cần số sang trái trong một giây, hệ thống này
              sẽ được kích hoạt. Nhờ đó chiếc xe có thể dễ dàng chạm mốc 100
              km/h từ vị trí đứng im chỉ trong 5,8 giây.
            </p>
            <br />

            <h4>Hệ thống Active Comfort Drive</h4>
            <p class="w3-text-grey">
              {" "}
              Hệ thống này sử dụng dữ liệu từ camera để quét trên mặt đường và
              tự động điều chỉnh hệ thống treo khí nén 2 trục thích ứng sao cho
              phù hợp và êm ái nhất.
            </p>
            <br />

            <h4>Hệ thống lưới tản nhiệt</h4>
            <p class="w3-text-grey">
              Với lưới tản nhiệt ngoại cỡ có chức năng phát sáng (Iconic Glow),
              cụm đèn pha tách rời với đèn định vị tạo cảm giác “cau có” cho
              phần đầu xe.
            </p>
            <br />

            <h4>Hệ thống đèn</h4>
            <p class="w3-text-grey">
              Trong khi cụm đèn hậu mới được thiết kế với hiệu ứng 3D. Nẹp
              chrome được ốp kính trong suốt chạy dọc theo chiều ngang thân xe,
              mang đến cảm giác rộng rãi và ấn tượng hơn.
            </p>
          </div>

          <div class="w3-col l6 w3-padding-large">
            <img
              src="../../Asset/Brighter and more powerful than the street lamps….jfif"
              class="w3-round w3-image w3-opacity-min"
              alt="Menu"
              // style="width:100%"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <hr />

        {/* <!-- Contact Section --> */}
        <div
          class="w3-container w3-padding-64"
          id="contact"
          // style="font-weight: bold;"
          style={{ fontWeight: "bold" }}
        >
          <h1>Liên hệ</h1>
          <br />
          <p>
            Liên hệ ngay Hotline: 092.246.7899 để đặt hàng và trở thành một
            trong những người đầu tiên sở hữu BMW THE X7 LCI 2023 tại Việt Nam.
          </p>
          <p class="w3-text-blue-grey w3-large">
            <b>
              BMW Thạch Thất - Đ/c : Thái Bình, Bình Yên, Thạch Thất, Hà Nội
            </b>
          </p>
          <p>
            Bạn cũng có thể liên hệ với chúng tôi qua số điện thoại 097936524
            hoặc email thachthatshowrom@bmw.com hoặc bạn có thể gửi tin nhắn cho
            chúng tôi tại đây:
          </p>
          <form action="/action_page.php" target="_blank">
            <p>
              <input
                class="w3-input w3-padding-16"
                type="text"
                placeholder="Nhập tên của bạn"
                required
                name="Name"
              />
            </p>
            <p>
              <input
                class="w3-input w3-padding-16"
                type="number"
                placeholder="Nhập số điện thoại của bạn"
                required
                name="People"
              />
            </p>

            <p>
              <label for="">Ngày hẹn :</label>
              <input
                class="w3-input w3-padding-16"
                type="datetime-local"
                placeholder="Date and time"
                required
                name="date"
                value="2020-11-16T20:00"
              />
            </p>

            <p>
              <input
                class="w3-input w3-padding-16"
                type="text"
                placeholder="Nội dung"
                required
                name="Message"
              />
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-section" type="submit">
                SEND MESSAGE
              </button>
            </p>
          </form>
        </div>

        {/* <!-- End page content --> */}
        <footer class="w3-center w3-light-grey w3-padding-32">
          <p>
            Powered by{" "}
            <a
              href="https://www.facebook.com/datnvhe130026"
              title="W3.CSS"
              target="_blank"
              class="w3-hover-text-green"
            >
              datnv21
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default ProductDetail;
