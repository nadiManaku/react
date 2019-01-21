import React from 'react';

const NavBar = ({counterTotal}) => {

        return (<nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar
            <span className="badge badge-success ml-2">{counterTotal}</span>
            </a>
        </nav>);
    }

export default NavBar;