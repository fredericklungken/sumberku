import React from "react";
import Request from "../../utils/Request";
import { async } from "q";

class HeaderPromo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      type: "insert",
      promos: []
    };
  }
  loadPromo = async () => {
    let loadPromos = await Request.make("GET", "promos");

    this.setState({
      type: "insert",
      promos: loadPromos.data
    });
  };
  componentWillMount = () => {
    this.loadPromo();
  };
  resetAllField = () => {
    document.getElementById("name").value = "";
    document.getElementById("image").value = "";
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
  };
  insert = async e => {
    e.preventDefault();

    let form = new FormData();

    form.append("name", e.target.name.value);
    if (e.target.image.files.length != 0) {
      form.append("image", e.target.image.files[0]);
    }
    form.append("start", e.target.start.value);
    form.append("end", e.target.end.value);

    if (this.state.type == "insert") {
      let store = await Request.makeForm("POST", "promos", form);
    } else {
      let store = await Request.makeForm(
        "POST",
        `promos/${this.state.id}`,
        form
      );
      console.log(form.data);
    }

    this.loadPromo();
    this.resetAllField();
  };
  update = (id, name, start, end) => {
    document.getElementById("name").value = name;
    document.getElementById("start").value = start;
    document.getElementById("end").value = end;
    document.getElementById("image").value = "";

    this.setState({
      id: id,
      type: "update"
    });
    console.log("Type " + this.state.type);
  };
  delete = async id => {
    let deleteId = await Request.make("DELETE", `promos/${id}`);
    this.loadPromo();
    this.resetAllField();
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.insert}>
          <table className="input-field-admin">
            <tr>
              <td>Promo</td>
              <td>
                <input required id="name" />
              </td>
            </tr>
            <tr>
              <td>Gambar</td>
              <td>
                <input type="file" required id="image" />
              </td>
            </tr>
            <tr>
              <td>Mulai</td>
              <td>
                <input type="date" required id="start" />
              </td>
            </tr>
            <tr>
              <td>Akhir</td>
              <td>
                <input type="date" required id="end" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value={this.state.type} />
              </td>
            </tr>
          </table>
        </form>
        <div className="data-field-admin">
          <table className="table">
            <tr>
              <th>Promo</th>
              <th>Tanggal Berlaku Dari</th>
              <th>Berlaku</th>
              <th>Gambar</th>
              <th colspan="2">Action</th>
            </tr>
            {this.state.promos.map(data => (
              <tr>
                <td>{data.name}</td>
                <td>{data.start}</td>
                <td>{data.end}</td>
                <td>
                  <img src={data.image} alt="Tes" width="70px" height="70px" />
                </td>
                <td>
                  <button
                    onClick={e => {
                      this.update(data.id, data.name, data.start, data.end);
                    }}
                  >
                    Update
                  </button>
                  <button
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

export default HeaderPromo;
