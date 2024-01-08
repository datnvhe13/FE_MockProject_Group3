import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionFetchListCarsAPI_MDW } from "../Redux/Reducer/CarSliceReducer";

function ListCar(props) {
  let listCar = useSelector((state) => state.carReducer.listCar);
  //let listCar = selectListCar(stateRedux);

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
        {/* paging */}
        <nav
          style={{ marginLeft: "860px" }}
          aria-label="Page navigation example"
        >
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default ListCar;
