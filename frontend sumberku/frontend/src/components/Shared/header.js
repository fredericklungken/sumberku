import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment className="flex">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src="/assets/sumberku-logo.png" width="100%" height="100%" />
            </Link>
          </div>
          <div>
            <input
              className="search"
              placeholder="apa yang sedang anda cari ?"
              size="40"
            />
          </div>
          <button className="btn-search">
            <i className="fas fa-search" />
          </button>

          {localStorage.getItem("token") != null &&
          localStorage.getItem("token") != false ? (
            <div className="header-user flex">
              <div>
                <img
                  className="avatar"
                  src="/assets/sumberku-logo.png"
                  alt="avatar"
                  width="100%"
                  height="100%"
                />

                <i className="fas fa-caret-down" />
              </div>
              <div>
                <i className="fas fa-comment-dots" />
              </div>
            </div>
          ) : (
            <div className="header-right flex">
              <div className="option">
                <i className="fa fa-bars black " />
                Pilih
                <div className="wrapper">
                  <div className="ul">
                    <React.Fragment>
                      <div className="option-list">
                        <Link
                          className="option-list-value"
                          to="/choose/category"
                        >
                          Kategori Kayu
                        </Link>
                      </div>
                      <div className="option-list">
                        <Link className="option-list-value" to="/choose/farmer">
                          Petani
                        </Link>
                      </div>
                      <div className="option-list">
                        <Link
                          className="option-list-value"
                          to="/choose/craftsmen"
                        >
                          Pengrajin
                        </Link>
                      </div>
                    </React.Fragment>
                  </div>
                </div>
              </div>
              <div className="btn-login">
                <Link to="/masuk" className="border-white">
                  Login
                </Link>
              </div>
              <div className="btn-regis">
                <Link to="/daftar">Register</Link>
              </div>
            </div>
          )}
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default Header;
