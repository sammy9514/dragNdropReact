import axios from "axios";

const URL: string = "http://localhost:2323/api/v1";

export const getKids = async () => {
  try {
    return await axios.get(`${URL}/viewData`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const sortedKids = async () => {
  try {
    return await axios.get(`${URL}/viewSortedData`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
