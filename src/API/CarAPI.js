import { api } from "./api";

// get list car API
// export let getListCarAPI = () => {
//     return api("GET", "BmwCars", null);
// }

export let getListCarAPI = (params) => {
  //return api("GET", "BmwCars", null);
  return api("GET", "cars", null, params);
};

// get list car API
// export let getListCarCategoryAPI = () => {
//   return api("GET", "BmwCarcategory", null);
// };

// delete
export const deleteCarAPI = (Id_delete) => {
  let url = "cars/" + Id_delete;
  return api("DELETE", url);
};

// create new car API
export let addNewCarAPI = (car_New) => {
  return api("POST", "cars/create", car_New);
};

// update car API
export const updateCarAPI = (car) => {
  let url = "cars/" + car.id;
  return api("PUT", url, car);
};
