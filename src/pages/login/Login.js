import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    return ( 
        <div className="login">
            <div className="login-container"  style={{boxShadow: '0px 0px 2px 0.5px grey',borderRadius:'10px', width: '500px', height: '400px', marginLeft:'450px', marginTop: '200px'}}>
                <form className="login-form" style={{display: 'flex', flexDirection: 'column', width:'400px', justifyContent: 'space-around', marginLeft: '30px'}}>
                    <input type="text"className='form-login' placeholder  = "Enter your username" />
                    <input type="text"className='form-login' placeholder  = "Enter your password" />
                    <button style={{width: '100px',height:'30px',borderRadius: '5px',outline:'none',marginTop:'30px',marginLeft:'150px'}}>Login</button>
                    <p style={{textAlign: 'center', marginTop:'20px'}}>Don't have an account? <Link to="/Register">Register</Link></p>
                </form>
            </div>
            <div className='head'><h2>Login:</h2></div>
        </div>
     );
}
 
export default Login;