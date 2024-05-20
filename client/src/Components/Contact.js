import React from "react";
import babysitterImg from "./baby 3.png"; // Assuming the image path is correct


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
  backgroundColor:'black',
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



export default function Contact() {
  return (
    <div style={backgroundStyle}>
    <img src={babysitterImg} alt="Background" style={imgStyle} />
    <div className="container py-5">
      <div className="row">
        {/* First Box */}
        <div className="col-md-6 mb-6">
            <div className="p-8  rounded"  style={{color:'white', marginLeft:'' } }>
            <h2 className="mb-3">Contact Us</h2>
            <br></br>
            <h3>
              Email:  <br></br>Babysitter@gmail.com 
            </h3>
            <br></br>
            <h3>
              Phone number:  <br></br> +968 97709770
            </h3>
          </div>
        </div>
        {/* Second Box */}
        <div className="col-md-6 mb-4">
          <div className="p-4  rounded">
            <img src={babysitterImg} alt="Babysitter" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}








