import React from "react";
import { Link } from "react-router-dom";
import ax from "axios";
import Header from "../Shared/header";
import Footer from "../Shared/footer";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="content">
          <div className="content-image">
            <img src="/assets/depan.jpg" width="100%" height="100%" />
          </div>
          <div className="headerndetail-content">
            <div className="header-content">TOP KATEGORI KAYU</div>
            <div className="header-content-detail flex">
              <div className="content-detail">Jati</div>
              <div className="content-detail">Mahoni</div>
              <div className="content-detail">Berlian</div>
              <div className="content-detail">Gaharu</div>
              <div className="content-detail">Secang</div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default DashboardPage;
