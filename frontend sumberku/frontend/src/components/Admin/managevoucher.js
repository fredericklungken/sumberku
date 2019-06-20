import React from "react";
import Request from "../../utils/Request";
import { async } from "q";

class ManageVoucher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      type: "insert",
      vouchers: []
    };
  }

  loadVoucher = async () => {
    let loadVouchers = await Request.make("GET", "vouchers");

    this.setState({
      type: "insert",
      vouchers: loadVouchers.data
    });
  };
  componentWillMount = () => {
    this.loadVoucher();
  };

  resetAllField = () => {
    document.getElementById("name").value = "";
    document.getElementById("code").value = "";
    document.getElementById("discount").value = "";
    document.getElementById("start").value = "";
    document.getElementById("end").value = "";
    document.getElementById("image").value = "";
  };

  insert = async e => {
    e.preventDefault();

    let form = new FormData();

    form.append("name", e.target.name.value);
    if (e.target.image.files.length != 0) {
      form.append("image", e.target.image.files[0]);
    }
    form.append("code", e.target.code.value);
    form.append("discount", e.target.discount.value);
    form.append("start", e.target.start.value);
    form.append("end", e.target.end.value);

    if (this.state.type == "insert") {
      let store = await Request.makeForm("POST", "vouchers", form);
    } else {
      let store = await Request.makeForm(
        "POST",
        `vouchers/${this.state.id}`,
        form
      );
    }

    this.loadVoucher();
    this.resetAllField();
  };

  update = (id, name, code, discount, start, end) => {
    document.getElementById("name").value = name;
    document.getElementById("code").value = code;
    document.getElementById("discount").value = discount;
    document.getElementById("start").value = start;
    document.getElementById("end").value = end;
    document.getElementById("image").value = "";

    this.setState({
      id: id,
      type: "update"
    });
  };

  delete = async id => {
    let deleteId = await Request.make("DELETE", `vouchers/${id}`);
    this.loadVoucher();
    this.resetAllField();
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.insert}>
          <table className="input-field-admin">
            <tr>
              <td>Voucher</td>
              <td>
                <input required id="name" />
              </td>
            </tr>
            <tr>
              <td>Kode</td>
              <td>
                <input required id="code" />
              </td>
            </tr>
            <tr>
              <td>Diskon</td>
              <td>
                <input required id="discount" />
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
              <th>Voucher</th>
              <th>Kode</th>
              <th>Diskon</th>
              <th>Gambar</th>
              <th>Tanggal Berlaku dari</th>
              <th>Berakhir</th>
              <th>Gambar</th>
              <th colspan="2">Action</th>
            </tr>
            {this.state.vouchers.map(data => (
              <tr>
                <td>{data.name}</td>
                <td>{data.code}</td>
                <td>{data.discount}</td>
                <td>
                  <img src={data.image} width="150px" height="70px" />
                </td>
                <td>{data.start}</td>
                <td>{data.end}</td>
                <td>
                  <button
                    onClick={e => {
                      this.update(
                        data.id,
                        data.name,
                        data.code,
                        data.discount,
                        data.start,
                        data.end
                      );
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
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

export default ManageVoucher;
