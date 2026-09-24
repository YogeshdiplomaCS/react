	import './App.css';
	import {useState} from "react";
	
	function App() {
		const [list,setlist]=useState([]);
		const [value,setvalue]=useState("");
		
		const addtolist=()=>{
			//if (value.trim() === "") return; 
			    setlist(list.concat(value)); 
			    setvalue(""); 
		};
		const deletion=(index)=>{
			let temp=list.filter((item,i)=>i!==index);
			setlist(temp);
		};
	  return (
		<center>
	     <div className="App">
		 <fieldset>
		 <h3> Add product to list </h3><br></br>
		 <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)}></input><br></br>
		 <button onClick={addtolist}> Ciick to add </button> <br></br><br></br>
		 
		 <h>Product catalog </h><br></br>
		 
		 <ol>
		 
		 {list.map((item,i)=><li key={i} onClick={()=>deletion(i)}>{item}</li>)}
		 
		 </ol>
		 
		 <h>click on product to delete </h><br></br>
		 </fieldset>
		 </div>
		 </center>
	  );
	}
	
	export default App;
