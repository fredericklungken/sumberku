import React from "react";
import ManageCategory from "./managecategory";
import ManageUser from "./manageuser";
import ManagePromo from "./managepromo";
import ManageVoucher from "./managevoucher";
class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkstate: "category"
    };
  }

  settings = async linkstate => {
    if (linkstate == "category") {
      this.setState({
        linkstate: "category"
      });
    } else if (linkstate == "user") {
      this.setState({
        linkstate: "user"
      });
    } else if (linkstate == "promo") {
      this.setState({
        linkstate: "promo"
      });
    } else if (linkstate == "voucher") {
      this.setState({
        linkstate: "voucher"
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="admin-menu">
          <div
            className="admin-childmenu"
            onClick={e => this.settings("category")}
          >
            Manage Category
          </div>
          <div className="admin-childmenu" onClick={e => this.settings("user")}>
            Manage User
          </div>
          <div
            className="admin-childmenu"
            onClick={e => this.settings("promo")}
          >
            Manage Promo
          </div>
          <div
            className="admin-childmenu"
            onClick={e => this.settings("voucher")}
          >
            Manage Voucher
          </div>
        </div>
        <div className="admin-page">
          {this.state.linkstate ? (
            this.state.linkstate == "category" ? (
              <ManageCategory />
            ) : this.state.linkstate == "user" ? (
              <ManageUser />
            ) : this.state.linkstate == "voucher" ? (
              <ManageVoucher />
            ) : this.state.linkstate == "promo" ? (
              <ManagePromo />
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default AdminPage;
