import React, { useState } from 'react';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [userid, setUserid] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState(''); 
  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLogin = () => {
    
    console.log('Username:', username);
    console.log('Userid:', userid);
    console.log('phonenumber:', phonenumber);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <h1>ADMIN LOGIN PAGE</h1>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
       
        <div>
          <label>User Email Id:</label>
          <input
            type="email"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
        </div>

        <div>
          <h4>Department:</h4>
            <select value={selectedOption}  onChange={handleSelectChange}  style={{ width: '440px', height: '40px' }} >
              <option value="">Select an option</option>
              <option value="AIML">AIML</option>
              <option value="AIDS">AIDS</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="MECH">MECH</option>
              <option value="CIVIL">CIVIL</option>
            </select>
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            value={phonenumber}
            onChange={(e) => setphonenumber(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Conform Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div></div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
