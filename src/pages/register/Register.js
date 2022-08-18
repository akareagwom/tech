import './register.css'
import React from 'react';
import { Link } from 'react-router-dom';




const Home = () => {
    return ( 
        <div>
            <div className="register" >     
            
            <div  style={{boxShadow: '0px 0px 2px 0.5px grey',borderRadius:'10px', width: '500px', height: '400px', marginLeft:'450px', marginTop: '200px'}}>
                <form className="form-horizontal" style={{display: 'flex', flexDirection: 'column', width:'400px', justifyContent: 'space-around', marginLeft: '30px'}}>
                    <input type="text" className="form-control" placeholder="Your Name" />
                    <input type="text" className="form-control" placeholder="Your Email" />
                    <input type="text" className="form-control" placeholder="Your Password" />
                    <Link to="/Verify"><button className="" style={{width: '100px',height:'30px',borderRadius: '5px',outline:'none',marginTop:'30px',marginLeft:'150px'}}>SIGN UP</button></Link>
                    <p style={{textAlign: 'center'}}>already have an account? <Link to="/Login">login</Link></p>
                </form>
            </div>
            <div className='header'><h2>Register:</h2></div>
            </div>
        </div>
     );
}
 
export default Home;