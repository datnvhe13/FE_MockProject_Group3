import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import { actionUpdateCarAPI } from '../../../Redux/Reducer/CarSliceReducer';
import { closeUpdateForm } from "../../../Redux/Reducer/CreateUpdateFormReducer";
import { actionUpdateCarAPI } from "../../../Redux/Reducer/CarSliceReducer";

function InputUpdateForm(props) {
  let { car_Update } = props;
  console.log("car_Update props : ", car_Update);

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let _year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${_year}`;

  let dispatch = useDispatch();

  let handleUpdateButton = () => {
    let carUpdate = {};
    // dispatch(actionUpdateCarAPI(carUpdate));
    // dispatch(closeUpdateForm());
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
            readOnly
            // value={userName}
            // onChange={(event) => {
            //   setUserName(event.target.value);
            // }}
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
            readOnly
            // value={passWord}
            // onChange={(event) => {
            //   setPassWord(event.target.value);
            // }}
          />
        </FormGroup>

        {/* Confirm Password */}
        {/* <FormGroup>
          <Label for="exampleName">
            <b>Xác nhận mật khẩu</b>
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            type="password"
            // value={confirmPassWord}
            // onChange={(event) => {
            //   setConfirmPassWord(event.target.value);
            // }}
          />
        </FormGroup> */}

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
            // value={email}
            // onChange={(event) => {
            //   setEmail(event.target.value);
            // }}
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
            // value={firstName}
            // onChange={(event) => {
            //   setFirstName(event.target.value);
            // }}
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
            // value={lastName}
            // onChange={(event) => {
            //   setLastName(event.target.value);
            // }}
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
            // value={role}
            // onChange={(event) => {
            //   setRole(event.target.value);
            // }}
          >
            <option value="Admin">Admin</option>
            <option value="User">Customer</option>
          </Input>
        </FormGroup>

        {/* Button */}
        <Button
          color="primary"
          onClick={() => {
            handleUpdateButton();
          }}
        >
          Sửa
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

export default InputUpdateForm;
