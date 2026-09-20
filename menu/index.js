import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./Layout";
import About from "./About";
import Placement from "./Placement";
import Home from "./Home";
import Sport from "./Sport";
import Contact from "./Contact";
import Faculty from "./Faculty";

export default function App(){
	return(
		<BrowserRouter>
		<Routes>
		<Route path="/" element={<Layout />}>
		<Route index element={<Home />} />
		<Route path="About" element={<About />} />
		<Route path="Placement" element={<Placement />} />
		<Route path="Sport" element={<Sport />} />
		<Route path="Contact" element={<Contact />} />
		<Route path="Faculty" element={<Faculty />} />
		
		</Route>
		</Routes>
		</BrowserRouter>
		
	);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
    //<App />
 // </React.StrictMode>
//);

root.render(<App />); 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
