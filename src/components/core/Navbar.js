import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid'
import { startLogout } from 'Actions/auth';
import { startClearUser } from 'Actions/user';
import NotificationsContainer from 'Notification/NotificationsContainer';

const bodyOpenClassName = 'body_open';
const navSideMenuOpenClassName = 'nav_side_menu_open';
const navSideMenu = 'nav_side_menu';

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
    }

    handleOpenSideMenu = () => {
        document.body.classList.add(bodyOpenClassName);
        document.getElementById(navSideMenu).classList.add(navSideMenuOpenClassName);
        this.setState(() => ({
            isNavOpen: true
        }));
    }

    handleCloseSideMenu = () => {
        document.body.classList.remove(bodyOpenClassName);
        document.getElementById(navSideMenu).classList.remove(navSideMenuOpenClassName);
        this.setState(() => ({
            isNavOpen: false
        }));
    }

    handleLogout = () => {
        this.handleCloseSideMenu();
        this.props.startLogout()
        this.props.startClearUser();
    }

    render() {
        return (
            <div id="navbar">
                <div className="nav_toggles">
                    {this.props.isAuthenticated && <NotificationsContainer />}
                    {
                        !this.state.isNavOpen &&
                        <FontAwesomeIcon
                            icon={faBars}
                            size='2x'
                            className="navbar_favicon"
                            onClick={this.handleOpenSideMenu}
                        />
                    }
                    {
                        this.state.isNavOpen &&
                        <FontAwesomeIcon
                            icon={faTimes}
                            size='2x'
                            className="navbar_favicon"
                            onClick={this.handleCloseSideMenu}
                        />
                    }
                </div>
                {this.props.isAuthenticated &&
                    <div id={navSideMenu}>
                        <Link to="/dashboard" className="nav_side_menu_link" onClick={this.handleCloseSideMenu}>Dashboard</Link>
                        <Link to="/user_profile" className="nav_side_menu_link" onClick={this.handleCloseSideMenu}>User Profile</Link>
                        <Link to="/user_documents" className="nav_side_menu_link" onClick={this.handleCloseSideMenu}>User Documents</Link>
                        <Link to="/positions" className="nav_side_menu_link" onClick={this.handleCloseSideMenu}>Positions</Link>
                        <button className="button nav_side_menu_link" onClick={this.handleLogout}>Logout</button>
                    </div>
                }
                {!this.props.isAuthenticated &&
                    <div id={navSideMenu}>
                        <Link to="/" className="nav_side_menu_link" onClick={this.handleCloseSideMenu}>Positions</Link>
                        <Link className="nav_side_menu_link" to="/login" onClick={this.handleCloseSideMenu}>Login</Link>
                    </div>
                }
            </div>
        )
    }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
    startClearUser: () => dispatch(startClearUser()),
    startLogout: () => dispatch(startLogout()),
})

export default connect(undefined, mapDispatchToProps)(Navbar);

Navbar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    startClearUser: PropTypes.func.isRequired,
    startLogout: PropTypes.func.isRequired,
};
