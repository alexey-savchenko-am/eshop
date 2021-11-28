import React from 'react';
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import './header.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen, faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import ImageSlider from "../image-slider/image-slider.component";

const Header = ({currentUser, hidden}) => (
  <div className="header">

      <Link to="/" className="logo-container">
        <Logo className="logo"/>
      </Link>

      <div className="options">
          <nav>
              {
                  currentUser
                      ? <div className="option profile-option" >

                          <FontAwesomeIcon  className="option-icon" title="profile" size="1x" icon={faUser} /> profile

                          <div className="dropdown-wrapper">
                              <ul className="dropdown">
                                  <li><a href="https://yogasid.com/profile/#profile">Settings</a></li>
                                  <li><a href="https://yogasid.com/profile/#subscription">Subscription</a></li>
                                  <li><a href="https://yogasid.com/profile/#questions">Questions</a></li>
                                  <li className="last-child" onClick={() => auth.signOut()}>
                                      Sign Out <FontAwesomeIcon  className="option-icon" title="profile" size="sm" icon={faSignOutAlt} />
                                  </li>
                              </ul>
                          </div>
                      </div>
                      : <Link to="/signin" className="option">
                          Sign In <FontAwesomeIcon  className="option-icon" title="profile" size="sm" icon={faSignInAlt} />
                      </Link>
              }

              <Link to="/shop" className="option">
                  SHOP
              </Link>
              <Link to="/contact" className="option">
                  CONTACT
              </Link>
              <div className="option">
                  <CartIcon/>
              </div>
          </nav>
      </div>
      {
          hidden ? null :
          <CartDropdown/>
      }

  </div>
);

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);