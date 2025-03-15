import React from 'react'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-${props.mode === "dark"? "light":"dark"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                            <input type="button" className="mx-2" value="green" onClick={props.toggleMode}/>
                            <input type="button" value="red" onClick={props.toggleMode}/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
