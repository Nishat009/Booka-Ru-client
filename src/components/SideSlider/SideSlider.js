import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import './SideSlider.css';

const Side = props => {


    return (
        <>

            <Nav className="col-md-3 d-md-block bg-dark sidebar"
            >
                <div className="sidebar-sticky"></div>
             <Nav.Item className="p-3  m-4  ">
                    <Link to="/manageBook" className="text-white  text-decoration-none ">Manage Book</Link>
                </Nav.Item>
                <Nav.Item className="p-3  m-4  ">
                    <Link to="/addBook"  className="text-white  text-decoration-none ">Add Book</Link>
                </Nav.Item>
            </Nav>
           
          
 
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar