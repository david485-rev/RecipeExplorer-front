import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, UserContext } from "../Context/UserContext";

function NavBar(props: any) {
    const user = useContext(UserContext);

    function logout() {
        // console.log(`before:`)
        // console.log(user);
        props.setUser(undefined); // sets user token to undefined
        // these below console.logs don't show the updated user token
        // console.log('after:');
        // console.log(user);
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
                        {
                            user?.token ? (
                        <>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={`profile/${user.uuid}`}>My Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-recipe">Create Recipe</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={logout}>Logout</Link></li>
                        </> ):
                        <li>
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        }
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