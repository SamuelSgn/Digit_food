import React, { useState } from 'react';
import Logo from '../assets/1.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import Register from '../Register';

const status = false;

function Navbar() {

    const [openlinks, setOpenlinks] = useState(false);

    const toggleNavbar = () => {
        setOpenlinks(!openlinks);
    };

    return (
        <div className="navbar">
            <div className="leftSide" id={openlinks ? "open" : "close"}>
                <img src={Logo}/>
                <div className="hiddenlinks">
                <Link to="/">Home</Link>
                <Link to="/about"> About</Link>
                <Link to="/contact"> Contact</Link>
                <Link to="/Login">Login</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/about"> About</Link>
                <Link to="/contact"> Contact</Link>
                <Link to="/Login">Login</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon/>
                </button>
            </div>
        </div>
    )
}

export default Navbar;