import { Link } from 'react-router-dom';
import './verify.css';

const Verify = () => {
    return ( 
        <div className="verified">
            <div className="verify" style={{}}>
                <h1 style={{textAlign: 'center', fontSize: '4em',color:'white',paddingTop: '300px'}}>You Have Been Registered</h1>
                <h2 style={{textAlign: 'center',color:'white'}}>welcome to the best expirence of your life</h2>
                <Link to="/Home"><button style={{textAlign: 'center',color:"white",cursor:'pointer',justifyItems: 'center',width: '100px',height:'40px',borderRadius: '5px',outline:'none',marginTop:'0.5px',marginLeft:'690px'}}>Start</button></Link>
            </div>
        </div>
     );
}
 
export default Verify;