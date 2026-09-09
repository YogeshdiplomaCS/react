import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [no, setNo] = useState("");
  const [proname, setProname] = useState("");

  // FIX 1: Use proper boolean values instead of strings like "false"
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const shoot = (e) => {
    // Prevent default form/page refresh on submit
    e.preventDefault(); 

    // FIX 2: Fixed the invalid regex syntax (removed trailing '+' after '{10}')
    const isNameValid = /^[a-zA-Z\s]+$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    const isNoValid = /^[0-9]{10}$/.test(no);
    const isProNameValid = /^[a-zA-Z0-9\s]+$/.test(proname);

    if (!isNameValid || !isEmailValid || !isNoValid || !isProNameValid) {
      setError(true);    // FIX 3: Update the state using setters, not the UI functions
      setSuccess(false);
    } else {
      setSuccess(true);  // FIX 3: Update the state using setters, not the UI functions
      setError(false);
    }
  };

  // Simplified conditional rendering for messages
  const successMessage = () => {
    return success ? (
      <div className="success">
        <h1>Product {proname} added successfully</h1>
      </div>
    ) : null;
  };

  const errorMessage = () => {
    return error ? (
      <div className="error">
        <h1>Product added un-successfully (Validation Failed)</h1>
      </div>
    ) : null;
  };

  const handleName = (e) => { setName(e.target.value); setSuccess(false); setError(false); };
  const handleEmail = (e) => { setEmail(e.target.value); setSuccess(false); setError(false); };
  const handleNo = (e) => { setNo(e.target.value); setSuccess(false); setError(false); };
  const handleProName = (e) => { setProname(e.target.value); setSuccess(false); setError(false); };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {/* FIX 4: Replaced outdated <center> tag with standard flex container and correct table hierarchy */}
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th colSpan="2"><h1>Product Form</h1></th>
          </tr>
        </thead>
        <tbody>
          {/* FIX 5: Corrected broken JSX message syntax inside the table cell */}
          <tr>
            <td colSpan="2">
              {successMessage()}
              {errorMessage()}
            </td>
          </tr>
          <tr>
            <td><label>Name:</label></td>
            <td><input type="text" value={name} onChange={handleName} /></td>
          </tr>
          <tr>
            <td><label>Email:</label></td>
            <td><input type="email" value={email} onChange={handleEmail} /></td>
          </tr>
          <tr>
            <td><label>Phone No:</label></td>
            <td><input type="text" value={no} onChange={handleNo} maxLength={10} /></td>
          </tr>
          <tr>
            <td><label>Product Name:</label></td>
            <td><input type="text" value={proname} onChange={handleProName} /></td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center' }}>
              <button onClick={shoot}>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
