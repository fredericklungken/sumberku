import React from "react";
import { Link } from "react-router-dom";
import ax from "axios";
import Header from "../Shared/header";
import Footer from "../Shared/footer";

class SearchActor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <Footer />
      </React.Fragment>
    );
  }
}

export default SearchActor;
