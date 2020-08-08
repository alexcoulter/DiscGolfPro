import React from "react";
import { NavLink } from 'react-router-dom';
import '../App.css';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark">
        <h4 className="navbar-brand my-name">Disc Golf Pro</h4>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"} className="link" exact activeClassName="active"><p className="nav-link pt-0 pb-0" id="homeLink" data-toggle="collapse" data-target=".navbar-collapse.show">Home</p></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/start/"} className="link" activeClassName="active"><p className="nav-link pt-0 pb-0" id="startLink" data-toggle="collapse" data-target=".navbar-collapse.show">Play a round</p></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/saved/"} className="link" activeClassName="active"><p className="nav-link pt-0 pb-0" id="savedLink" data-toggle="collapse" data-target=".navbar-collapse.show">View a saved round</p></NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;