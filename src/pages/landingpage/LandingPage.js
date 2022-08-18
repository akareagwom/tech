import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import './landingpage.css'




const LandingPage = () => {
    return ( 
        <div className="LandingPage">
            <div className="navbar">
                <NavBar/>
            </div>
            <div className="content">
                <h1>Technology</h1>
                <p>You deserve a nice outlook of the tech world</p>
                <Link to='/Register'><button className="btn">Get Started</button> </Link>         
            </div>
            
        </div>
     );
}
 
export default LandingPage;