import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const NavBar = () => {
return (
    <nav className="navbar fixed-top">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
        Chaque heure pour la minorie

        </a>
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
                <Link to="/categoria/Seiko" className="nav-link">Cartier</Link>
                    
                
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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/></svg>
</div>
    </nav>
    );
};

export default NavBar;
