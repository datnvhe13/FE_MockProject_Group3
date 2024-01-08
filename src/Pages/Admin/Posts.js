import React from "react";
import { useDispatch } from "react-redux";
import ModalCreateNewNews from "../../Components/News/AddNews/ModalCreateNewNews";
import { showCreateNewsForm } from "../../Redux/Reducer/News/CreateNewNewsFormReducer";
import ModalUpdateNews from "../../Components/News/UpdateNews/ModalUpdateNews";
import { showUpdateNewsForm } from "../../Redux/Reducer/News/CreateUpdateNewsFormReducer";

function Posts() {
  let dispatch = useDispatch();

  return (
    <>
      <div className="container">
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
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div
          class="row"
          style={{
            // border: "1px solid rgb(206, 201, 201)",
            padding: "12px 6px",
          }}
        >
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="panel panel-default">
              <div class="panel-body">
                <h3>
                  <b style={{ color: "green" }}>TIN TỨC</b>
                </h3>
                {/* <!-- button --> */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() => dispatch(showCreateNewsForm())}
                >
                  Thêm mới
                </button>
                {/* <!-- table display list product --> */}
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Tiêu đề</th>
                      <th>Mô tả</th>
                      <th>Image</th>
                      <th>Ngày đăng</th>
                      <th>Chỉnh sửa</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody id="tbProductTable">
                    <tr>
                      <td>1</td>
                      <td>
                        BMW 7-SERIES 2023 RA MẮT VỚI MÀN HÌNH SIÊU RỘNG 31 INCH
                        DÀNH CHO HÀNG GHẾ SAU
                      </td>
                      <td>
                        BMW đã chính thức ra mắt thế hệ thứ 7 hoàn toàn mới của
                        mẫu
                      </td>
                      <td>car3.jpg</td>
                      <td>12/02/2023</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => dispatch(showUpdateNewsForm())}
                        >
                          Sửa
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-danger">
                          Xóa
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        BMW X3 lắp ráp tại Việt Nam có gì cạnh tranh với
                        Mercedes GLC?
                      </td>
                      <td>
                        Chuyển sang lắp ráp trong nước, BMW X3 gây chú ý với giá
                        bán thấp
                      </td>
                      <td>car1.jpg</td>
                      <td>12/02/2023</td>
                      <td>
                        <button type="button" class="btn btn-primary">
                          Sửa
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-danger">
                          Xóa
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        Vượt Mercedes, BMW trở thành thương hiệu ô tô hạng sang
                        bán chạy nhất năm 2022
                      </td>
                      <td>
                        BMW đã chính thức ra mắt thế hệ thứ 7 hoàn toàn mới của
                        mẫu
                      </td>
                      <td>car2.jpg</td>
                      <td>12/02/2023</td>
                      <td>
                        <button type="button" class="btn btn-primary">
                          Sửa
                        </button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-danger">
                          Xóa
                        </button>
                      </td>
                    </tr>
                  </tbody>
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
      </div>

      <ModalCreateNewNews />
      <ModalUpdateNews />
    </>
  );
}

export default Posts;
