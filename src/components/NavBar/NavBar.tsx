import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { User, UserContext } from "../Context/UserContext";

function NavBar(props: any) {
    const user = useContext(UserContext);

    const logout = () => {
        props.setUser(undefined);
        return <Link className="nav-link" to="/">Logout</Link>;
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/users/profile">
                                My Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            {
                                user?.token ? 
                                    logout() :
                                    <Link className="nav-link" to="/login">Login</Link>
                            }

                            
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;