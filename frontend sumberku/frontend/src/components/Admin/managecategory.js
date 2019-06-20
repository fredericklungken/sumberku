import React from "react";
import Request from "../../utils/Request";
import { tsThisType } from "@babel/types";

class ManageCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "insert",
      categories: [],
      id: "",
      name: ""
    };
  }
  loadCategory = async () => {
    let loadCategories = await Request.make("GET", "categories");
    this.setState({
      categories: loadCategories.data,
      type: "insert"
    });
    // console.log("Type : " + this.state.type )
    // console.log("Catgproes" + this.state.categories);
  };
  componentWillMount = () => {
    this.loadCategory();
  };
  resetAllField = () => {
    this.setState({
      name: ""
    });
  };
  insert = async e => {
    e.preventDefault();

    var name = this.state.name;

    if (this.state.type === "insert") {
      var data = {
        name: name
      };
      let store = await Request.make("POST", "categories", data);
    } else {
      var data = {
        name: name
      };
      let store = await Request.make(
        "PUT",
        `categories/${this.state.id}`,
        data
      );
    }
    this.loadCategory();
    this.resetAllField();
  };
  update = (id, name) => {
    this.setState({
      name: name
    });
    this.setState({
      id: id,
      type: "update"
    });
  };
  delete = async id => {
    let deleteId = await Request.make("DELETE", `categories/${id}`);
    this.loadCategory();
    this.resetAllField();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.insert}>
          <table className="input-field-admin">
            <tr>
              <td>Category Product </td>
              <td>
                <input
                  required
                  onChange={e => this.setState({ name: e.target.value })}
                  value={this.state.name}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" id="btn-submit" value={this.state.type} />
              </td>
            </tr>
          </table>
        </form>
        <div className="data-field-admin">
          <table className="table">
            <tr>
              <th>Category</th>
              <th colspan="2">Action</th>
            </tr>
            {this.state.categories.map(data => (
              <tr>
                <td>{data.name}</td>
                <td>
                  <button
                    onClick={e => {
                      this.update(data.id, data.name);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn-delete"
                    onClick={e => {
                      this.delete(data.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default ManageCategory;
