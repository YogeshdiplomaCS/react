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
      <h1>Registration Form</h1>

      <label>Name : </label>
      <input type="text" onChange={checkName} value={name} />
      <br />
	  
	  <label>Registration no : </label>
	  <input type="text"  onChange={checkrno} value={rno} />
	  <br />

	  <label>Mobile no : </label>
	  <input type="number"  onChange={checkmno} value={mno} />
	  <br />

	  <label>address : </label>
	  <input type="text"  onChange={checkadd} value={add} />
	  <br />
	  
	  <label>E-mail : </label>
	  <input type="text"  onChange={checkmail} value={mail} />
	  <br />
		  
      <button onClick={shoot}>Submit</button>
    </div>
  );
}

export default App;
