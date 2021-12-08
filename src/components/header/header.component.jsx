import React from 'react';
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart-selectors";
import {selectCurrentUser} from "../../redux/user/user-selectors";
import {withRouter} from 'react-router-dom';

import './header.styles.scss';


const Header = ({currentUser, hidden, history}) => {
    const path = history.location.pathname;
    return (
        <div className="header">

            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>

            <div className="options">
                <nav>
                    {
                        currentUser
                            ? <div className="option profile-option" >

                               {/* <FontAwesomeIcon  className="option-icon" title="profile" size="0x" icon={faUser} /> profile*/}
                                <span className="option-icon">profile</span>
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
                            : <Link to="/signin" className={`option ${path === "/signin" ? "active" : ""}`}>
                                Sign In <FontAwesomeIcon  className="option-icon" title="profile" size="sm" icon={faSignInAlt} />
                            </Link>
                    }

                    <Link to="/shop" className={`option ${path === "/shop" ? "active" : ""}`}>
                        SHOP
                    </Link>
                    <Link to="/contact" className={`option ${path === "/contact" ? "active" : ""}`}>
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
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default withRouter(connect(mapStateToProps)(Header));