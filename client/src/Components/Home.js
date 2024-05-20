import React from "react";
import babysitterImg from "./baby 3.png"; 
const img = "https://w0.peakpx.com/wallpaper/314/961/HD-wallpaper-baby-boy-girl-yellow.jpg";
const backgroundStyle = {

  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  position: 'relative', // Ensure positioning is relative for absolute elements inside
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(50%)', // Example filter adjustment
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
};

const textStyle = {
  color: '#fff',
  marginBottom: '20px',
};

const headingStyle = {
  fontSize: '130px',
  fontStyle: 'italic',
  width: '570px',
  height: '109px',
  margin: '0 auto',
};

const paragraphStyle = {
  fontSize: '20px',
  fontStyle: 'italic',
  marginTop: '10px',
};

const imgContainerStyle = {
  width: '450px',
  height: '450px',
  marginBottom: '20px',
};

const babysitterImgStyle = {
  width: '80%',
  height: '90%',
  objectFit: 'cover',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const buttonStyle = {
  backgroundColor: '#fff',
  color: '#000',
  padding: '10px 20px',
  margin: '0 10px',
  borderRadius: '5px',
  fontSize: '16px',
  textDecoration: 'none',
  transition: 'opacity 0.3s', // Add transition effect for opacity
};

const buttonHoverStyle = {
  opacity: 0.8, // Reduce opacity on hover
};

const buttonActiveStyle = {
  opacity: 0.6, // Reduce opacity when button is pressed
};

function Home() {
  return (
    <div style={backgroundStyle}>
      <img src={img} alt="Background" style={imgStyle} />
      <div style={textStyle}>
        <h1 style={headingStyle}>Babysitter</h1>
       
        <div style={imgContainerStyle}>
          <img src={babysitterImg} alt="Babysitter" style={babysitterImgStyle} />
        </div>
        <div style={buttonContainerStyle}>
          <a
            href="/register"
            style={{ ...buttonStyle, ...buttonHoverStyle, ...buttonActiveStyle }}
          >
            Register
          </a>
          <a
            href="/login"
            style={{ ...buttonStyle, ...buttonHoverStyle, ...buttonActiveStyle }}
          >
            Login
          </a>
        </div>
      </div>
      <br></br><br></br><br></br>
    </div>
  );
}

export default Home;
