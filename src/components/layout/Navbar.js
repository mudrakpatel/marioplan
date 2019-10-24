import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return(
        <div className="navbar-fixed">
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">MarioPlan</Link>
                    <SignedInLinks/>
                    <SignedOutLinks/>
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{

    }
}

export default connect(
    mapStateToProps,
)(Navbar);