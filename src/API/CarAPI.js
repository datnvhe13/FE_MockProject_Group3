import { api } from "./api"


let getListCarAPI = () => {
    return api("GET", "BmwCars", null);
};

export {getListCarAPI};

