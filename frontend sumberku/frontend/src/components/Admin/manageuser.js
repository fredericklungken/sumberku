import React from "react";
import Request from "../../utils/Request";
import { async } from "q";

class ManageUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      phone: "",
      gender: "",
      username: "",
      date: "",
      id: "",
      password: "",
      type: "insert",
      users: []
    };
  }
  loadUser = async () => {
    let loadUsers = await Request.make("GET", "users");
    this.setState({
      users: loadUsers.data,
      type: "insert"
    });
  };
  componentWillMount = () => {
    this.loadUser();
  };
  resetAllField() {
    this.setState({
      username: "",
      name: "",
      email: "",
      phone: "",
      password: "",
      date: ""
    });
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
  }
  insert = async e => {
    e.preventDefault();

    let data = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      gender: this.state.gender,
      date: this.state.date
    };
    if (this.state.type == "insert") {
      data.password = this.state.username + this.state.gender[0];

      let store = await Request.make("POST", "user/register", data);
    } else if (this.state.type == "update") {
      let store = await Request.make("PUT", `users/${this.state.id}`, data);
    }

    this.loadUser();
    this.resetAllField();
  };
  update = (id, username, name, email, phone, gender, date) => {
    this.setState({
      username: username,
      name: name,
      email: email,
      phone: phone,
      gender: gender,
      id: id,
      date: date,
      type: "update"
    });
    console.log("data id : " + id);
    if (gender == "Laki-laki") {
      document.getElementById("male").checked = true;
    } else {
      document.getElementById("female").checked = true;
    }
  };
  delete = async id => {
    let deleteId = await Request.make("DELETE", `users/${id}`);
    this.loadUser();
    this.resetAllField();
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.insert}>
          <table className="input-field-admin">
            <tr>
              <td>Username</td>
              <td>
                <input
                  required
                  onChange={e => this.setState({ username: e.target.value })}
                  value={this.state.username}
                />
              </td>
            </tr>
            <tr>
              <td>Nama Lengkap</td>
              <td>
                <input
                  required
                  onChange={e => this.setState({ name: e.target.value })}
                  value={this.state.name}
                />
              </td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>
                <input
                  type="email"
                  required
                  onChange={e => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
              </td>
            </tr>
            <tr>
              <td>Nomor Telepon</td>
              <td>
                <input
                  type="tel"
                  required
                  onChange={e => this.setState({ phone: e.target.value })}
                  value={this.state.phone}
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  onChange={e => this.setState({ gender: "Laki-laki" })}
                />{" "}
                Laki-laki
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  onChange={e => this.setState({ gender: "Perempuan" })}
                />{" "}
                Perempuan
              </td>
            </tr>
            <tr>
              <td>Tanggal Lahir</td>
              <td>
                <input
                  type="date"
                  onChange={e => this.setState({ date: e.target.value })}
                  value={this.state.date}
                />
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
              <th>Username</th>
              <th>Nama Lengkap</th>
              <th>E-mail</th>
              <th>Nomor Telepon</th>
              <th>Gender</th>
              <th>Tanggal Lahir</th>
              <th colspan="2">Action</th>
            </tr>
            {this.state.users.map(data => (
              <tr>
                <td>{data.username}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.gender}</td>
                <td>{data.date}</td>
                <td>
                  <button
                    onClick={e => {
                      this.update(
                        data.id,
                        data.username,
                        data.name,
                        data.email,
                        data.phone,
                        data.gender,
                        data.date
                      );
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

export default ManageUser;
