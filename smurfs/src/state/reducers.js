import * as types from "./actionTypes";

const initialSmurfs = [];
export function smurfsReducer(smurfs = initialSmurfs, action) {
  switch (action.type) {
    case types.GET_SMURFS:
      return action.payload;
    case types.ADD_SMURF:
      return [...smurfs, action.payload];
    default:
      return smurfs;
  }
}

const initialForm = { fname: "", age: "", height: "" };
export function formReducer(form = initialForm, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...form,
        [action.payload.name]: action.payload.value
      };
    case types.SUBMIT:
      return initialForm;
    default:
      return form;
  }
}
