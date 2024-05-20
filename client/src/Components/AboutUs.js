import React from "react";
import babysitterImg from "../Components/baby 3.png"; // Assuming the image path is correct
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


export default function AboutUs(){
    return(
      <div style={backgroundStyle}>
        <img src={babysitterImg} alt="Background" style={imgStyle} />
        <div className="container py-5">
        <div className="row">
          {/* First Box */}
          <div className="col-md-6 mb-6">
            <div className="p-8  rounded"  style={{color:'white', marginLeft:'' } }>
              <h2 className="mb-3">About us</h2>
              <p>
                Babysitter application is about providing an experienced babysitter who takes care of children responsibly
                and encourages fun and creative activities to help in their development. Focus on fostering curiosity and
                skill development while sticking to parents' preferred routine. We are committed to maintaining a clean,
                safe, and organized environment.
              </p>
            </div>
          </div>
          {/* Second Box */}
          <div className="col-md-2 mb-2">
            <div className="p-4 rounded">
            <img src={babysitterImg}  />
            </div>
          </div>
        </div>
      </div>
      </div>
    )


}



// import React from "react";


// function AboutUs(){
//     return(
//         <h1>AboutUs</h1>
//     )
// }

// {/* <body>
//     <header>
//         <h1>AboutUs</h1>
//         <nav>
//             <ul>
//                 <li><a href="">Home</a></li>
//                 <li><a href="">AboutUs</a></li>
                
//             </ul>
//         </nav>
//     </header>
// <main>
//         <section class="">
//             <h2>About Babysitter</h2>
//             <p> </p>
//         </section>
//     </main>
    
//     <footer>
//         <p> color </p>
//     </footer>
// </body> */}

// export default AboutUs;
