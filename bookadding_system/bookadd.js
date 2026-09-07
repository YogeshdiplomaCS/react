import React, { useState } from 'react';
import './Bookadd.css';

function Bookadd(){
	const [name,setname]=useState('');
	const [email,setemail]=useState('');
	const [select, setselect]=useState('');
	const [selected, setselected]=useState('');
	const [error,seterror]=useState('');
	const [submitted,setsubmitted]=useState('');

	
	const shoot = (dt) =>{
		if (!/^[a-zA-Z\s]+$/.test(name)){
			alert("enter valid name");
			return false;
		}
		
		if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)){
			alert("enter valid email");
			return false;
		}
		alert("Submitted successfully");
	}
	
	const handlename=(e)=>{
		setname(e.target.value)
	}
	
	const handleemail=(e)=>{
			setemail(e.target.value)
		}
	
	const handleselect=(e)=>{
		setselect(e.target.value)
	}
	
	const handleselected=(e)=>{
		setselected(e.target.value)
		}
		
	
		
	return(
		<center>
		<form>
		<table border="6" cellspacing="6" cellpadding="6">
		<div>
		
		<div>
		<h1>Book add system</h1>
		</div>
		<tr>
		<td><label>Name :</label>
		<input typr="text" placeholder="name" onChange={handlename} value={name} /></td>
		<br /><br /></tr>
		
		<tr>
		<td><label>E-mail :</label>
		<input typr="email" placeholder="E-mail" onChange={handleemail} value={email} /></td>
		<br /><br /></tr>
		
		
		<tr>
		<td>
		<label>Select your cource  :  </label>
		<select value={selected} onChange={handleselected}>
		<option value="">select </option>
		<option value="Diploma">Diploma</option>
		<option value="PUC">PUC</option>
		<option value="Engineering">Engineering</option>
		</select>
		
		</td>
		</tr>
		
		       <tr>
				<td>
				<label>Choose book  :  </label>
				<select value={select} onChange={handleselect}>
				<option value="">select </option>
				<option value="CN">CN</option>
				<option value="java">Java</option>
				<option value="Cython">Cython</option>
				<option value="C">C</option>
				<option value="C++">C++</option>
				<option value="C#">C#</option>
				<option value="Assembly">Assembly</option>
				<option value="DSA">DSA</option>
				<option value="AI & ML">AI & ML</option>
				<option value="Maths">Maths</option>
				<option value="Biology">Biology</option>
				<option value="Chemistry">Chemistry</option>
				<option value="Kannada">Kannada</option>
				<option value="English">English</option>
				</select>
				<p>You select book : {select}</p>
				</td>
				</tr>
		
		<tr>
		<td colspan="2" align="center">
		<button onClick={shoot} >submit</button></td>
		</tr>
				
		
		</div>
		</table>
		</form>
		</center>
	);
	
}


export default Bookadd;
