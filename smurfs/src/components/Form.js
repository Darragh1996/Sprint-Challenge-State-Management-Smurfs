import React from "react";
import { connect } from "react-redux";
import { inputChange, submit } from "../state/actionCreators";

export function Form({ form, inputChange, submit }) {
  return (
    <form onSubmit={event => submit(event)}>
      <label>
        Name:
        <input
          name="name"
          value={form.name}
          onChange={event => inputChange(event.target)}
        />
      </label>
      <label>
        Age:
        <input
          name="age"
          value={form.age}
          onChange={event => inputChange(event.target)}
        />
      </label>
      <label>
        Height:
        <input
          name="height"
          value={form.height}
          onChange={event => inputChange(event.target)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

function mapStateToProps(state) {
  return {
    form: state.form
  };
}

export default connect(mapStateToProps, { inputChange, submit })(Form);
