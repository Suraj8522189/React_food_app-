import { useState } from 'react'
import '../styles/login.css';
import Header from './layouts/Header';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

  const navigate = useNavigate();

  const [mail,setmail] = useState('');
  const [password,setpassword] = useState('');

  const handleApi= ()=>{
    if(!mail || !password){
      alert('All fields are required')
      return;
    }

    const url = 'http://localhost:8080/login'
    const data = {mail, password}

    axios.post(url, data)
    .then((res)=>{
      if(res.data.message === "login success"){
      alert("Login Success");
      navigate('/');
    }
    else {
      console.log(res.data.message)
    }
    }).catch((err)=>{
       console.log(err)
    })
  
  }

  return (<>
    <div className='header'>
  <Header/>
    </div>
    
  <div className="login-container">
  <h3>LOGIN</h3>

  <label>E-mail</label>
  <input type="text"
  value={mail}
  onChange={(e)=>setmail(e.target.value)}
  />

  <label>Password</label>
  <input type="password"
  value={password}
  onChange={(e)=>setpassword(e.target.value)}
  />

  <button onClick={handleApi} >LOGIN</button>
<p>
    Create New Account? {" "} 
     <Link to="/signup">Signup</Link> 
   </p>
    
  </div>
   
  </>)
}

export default Login