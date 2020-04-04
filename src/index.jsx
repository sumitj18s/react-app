import React from "react";
import ReactDOM from "react-dom";
import Layout from "./features/Layout";
import "./features/style.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Layout />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
