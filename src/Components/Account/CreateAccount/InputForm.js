import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionAddCarAPI } from "../../../Redux/Reducer/CarSliceReducer";
import { closeCreateForm } from "../../../Redux/Reducer/CreateNewFormReducer";

function InputForm() {
  let dispatch = useDispatch();

  // declare States to save data in Input TextField
  let [userName, setUserName] = useState("");
  let [passWord, setPassWord] = useState("");
  let [confirmPassWord, setConfirmPassWord] = useState("");
  let [email, setEmail] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [role, setRole] = useState("Admin");

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;

  // add new function
  let handleCreateButton = () => {
    let account_new = {
      userName: userName,
      fullName: firstName + " " + lastName,
      passWord: passWord,
      confirmPassWord: confirmPassWord,
      role: role,
      currentDate: currentDate,
    };
    // dispatch(actionAddCarAPI(car_new));
    alert("Add successfully !");
    // dispatch(closeCreateForm());
  };

  return (
    <>
      <Form>
        {/* UserName */}
        <FormGroup>
          <Label for="exampleName">
            <b>Tên đăng nhập</b>
          </Label>
          <Input
            id="userName"
            name="userName"
            placeholder="Nhập tên đăng nhập"
            type="text"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Password */}
        <FormGroup>
          <Label for="exampleName">
            <b>Mật khẩu</b>
          </Label>
          <Input
            id="password"
            name="password"
            placeholder="Nhập mật khẩu"
            type="password"
            value={passWord}
            onChange={(event) => {
              setPassWord(event.target.value);
            }}
          />
        </FormGroup>

        {/* Confirm Password */}
        <FormGroup>
          <Label for="exampleName">
            <b>Xác nhận mật khẩu</b>
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            type="password"
            value={confirmPassWord}
            onChange={(event) => {
              setConfirmPassWord(event.target.value);
            }}
          />
        </FormGroup>

        {/* Email address */}
        <FormGroup>
          <Label for="exampleName">
            <b>Địa chỉ email</b>
          </Label>
          <Input
            id="emailAddress"
            name="emailAddress"
            placeholder="Nhập địa chỉ email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>

        {/*First name */}
        <FormGroup>
          <Label for="exampleName">
            <b>Tên họ</b>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Nhập tên họ"
            type="text"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </FormGroup>

        {/*LastName name */}
        <FormGroup>
          <Label for="exampleName">
            <b>Tên </b>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Nhập tên "
            type="text"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Role */}
        <FormGroup>
          <Label for="exampleYear">
            <b>Phân quyền</b>
          </Label>
          <Input
            id="role"
            name="role"
            type="select"
            value={role}
            onChange={(event) => {
              setRole(event.target.value);
            }}
          >
            <option value="Admin">Admin</option>
            <option value="User">Customer</option>
          </Input>
        </FormGroup>

        {/* Button */}
        <Button
          color="primary"
          onClick={() => {
            handleCreateButton();
          }}
        >
          Thêm mới
        </Button>
        <Button
          color="danger"
          // onClick={handleResetButton}
        >
          Reset
        </Button>
      </Form>
    </>
  );
}

export default InputForm;
