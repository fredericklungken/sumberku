import React from "react";
import { Link } from "react-router-dom";
import ax from "axios";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }
  login = e => {
    e.preventDefault();

    let data = {
      user: this.state.user,
      password: this.state.password
    };

    ax.post("http://localhost:8000/api/user/login", data)
      .then(result => {
        localStorage.setItem("token", result.data.token);
        if (localStorage.getItem("token") != "false") {
          localStorage.setItem("username", result.data.username);
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("name", result.data.name);
          localStorage.setItem("email", result.data.email);
          localStorage.setItem("id", result.data.id);
        }

        if (result.data.token != false) {
          window.location.href = "../";
          console.log(
            "success" +
              localStorage.getItem("token") +
              " " +
              localStorage.getItem("username")
          );
        } else {
          console.log("No token found!");
          this.setState({
            error:
              "Username atau password yang kamu masukkan salah. Silakan coba lagi."
          });
        }
      })
      .catch(error => {
        console.log(error.response);
        this.setState({
          error:
            "Username atau password yang kamu masukkan salah. Silakan coba lagi."
        });
      });
  };

  render() {
    return (
      <div className="register-page">
        <div className="logo-register-page">
          <img src="/assets/sumberku-logo.png" width="100%" height="100%" />
        </div>
        <div>
          <b>Silakan masuk ke dalam akun kamu</b>
        </div>
        <div className="label-login-position">
          {" "}
          Belum punya akun?{" "}
          <Link className="color-logo" to="/daftar">
            Daftar di sini{" "}
          </Link>
        </div>

        <div className="error-position">
          <label>{this.state.error}</label>
        </div>
        <form>
          <div className="register-field">
            <input
              required
              className="input-register"
              placeholder="Email / Username / Handphone"
              onChange={e => this.setState({ user: e.target.value })}
              value={this.state.user}
            />
          </div>

          <div className="register-field">
            <input
              required
              className="input-register"
              type="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
          </div>
          <div className="btn-register-position">
            <button className="btn-register" onClick={this.login}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
