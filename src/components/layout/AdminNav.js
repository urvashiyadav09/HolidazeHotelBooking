import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Logout from "../admin/AdminLogout";


function AdminNav() {
    const { user } = useContext(AuthContext);
    
    return (
              

           
                           
        <Navbar collapseOnSelect className="navbar" sticky="top" expand="lg">

        <NavLink to="/" exact>
            <Navbar.Brand className="navbar__logo">Holidaze</Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" data-toggle="collapse" />
        <Navbar.Collapse className="navbar-collapse">

                <Nav className="justify-content-end ml-auto" >
                   
 
                    {user ? (
                        <>
                        <Nav.Link eventKey="1" as = {Link} to="/" exact className="navbar__nav-link">Home</Nav.Link>
                        
                        <Nav.Link eventKey="2" as = {Link} to="/adminadd" className="navbar__nav-link">AdminDashboard</Nav.Link>
                        <Logout />
                        
                        </>
                    ) : (
                        <>
                        <Nav.Link eventKey="1" as = {Link} to="/"  exact className="navbar__nav-link">Home</Nav.Link>
                        <Nav.Link eventKey="2" as = {Link} to="/hotels" className="navbar__nav-link">Hotels</Nav.Link>
                        
                        <Nav.Link eventKey="3" as = {Link} to="/services" className="navbar__nav-link" >Services</Nav.Link>
                        <Nav.Link eventKey="4" as = {Link} to="/contact" className="navbar__nav-link" >Contact</Nav.Link>
                        <Nav.Link eventKey="5" as = {Link} to="/admin" className="navbar__nav-link"> Admin</Nav.Link>
                        
                        </>
                    )}

                </Nav>
            </Navbar.Collapse>

        </Navbar> 
            
      
    );
}

export default AdminNav;