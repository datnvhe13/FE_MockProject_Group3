import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { closeUpdateCustomerForm } from "../../../Redux/Reducer/CustomerReceiveAlertPrice/CreateUpdateCustomerFormReducer";
import { actionUpdateCustomerAPI } from "../../../Redux/Reducer/CustomerReceiveAlertPrice/CustomerSliceReducer";

function InputForm(props) {
  let { customerUpdate } = props;
  let dispatch = useDispatch();

  // const listCarCategory = useSelector(
  //   (state) => state.carCategorySlice.listCarCategory
  // );

  // let items = "";
  // items = listCarCategory.map((carCategory, index) => {
  //   return <option value={carCategory.name}>{carCategory.name}</option>;
  // });

  // declare States to save data in Input TextField
  let [fullName, setFullName] = useState(customerUpdate.FullName);
  let [phoneNumber, setPhoneNumber] = useState(customerUpdate.PhoneNumber);
  let [carType, setCarType] = useState("BMW X3");
  let [paymentMethod, setPaymentMethod] = useState(
    customerUpdate.PaymentMethod
  );
  //
  let handleCreateButton = () => {
    let customer_Update = {
      FullName: fullName,
      PhoneNumber: phoneNumber,
      CarType: carType,
      PaymentMethod: paymentMethod,
      id: customerUpdate.id,
    };

    console.log("customer_Update : ", customer_Update);
    dispatch(actionUpdateCustomerAPI(customer_Update));
    alert("Chỉnh sửa thành công !");
    dispatch(closeUpdateCustomerForm());
  };

  return (
    <>
      <Form>
        {/* CarName */}
        <FormGroup>
          <Label for="exampleName">
            <b>Họ và tên (*)</b>
          </Label>
          <Input
            id="Name"
            name="Name"
            type="text"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Phone */}
        <FormGroup>
          <Label for="exampleName">
            <b>Số điện thoại</b>
          </Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </FormGroup>

        {/* CarType */}
        <FormGroup>
          <Label for="exampleSelect">
            <b>Chọn loại xe</b>
          </Label>
          <Input
            id="CarTypeSelect"
            name="CarType"
            type="select"
            value={carType}
            onChange={(event) => {
              setCarType(event.target.value);
            }}
          >
            <option value="BMW X3">BMW X3</option>
            <option value="BMW X4">BMW X4</option>
            <option value="BMW X5">BMW X5</option>
            <option value="BMW 730li">BMW 730li</option>
            <option value="BMW Z4 All New">BMW Z4 All New</option>
            <option value="BMW 430i Convertible">BMW 430i Convertible</option>
            <option value="BMW 5-Series">BMW 5-Series</option>
            <option value="BMW 520i Msport 2022">BMW 520i Msport 2022</option>
            <option value="BMW 530i Sport-line">BMW 530i Sport-line</option>
          </Input>
        </FormGroup>
        {/* Date */}
        <FormGroup>
          <Label for="examplePrice">
            <b>Hình thức</b>
          </Label>{" "}
          <br />
          <Input
            name="gender"
            type="radio"
            value="Trả thẳng"
            onChange={(event) => {
              setPaymentMethod(event.target.value);
            }}
          />{" "}
          Trả thẳng
          <Input
            name="gender"
            type="radio"
            value="Trả góp"
            onChange={(event) => {
              setPaymentMethod(event.target.value);
            }}
            style={{ marginLeft: "20px" }}
          />{" "}
          Trả góp
        </FormGroup>

        {/* Button */}
        <Button
          color="primary"
          onClick={() => {
            handleCreateButton();
          }}
        >
          Chỉnh sửa
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
