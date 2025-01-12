import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "../state/actionCreators";
import Form from './Form';

function App({ smurfs, getSmurfs }) {
  console.log(smurfs);
  // getSmurfs();
  useEffect(() => {
    getSmurfs();
  }, [])
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      {
        smurfs.map((smurf) => {
          return <h2>{smurf.name}</h2>
        })
      }
      <Form />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  };
}

export default connect(mapStateToProps, { getSmurfs })(App);
