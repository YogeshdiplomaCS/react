import React, { useState } from 'react';
import './App.css';
import ReCAPTCHA from 'react-google-recaptcha';


function App() {
  const [name, setName] = useState('');
  const [mno, setmno] = useState('');
  const [email, setemail] = useState('');
  const [rno, setrno] = useState('');
  const [address, setaddress] = useState('');
  const [error, seterror] = useState('');
  const [submitted,setsubmitted] = useState('');
  

  const shoot=(dt)=>{
	
	if (/^[a-zA-Z\s]+$/.test(name) && /^[0-9]{10}$/.test(mno) && /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email) &&
	 /^130CS240[0-9]$/.test(rno) && /^\S.*$/.test(address)){

      alert("Please enter a valid details");
	  seterror(true);
	  
      //return false;
    }
	else if(name==="" || mno==="" || email==="" || rno==="" || address===""){
		alert("fill the details");
		seterror(true);
	}
	else{
		setsubmitted(true);
		seterror(false);
	};
	
   // alert("Your registration successfull!!!");
}; 
	
  const successsmessage=()=>{
	return(
		<div
		className="success"
		style={{
			display: submitted ? '' :'none',
		}}>
		 <h2 id="cg">user {name} successfully registered!!</h2>
		 </div>
	);
  };
  
  const errormessage=()=>{
  	return(
  		<div
  		className="error"
  		style={{
  			display:error ? '' :'none',
  		}} >
  		 <h3 id="cr">enter all fields!!</h3>
		 </div>
  	);
    };
  
  

  const checkName = (e) => {
    setName(e.target.value);
	setsubmitted(false);
  };
  const checkmno = (e) => {
      setmno(e.target.value);
	  setsubmitted(false);
  };
  const checkemail = (e) => {
	  setemail(e.target.value);
	  setsubmitted(false);
  };
  const checkrno = (e) => {
	  setrno(e.target.value);
	  setsubmitted(false);
  };
  const checkaddress = (e) => {
	  setaddress(e.target.value);
	  setsubmitted(false);
  };
  
 return(
  <div>
  <center>
  <h1>Registration form</h1>
   
  <div className="messages">
  	{errormessage()}
	{successsmessage()}
  </div>
  
  <table border="4" cellspacing="3" cellpadding="3" text-align="center">
  
  <tr>	
  <td><label>Name : </label>
  <input type="text" onChange={checkName} value={name} /></td>
  <br />
  </tr>
  
  <tr>
  <td><label>Mobile : </label>
  <input type="number" onChange={checkmno} value={mno} /></td>
  <br />
  </tr>
	
  <tr>
  <td><label>E-mail : </label>
  <input type="email" onChange={checkemail} value={email} /></td>
  <br />
  </tr>
	  
  <tr>
  <td><label>Reg no : </label>
  <input type="text" onChange={checkrno} value={rno} /></td>
  <br />
  </tr>

  <tr>
  <td><label>Address : </label> 
  <input type="text" onChange={checkaddress} value={address} /></td>
  <br />
  </tr>
  
  <tr><td><ReCAPTCHA
          sitekey="Your site key"
          onChange={(value) => console.log("Captcha clicked:", value)}
   /></td></tr>
  
  <tr>
  <td colspan="2" align="center">
  <button id="cl" onClick={shoot}> SUBMIT </button>
  </td>
  </tr>
  
  </table>
  </center>
  </div>
  
  );
  
}





export default App;
