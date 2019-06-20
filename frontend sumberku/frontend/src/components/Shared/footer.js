import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="hr-red" />
          <div className="flex">
            <div className="logo footer-logo">
              <Link to="/">
                <img
                  src="/assets/sumberku-logo.png"
                  width="100%"
                  height="100%"
                />
              </Link>
            </div>
            <div className="footer-text">Penghubung Pengrajin dan Petani</div>
            <div className="footer-1-2">
              <ul className="flex">
                <div className="ft-1-2-text">Temukan kami di :</div>
                <li>
                  <i class="fab fa-facebook fb-icon">
                    <Link to="https://www.facebook.com/bukalapak" />
                  </i>
                </li>
                <li>
                  <i class="fab fa-twitter twitter-icon">
                    <Link to="https://twitter.com/bukalapak" />
                  </i>
                </li>
                <li>
                  <i class="fab fa-youtube yt-icon">
                    <Link to="https://www.youtube.com/user/bukalapak" />
                  </i>
                </li>
                <li>
                  <i class="fab fa-instagram ig-icon" />
                  <Link to="https://www.instagram.com/sumberkucom/" />
                </li>
                <li>
                  <i class="fab fa-google-plus gplus-icon">
                    <Link to="https://plus.google.com/+bukalapakdotcom" />
                  </i>
                </li>
                <li>
                  <i class="fab fa-linkedin linked-icon">
                    <Link to="https://www.linkedin.com/company/pt-bukalapak-com" />
                  </i>
                </li>
              </ul>
              {/* <FontAwesomeIcon icon="check-square" /> */}
            </div>
          </div>

          <div className="footer-2 hr-red flex">
            <div className="about-us top">
              <div className="title-footer">ABOUT US</div>
              <div className="detail-footer">Jakarta Barat</div>
              <div className="detail-footer">sumberku@sumberku.com</div>
            </div>
            <div className="information top">
              <div className="title-footer">INFORMATION</div>
              <div className="detail-footer">
                <Link className="footerlink">About Us</Link>
              </div>
              <div className="detail-footer">
                <Link className="footerlink">Contact Us</Link>
              </div>
              <div className="detail-footer">
                <Link className="footerlink">Privacy Policy</Link>
              </div>
              <div className="detail-footer">
                <Link className="footerlink">Orders and Returns</Link>
              </div>
              <div className="detail-footer">
                <Link className="footerlink">Terms & Conditions</Link>
              </div>
            </div>
            <div className="service top">
              <div className="title-footer">SERVICE</div>
              <div className="detail-footer">
                <Link className="footerlink">My Account</Link>
              </div>
              <div className="detail-footer">
                <Link className="footerlink">View Cart</Link>
              </div>
              <div className="detail-footer">
                <Link className="footerlink">Wishlist</Link>
              </div>
              <div className="detail-footer">
                <Link className="footerlink">Track My Order</Link>
              </div>
              <div className="detail-footer">
                <Link className="footerlink">Help</Link>
              </div>
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
