import React from "react";
import { useDispatch } from "react-redux";
import ModalCreateNewNews from "../../Components/News/AddNews/ModalCreateNewNews";
import ModalUpdateNews from "../../Components/News/UpdateNews/ModalUpdateNews";
import { showUpdateNewsForm } from "../../Redux/Reducer/News/CreateUpdateNewsFormReducer";
import ModalCreateNewAccount from "../../Components/Account/CreateAccount/ModalCreateNewAccount";
import { showCreateAccountForm } from "../../Redux/Reducer/Account/CreateNewAccountFormReducer";
import ModalUpdateAccount from "./../../Components/Account/UpdateAccount/ModalUpdateAccount";
import { showUpdateAccountForm } from "../../Redux/Reducer/Account/CreateUpdateAccountFormReducer";

function Accounts() {
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
                  <b style={{ color: "green" }}>Tài khoản</b>
                </h3>
                {/* <!-- button --> */}
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() => dispatch(showCreateAccountForm())}
                >
                  Thêm mới
                </button>
                {/* <!-- table display list product --> */}
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Tên đăng nhập</th>
                      <th>Tên</th>
                      <th>Quyền</th>
                      <th>Ngày tạo</th>
                      <th>Chỉnh sửa</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody id="tbProductTable">
                    <tr>
                      <td>1</td>
                      <td>datnvhe130026</td>
                      <td>Nguyen Van Dat</td>
                      <td>Admin</td>
                      <td>12/02/2023</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => dispatch(showUpdateAccountForm())}
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
                      <td>Luunvhe130026</td>
                      <td>Nguyen Van Luu</td>
                      <td>User</td>
                      <td>12/02/2023</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary"
                          //onClick={() => dispatch(showUpdateNewsForm())}
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
                      <td>Luunvhe130026</td>
                      <td>Nguyen Van Luu</td>
                      <td>User</td>
                      <td>12/02/2023</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary"
                          //onClick={() => dispatch(showUpdateNewsForm())}
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

      <ModalCreateNewAccount />
      <ModalUpdateAccount />
    </>
  );
}

export default Accounts;
