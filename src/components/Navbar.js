import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () =>{
    return (
        <nav className="nav-wrapper red darken-3"> 
            <div className="container">
                <span className="brand-logo left">Poke'Times</span>
                <ul className="right">
                    <li> <Link to="/">Home</Link></li>
                    <li> <NavLink to="/about">About</NavLink></li>
                    <li> <NavLink to="/contact">Contact</NavLink></li>
                    <li> <NavLink to="/add">Add New</NavLink></li>
                </ul>
            </div>  
        </nav>
    )
}

export default withRouter(Navbar)