import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import { actionUpdateCarAPI } from '../../../Redux/Reducer/CarSliceReducer';
import { closeUpdateForm } from "../../../Redux/Reducer/CreateUpdateFormReducer";
import { actionUpdateCarAPI } from "../../../Redux/Reducer/CarSliceReducer";

function InputUpdateForm(props) {
  // let { car_Update } = props;
  // console.log("car_Update props : ", car_Update);

  // let [fullName, setFullName] = useState(car_Update.name);
  // let [price, setPrice] = useState(car_Update.price);
  // let [description, setDescription] = useState(car_Update.information);
  // let [descripDetail, setDescripDetail] = useState(car_Update.detail);
  // let [imagePath, setImagePath] = useState("");
  // let [year, setYear] = useState(car_Update.year);
  // let [carType, setCarType] = useState(car_Update.category);

  // declare States to save data in Input TextField
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [imagePath, setImagePath] = useState("");
  // let [date, setDate] = useState(Date.now());
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;

  // function to get image link
  function getImageName(imageLink) {
    // transfer path to array
    var itemArray = imageLink.split("\\");
    // get last element
    var imageName = itemArray[itemArray.length - 1];
    return imageName;
  }

  let dispatch = useDispatch();

  let handleUpdateButton = () => {
    // let carUpdate = {
    //   id: car_Update.id,
    //   name: fullName,
    //   price: price,
    //   information: description,
    //   detail: descripDetail,
    //   image: getImageName(imagePath),
    //   year: year,
    //   category: carType,
    // };

    let News_update = {
      title: title,
      description: description,
      imagePath: getImageName(imagePath),
      date: currentDate,
    };
    console.log("News_update : ", News_update);
    // dispatch(actionUpdateCarAPI(carUpdate));
    // dispatch(closeUpdateForm());
  };

  return (
    <>
      <Form>
        {/* CarName */}
        <FormGroup>
          <Label for="exampleName">
            <b>Title</b>
          </Label>
          <Input
            id="Title"
            name="Title"
            placeholder="Nhập tiêu đề tin"
            type="text"
            // value={title}
            // onChange={(event) => {
            //   setTitle(event.target.value);
            // }}
          />
        </FormGroup>

        {/* Description */}
        <FormGroup>
          <Label for="exampleDescription">
            <b>Mô tả</b>
          </Label>{" "}
          <br />
          <textarea
            style={{ width: "100%", height: "80px" }}
            id="Description"
            name="Description"
            placeholder="Nhập thông tin mô tả"
            type="textArea"
            // value={description}
            // onChange={(event) => {
            //   setDescription(event.target.value);
            // }}
          />
        </FormGroup>

        {/* Choose file */}
        <FormGroup>
          <Label for="exampleSelect">
            <b>Chọn ảnh</b>
          </Label>
          <Input
            id="ImageSelect"
            name="Image"
            type="file"
            value={imagePath}
            onChange={(event) => {
              setImagePath(event.target.value);
            }}
          ></Input>
        </FormGroup>

        {/* Date */}
        {/* <FormGroup>
          <Label for="examplePrice">
            <b>Ngày lái thử</b>
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            // value={date}
            // onChange={(event) => {
            //   setDate(event.target.value);
            // }}
          />
        </FormGroup> */}

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
