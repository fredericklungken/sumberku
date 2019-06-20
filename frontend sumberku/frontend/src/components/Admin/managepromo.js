import React from "react";
import HeaderPromo from "./headerpromo";
import DetailPromo from "./detailpromo";

class ManagePromo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerid: "",
      detailid: "",
      linkstate: "header",
      detailtype: "insert",
      headertype: "insert",
      headerdata: [],
      detaildata: [],
      productdata: []
    };
  }
  settings = async linkstate => {
    if (linkstate == "header") {
      this.setState({
        linkstate: "header"
      });
    } else if (linkstate == "detail") {
      this.setState({
        linkstate: "detail"
      });
    }
    console.log("T" + this.state.linkstate);
  };
  render() {
    return (
      <React.Fragment>
        <div className="flex input-field-admin center">
          <div
            className="btn-managepromo"
            onClick={e => this.settings("header")}
          >
            Settings Promo
          </div>
          <div
            className="btn-managepromo"
            onClick={e => this.settings("detail")}
          >
            Settings Product Promo
          </div>
        </div>
        {this.state.linkstate == "header" ? <HeaderPromo /> : <DetailPromo />}
      </React.Fragment>
    );
  }
}

export default ManagePromo;
