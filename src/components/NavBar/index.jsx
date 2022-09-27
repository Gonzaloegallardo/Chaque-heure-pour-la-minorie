import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
const NavBar = () => {
return (
    <nav className="navbar fixed-top">
    <div className="container-fluid">
        <Link to="/" className= "navbar-brand" >Chaque heure pour la minorie </Link>
        
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
        >
            <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Marcas
            </h5>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
            ></button>
            </div>
            <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                <Link to="/categoria/Casio" className="nav-link" aria-current="page">Casio</Link>
                </li>
                <li className="nav-item">
                <Link to="/categoria/Timex" className="nav-link" >Timex </Link> 
                    
                
                </li>
                <li className="nav-item">
                <Link to="/categoria/Seiko" className="nav-link">Seiko</Link>
                    
                
                </li>
                <li className="nav-item dropdown">
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ></input>
                <button className="btn btn-outline-success" type="submit">
                Search
                </button>
            </form>
    
            </div>
        </div>
        </div>
        <div style={{
            width: '30px',
            position:'relative',
            left:'112rem',
            bottom:"2rem"
        }
        }>
            <li><CartWidget/></li>

</div>
    </nav>
    );
};

export default NavBar;
