import {Outlet, Link} from "react-router-dom";
import React from "react";
import "./Layout.css";

const Layout=()=>{
	return(
		<>
		<nav>
		<marquee direction="up">
		<img src="cm.png" width="33%"></img>
		<img src="clg.png" width="33%"></img>
		<img src="kar.png" width="33%"></img>
		</marquee>
		 
		<center>
		<h2 id="lt">========================================================================================================================</h2>
		<table width="100%">
		<tr >
		<td><Link className="bg" to="/">Home</Link></td>
		<td><Link className="bg" to="/About">About</Link></td>
		<td><Link className="bg" to="/Placement">Placement</Link></td>
		<td><Link className="bg" to="/Sport">Sport</Link></td>
		<td><Link className="bg" to="/Contact">Contact</Link></td>
		<td><Link className="bg" to="/Faculty">Faculty</Link></td>
		</tr>
		</table>
		<h2 id="lt">========================================================================================================================</h2>
		</center>
		</nav>
		
		<Outlet />
		
		</>
	);
}

export default Layout;
