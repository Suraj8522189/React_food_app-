import { useState } from 'react'
import Header from './layouts/Header'
import '../styles/login.css';
import { Link } from 'react-router-dom';
import axios from "axios"

export default function Signup() {

  const [name , setname ] = useState('');
  const [mail , setmail ] = useState('');
  const [mobile , setmobile ] = useState('');
  const [password , setpassword ] = useState('');

  const handleApi=()=>{

    if (!name || !mail || !mobile || !password) {
      alert("Please fill in both fields");
      return;
      }

      const url = 'http://localhost:8080/signup'
      const data = {name, mail, mobile, password }
      axios.post(url,data)
        .then((res)=>{
          if(res.data.message){
            alert("success")
          }
        }).catch((err)=>{
          alert(err)
        })
      
  }

  return (<>
 
    <div className='header'>
    <Header />
    </div>

    <div className="login-container">
  <h3>Signup</h3>

  <label>UserName</label>
  <input type="text"
  value={name}
  onChange={(e)=>{setname(e.target.value)}}
  />

  <label>E-mail</label>
  <input type="text" 
  value={mail}
  onChange={(e)=>{setmail(e.target.value)}}
  />

  <label>Mobile</label>
  <input type="text" 
  value={mobile}
  onChange={(e)=>{setmobile(e.target.value)}}
  />

  <label>Password</label>
  <input type="password"
  value={password}
  onChange={(e)=>{setpassword(e.target.value)}}
  />

  <button onClick={handleApi}>Signup</button>
   <p>
    Already have an account?{" "}
    <Link to="/login">Login</Link>
    </p>
</div>

  </>)
}
