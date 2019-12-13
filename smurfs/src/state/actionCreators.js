import axios from "axios";
import * as types from "./actionTypes";

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({
        type: types.GET_SMURFS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// export const addSmurf = smurf => dispatch => {
//   axios
//     .post("http://localhost:3333/smurfs", smurf)
//     .then(res => {
//       console.log(res);
//       dispatch({
//         type: types.ADD_SMURF,
//         payload: smurf
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

export const inputChange = ({ name, value }) => {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      name,
      value
    }
  };
};

export const submit = event => dispatch => {
  event.persist();
  event.preventDefault();
  let obj = {
    name: event.target.name.value,
    age: event.target.age.value,
    height: event.target.height.value
  };
  axios
    .post("http://localhost:3333/smurfs", obj)
    .then(res => {
      console.log(res);
      dispatch({
        type: types.SUBMIT
      });
    })
    .catch(err => {
      console.log(err);
    });
};
