import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import babysitterImg from "./baby 3.png"; // Assuming the image path is correct

const backgroundStyle = {
  display: 'flex',
  justifyContent: 'space-between', // Ensure space between the form and the image
  alignItems: 'center',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  textAlign: 'center',
  padding: '0 50px', // Add some padding for spacing
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


const imgStyle = {
  backgroundColor: 'black',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(50%)',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
};

const formContainerStyle = {
  width: '40%', // Adjust the width to make room for the image
  padding: '20px',
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  borderRadius: '10px',
  zIndex: 1, // Ensure the form is above the background image
};

const formStyle = {
  width: '100%',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
  color: 'white',
};

const labelStyle = {
  color: 'white',
};

const inputStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderColor: '#555',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.3s',
};

const imageContainerStyle = {
  width: '40%', // Adjust the width as needed
  height: 'auto',
  zIndex: 1, // Ensure the image is above the background
};

const babyImageStyle = {
  width: '30%',
  height: 'auto',
  borderRadius: '10px',
};

function Create() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    username: "",
    password: "",
    studrole: 'normal',
    passwordconfirm: "",
    gender: "male", // Default to "male"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.passwordconfirm) {
      alert("Password and confirmation do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/addStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your account has been created successfully!");
        navigate("/login");
      } else {
        const errorData = await response.json();
        alert(`Error submitting form data: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error submitting form data: ${error.message}`);
    }
  };

  return (
    <div style={backgroundStyle}>
      <img src={babysitterImg} alt="Background" style={imgStyle} />

      <div style={formContainerStyle}>
        <div style={formStyle}>
          <h2 style={headingStyle}>Create User</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label style={labelStyle}>Civil ID:</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={formData.id}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label style={labelStyle}>Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label style={labelStyle}>Username:</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label style={labelStyle}>Password:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label style={labelStyle}>Password Confirm:</label>
              <input
                type="password"
                className="form-control"
                name="passwordconfirm"
                value={formData.passwordconfirm}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div className="form-group">
              <label style={labelStyle}>Gender:</label>
              <div>
                <label style={{ color: 'white' }}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label style={{ marginLeft: "10px", color: 'white' }}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            <div style={buttonContainerStyle}>
              <button type="submit" style={buttonStyle}>
                Register
              </button>
              <button type="button" style={buttonStylegray} onClick={() => navigate("/")}>
                Go Home
              </button>
            </div>
          </form>
        </div>
      </div>

      <div style={imageContainerStyle}>
        <img src={babysitterImg} alt="Baby" style={babyImageStyle} />
      </div>
    </div>
  );
}

export default Create;
