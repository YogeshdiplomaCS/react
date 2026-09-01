import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [rno, setrno] = useState("");
  const [mno, setmno] = useState("");
  const [add, setadd] = useState("");
  const [mail, setmail] = useState("");



  const shoot = () => {
    if (name=== "") {
      alert("Please enter name");
      return false;
    }
       alert("Your name is: " + name);
	
	if (rno=== "") {
	      alert("Please enter register number");
	      return false;
	    }
	    alert("Your rno is: " + rno);
		
	if (mno=== "") {
		  alert("Please enter mobile number");
		  return false;
	    }
	    alert("Your mno is: " + mno);
		
    if (add=== "") {
		  alert("Please enter address");
		  return false;
		}
		alert("Your address is: " + add);
		
	if (mail=== "") {
		  alert("Please enter e-mail");
		  return false;
		}
		alert("Your mail is: " + mail);
							
	
  };

  const checkName = (e) => {
    setName(e.target.value);
  };
  
  const checkrno = (e) => {
      setrno(e.target.value);
    };
  
  const checkmno = (e) => {
	  setmno(e.target.value);
	};
  const checkadd = (e) => {
	  setadd(e.target.value);
    }; 
	
  const checkmail = (e) => {
	  setmail(e.target.value);
	};

  return (
    <div>
	<table border="5" align="center">
      <h1>Registration Form</h1>

	  <tr>
      <td><label>Name : </label>
      <input type="text" onChange={checkName} value={name} /></td>
      <br /><br />
	  </tr>
	  
	  <tr>
	  <td><label>Registration no : </label>
	  <input type="text"  onChange={checkrno} value={rno} /></td>
	  <br /><br />
	  </tr>
	  
	  <tr>
	  <td><label>Mobile no : </label>
	  <input type="number"  onChange={checkmno} value={mno} /></td>
	  <br /><br />
	  </tr>
	  
	  <tr>
	  <td><label>address : </label>
	  <input type="text"  onChange={checkadd} value={add} /></td>	
	  <br /><br />
	  </tr>
	  
	  <tr>
	  <td><label>E-mail : </label>
	  <input type="text"  onChange={checkmail} value={mail} /></td>
	  <br /><br />
	  </tr>
	  	  	
      <button onClick={shoot} id="rv">Submit</button>
	  </table>
    </div>
  );
}

export default App;
