import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Features/UserSlice'; // Ensure correct path
import { useNavigate } from 'react-router-dom';


import babysitterImg from "./baby 3.png"; // Assuming the image path is correct

const backgroundStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative', // Ensure positioning is relative for absolute elements inside
  textAlign: 'center',
};

const imgStyle = {
  backgroundColor: 'black',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(50%)', // Example filter adjustment
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
};

const imgContainerStyle = {
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: '20px',
  boxSizing: 'border-box',
};

const formContainerStyle = {
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: '20px',
  boxSizing: 'border-box',
};

const formStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.3s', // Add transition effect for opacity
};


const buttonStylegray = {
  backgroundColor: 'gray',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.3s', // Add transition effect for opacity
};

const buttonHoverStyle = {
  opacity: 0.8, // Reduce opacity on hover
};

const buttonActiveStyle = {
  opacity: 0.6, // Reduce opacity when button is pressed
};




const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(login(loginData));
      console.log("Result action:", resultAction);

      // Check for errors
      if (resultAction.error) {
        console.error("Login error:", resultAction.error.message);
        // Handle the error state, such as showing an error message to the user
      } else {
        // Successful login
        if (resultAction.payload && resultAction.payload.role === "admin") {
          navigate("/users");
        } else {
          navigate("/market");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle other types of errors (e.g., network issues, unexpected responses)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (

    <div style={backgroundStyle}>
      <img src={babysitterImg} alt="Background" style={imgStyle} />

      <div style={formContainerStyle}>
    
        <div style={formStyle}>
          <h2 style={headingStyle}>Login    <a
            href="/"
            style={{ ...buttonStylegray, ...buttonHoverStyle, ...buttonActiveStyle }}
          >
            Home
          </a>
          
          </h2>

    <form onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        value={loginData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <br></br>
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <br></br>
      <button   style={{ ...buttonStyle, ...buttonHoverStyle, ...buttonActiveStyle }} type="submit">Login</button>
    </form>
    </div>
      </div>

      <div style={imgContainerStyle}>
        <img src={babysitterImg} alt="Babysitter" style={{ width: '80%', height: '80%', objectFit: 'cover' }} />
      </div>
    </div>

  );
};

export default Login;
