import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectListCar } from "../Redux/Selector/CarSelector";
import { actionFetchListCarsAPI_MDW } from "../Redux/Reducer/CarSliceReducer";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function ListCar(props) {
  let stateRedux = useSelector((state) => state);
  let listCar = selectListCar(stateRedux);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchListCarsAPI_MDW());
  }, []);

  //
  let items = "";
  items = listCar.map((car) => {
    let imagePath = `Asset/${car.image}`;
    let carDetailPath = `/homePage/carDetail/${car.id}`;
    return (
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 carItem hasHover">
        {/* <!-- image --> */}
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to={carDetailPath}>
              <img
                src={imagePath}
                style={{ width: "240px", height: "243px" }}
                alt=""
              />
            </Link>
          </div>
        </div>
        {/* <!-- name --> */}
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p
              // style="text-align: center; margin-top: 8px;"
              style={{ textAlign: "center", marginTop: "8px" }}
            >
              {car.name}
            </p>
          </div>
        </div>
        {/* <!-- price --> */}
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p
              // style="font-weight: bold; text-align: center;"
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              {car.price} VND
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div class="row listCars" id="listCarsHome">
        {/* <!-- list product  --> */}
        {items}
      </div>
    </>
  );
}

export default ListCar;
