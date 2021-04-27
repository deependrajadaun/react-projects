import React from "react";
import { Link } from "react-router-dom";
import { ListGroup,ListGroupItem } from "reactstrap";
const menus = () => {
    return (
        <ListGroup>
           
           <Link className="list-group-item list-group-item-action" tag="a" to="/"  action >
               <h2>Home</h2>
         </Link>
               <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action  >
               <h2>Addcourse</h2>
         </Link>
         <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action >
               <h2>ViewCourse</h2>
         </Link>
         <Link className="list-group-item list-group-item-action" tag="a" to="#!"  action>
               <h2>About</h2>
         </Link>
         <Link  className="list-group-item list-group-item-action" tag="a" to="#!" action >
               <h2>Contact</h2>
         </Link>
         </ListGroup>
    );
}
export default menus;