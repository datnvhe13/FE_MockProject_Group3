import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchListCarsAPI_MDW } from "../../Redux/Reducer/CarSliceReducer";
//import { selectListCar } from "../../Redux/Selector/CarSelector";
// import {
//   actionDeleteCarAPI,
//   actionGetListCarAPI,
// } from "../Redux/Reducer/CarSliceReducer";
import { showCreateForm } from "../../Redux/Reducer/CreateNewFormReducer";
import ModalCreateNewCar from "../../Components/Car/CreateCar/ModalCreateNewCar";
// import { CreateNewFormReducer } from "./../Redux/Reducer/CreateNewFormReducer";
import {
  // showCreateUpdateForm,
  showUpdateForm,
} from "../../Redux/Reducer/CreateUpdateFormReducer";
// import { actionGetListCarCategoryAPI } from "../Redux/Reducer/CarCategorySliceReducer";
import ModalUpdateCar from "./../../Components/Car/UpdateCar/ModalUpdateCar";
import { actionDeleteCarAPI } from "./../../Redux/Reducer/CarSliceReducer";

function ProductAdminPage() {
  // dispath action
  let dispathRedux = useDispatch();

  //
  useEffect(() => {
    // dispathRedux(actionGetListCarAPI());
    // dispathRedux(actionGetListCarCategoryAPI());
    dispathRedux(actionFetchListCarsAPI_MDW());
  }, []);
  //
  // const listCar = useSelector((state) => state.carSlice.listCar);
  let listCar = useSelector((state) => state.carReducer.listCar);
  //let listCar = selectListCar(stateRedux);

  //
  let onHandleDeleteCar = (id_Delete) => {
    dispathRedux(actionDeleteCarAPI(id_Delete));
    // alert
    alert("Delete successfully !");
    // dispathRedux(closeForm())
    console.log("Id_Delete: ", id_Delete);
  };

  //
  let onHandleUpdateButton = (car_Update) => {
    dispathRedux(showUpdateForm(car_Update));
  };

  let items = "";
  items = listCar.map((car, index) => {
    let imagePath = `../Asset/${car.image}`;

    return (
      <tr>
        <td>{index}</td>
        <td>{car.name}</td>
        <td>{car.price}</td>
        {/* <td>{car.information}</td> */}
        {/* <td>{car.detail}</td> */}
        <td>
          <img
            src={imagePath}
            style={{ width: "60px", height: "60px" }}
            alt=""
          />
        </td>
        <td>{car.year}</td>
        <td>{car.category}</td>
        <td>
          <button
            //
            onClick={() => onHandleUpdateButton(car)}
            type="button"
            class="btn btn-primary"
          >
            Sửa
          </button>
        </td>
        <td>
          <button
            onClick={() => onHandleDeleteCar(car.id)}
            type="button"
            class="btn btn-danger"
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      {/* Search */}
      <div class="row" style={{ marginBottom: "16px" }}>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {/* <h3><b style={{color: "green"}}>Xin chào ADMIN</b></h3> */}
        </div>
      </div>
      {/* Search */}
      <div
        class="row"
        style={{
          border: "1px solid rgb(206, 201, 201)",
          padding: "12px 6px",
          marginBottom: "16px",
        }}
      >
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="panel panel-default">
            <div class="panel-body" style={{ display: "flex" }}>
              {/* <!-- input to search --> */}
              <div
                class="col-xs-8 col-sm-8 col-md-8 col-lg-8"
                style={{ margin: "0 10px" }}
              >
                <input
                  type="text"
                  id="inputSearch"
                  class="form-control"
                  value=""
                />
              </div>
              {/* <!-- search button --> */}
              <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  onclick="handleToSearch()"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div class="row" style={{ padding: "12px 6px" }}>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>
                <b style={{ color: "green" }}>DANH SÁCH SẢN PHẨM</b>
              </h3>
              {/* <!-- button --> */}
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#myModal"
                onClick={() => {
                  dispathRedux(showCreateForm());
                }}
              >
                Thêm mới
              </button>
              {/* <!-- table display list product --> */}
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Stt</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    {/* <th>Information</th> */}
                    {/* <th>Detail</th> */}
                    <th>Ảnh</th>
                    <th>Năm sản xuất</th>
                    <th>Loại xe</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody id="tbProductTable">{items}</tbody>
              </table>

              {/* paging */}
              <nav
                style={{ float: "right" }}
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
          </div>
        </div>
      </div>
      <ModalCreateNewCar />
      <ModalUpdateCar />
    </div>
  );
}

export default ProductAdminPage;
