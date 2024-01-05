import React, { useEffect, useState } from "react";

import { getListCarAPI } from "../../API/CarAPI";
import { useSelector, useDispatch } from "react-redux";
import { selectListCar } from "../../Redux/Selector/CarSelector";
import { actionFetchListCarsAPI_MDW } from "../../Redux/Reducer/CarSliceReducer";

function PriceTable() {
  //
  let stateRedux = useSelector((state) => state);
  let listCar = selectListCar(stateRedux);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchListCarsAPI_MDW());
  }, []);

  let items = "";
  items = listCar.map((car, index) => {
    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{car.name}</td>
        <td>{car.price} VNĐ</td>
        <td>{car.yearOfManu}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="priceTableContainer">
        {/* header */}
        <div class="row rowHeader">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <b style={{ color: "red" }}>
              Bảng giá xe BMW tại Showroom BMW Thạch Thất
            </b>
            <p style={{ color: "gray" }}>ƯU ĐÃI CỰC HẤP DẪN</p>
          </div>
        </div>
        {/* price table */}

        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {/* table */}
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Stt</th>
                  <th scope="col">Phiên bản</th>
                  <th scope="col">Giá bán</th>
                  <th scope="col">Năm sản xuất</th>
                </tr>
              </thead>
              <tbody>{items}</tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default PriceTable;
