import React from "react";
import { Link } from "react-router-dom";
import ax from "axios";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      phone: "",
      gender: "",
      username: "",
      password: "",
      repass: "",
      date: ""
    };
  }
  register = async e => {
    e.preventDefault();

    if (this.state.repass != this.state.password) {
      alert(
        "Password dan konfirmasi password anda tidak cocok, silahkan dicek"
      );
    }
    // else if(this.state.phone.code > 31 && (this.state.phone < 48 || this.state.phone > 57)){
    //     alert('Nomor telepon hanya bisa diisi dengan angka 0 sampai 9');
    // }
    else {
      let data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        gender: this.state.gender,
        username: this.state.username,
        password: this.state.password,
        date: this.state.date
      };
      ax.post("http://localhost:8000/api/user/register", data)
        .then(result => {
          var fetchdata = result.data;
          console.log("data : " + fetchdata);
          localStorage.setItem("userToken", fetchdata);

          this.setState({
            name: "",
            email: "",
            phone: "",
            username: "",
            gender: "",
            date: "",
            password: "",
            repass: ""
          });
        })
        .catch(error => {
          alert(error.response);
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.register}>
          <div className="register-page">
            <div className="logo-register-page">
              <img src="/assets/sumberku-logo.png" width="100%" height="100%" />
            </div>

            <div className="register-field">
              <input
                className="input-register"
                placeholder="Nama Lengkap"
                required
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
              />
            </div>
            <div className="register-field">
              <input
                className="input-register"
                type="email"
                placeholder="E-mail"
                required
                onChange={e => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
            </div>
            <div className="register-field">
              <input
                className="input-register"
                placeholder="Handphone"
                type="tel"
                required
                onChange={e => this.setState({ phone: e.target.value })}
                value={this.state.phone}
              />
            </div>
            <div className="register-field">
              <input
                className="regis-male"
                type="radio"
                name="gender"
                onChange={e => this.setState({ gender: "Laki-laki" })}
              />{" "}
              Laki-laki
              <input
                className="regis-female"
                type="radio"
                name="gender"
                onChange={e => this.setState({ gender: "Perempuan" })}
              />{" "}
              Perempuan
            </div>
            <div className="register-field">
              <input
                className="input-register"
                placeholder="Username"
                required
                onChange={e => this.setState({ username: e.target.value })}
                value={this.state.username}
              />
            </div>
            <div className="register-field">
              <input
                className="input-register"
                type="date"
                placeholder="Tanggal Lahir"
                required
                onChange={e => this.setState({ date: e.target.value })}
                value={this.state.date}
              />
            </div>
            <div className="register-field">
              <input
                className="input-register"
                type="password"
                placeholder="Password"
                required
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
            </div>
            <div className="register-field">
              <input
                className="input-register"
                type="password"
                placeholder="Konfirmasi Password"
                required
                onChange={e => this.setState({ repass: e.target.value })}
                value={this.state.repass}
              />
            </div>
            <div className="btn-register-position">
              <input className="btn-register" type="submit" value="Daftar" />
            </div>

            <div className="btn-register-position">
              Sudah punya akun ?
              <label>
                <Link className="color-logo" to="masuk">
                  Silakan login
                </Link>
              </label>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterPage;
