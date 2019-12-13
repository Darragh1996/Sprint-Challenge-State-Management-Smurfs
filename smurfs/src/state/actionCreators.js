import axios from "axios";
import * as types from "./actionTypes";

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({
          type: types.GET_SMURFS,
          payload: res
      })
    })
    .catch(err => {
      console.log(err);
    });
};
