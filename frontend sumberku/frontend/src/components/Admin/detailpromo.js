import React from "react";
import Request from "../../utils/Request";
import { async } from "q";

class DetailPromo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "insert",
      id: "",
      product: "",
      name: "",
      productpromos: []
    };
  }

  loadPromo = async () => {
    let loadPromos = await Request.make("GET", "promodetails");

    this.setState({
      type: "insert",
      promos: this.loadPromos.data
    });
  };

  componentWillMount = () => {
    this.loadPromo();
    this.loadProduct();
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.insert}>
          <table className="input-field-admin">
            <tr>
              <td>Promo</td>
              <td>
                <select id="promoid">
                  {this.state.promos.map(data => (
                    <option value={data.id}>{data.name}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td>
                <select id="categoryid">
                  <option />
                </select>
              </td>
              <td>
                <input type="radio" id="all" />
                All Product in Category
              </td>
            </tr>
            <tr>
              <td>Product</td>
              <td>
                <select>
                  <option id="productid" />
                </select>
              </td>
            </tr>
            <tr>
              <td />
              <td />
            </tr>
          </table>
        </form>
        <div className="data-field-admin">
          <table className="table">
            <tr>
              <td>Promo</td>
              <td>
                <select />
              </td>
            </tr>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailPromo;
