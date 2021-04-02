import React, { useContext } from 'react';
import { Navbar} from 'react-bootstrap';
//import './Header.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "firebase/auth";
import firebase from "firebase/app";
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
        }
    return (
        <div className='header'>
           <Navbar bg="light" expand="lg">
            <Navbar.Brand className="title" href="/home"><h2>Booka-Ru</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end ">
              
                <Link className="text-dark nav-link" to="/home">Home</Link>  
                <Link  className="text-dark nav-link" to="/admin">Admin</Link>
                <Link to="/login" className="nav-link text-dark"onClick={handleSignOut}>{loggedInUser.email?'Logout':'Login'}</Link>
                <Link to="#" className="nav-link active text-dark">{loggedInUser.displayName||loggedInUser.email}</Link>
               
            </Navbar.Collapse>
            
            </Navbar>
        </div>
        
    );
    }


export default Header;