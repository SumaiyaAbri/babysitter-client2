import React from "react";

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: "black", 
      color: "white", 
      width: "100%",
      position: "fixed", // or "absolute" depending on your layout
      bottom: 0
    }}>
      <div className="container-fluid">
        <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* Icons or other content here */}
          {/* <FontAwesomeIcon icon={faInstagram} className="mr-300" style={{ fontSize: "24px" }} />
          <FontAwesomeIcon icon={faSnapchat} className="mr-300" style={{ fontSize: "24px" }} />
          <FontAwesomeIcon icon={faTwitter} className="mr-300" style={{ fontSize: "24px" }} /> */}
          <span style={{ flex: "1", textAlign: "center" }}>© 2024 Babysitter  copyright@</span>
        </span> 
      </div>
    </footer>
  );
}

export default Footer;







// // import React from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faInstagram, faSnapchat, faTwitter } from "@fortawesome/free-brands-svg-icons";
// // import Footer from "./Components/Footer.css"; // Import CSS file for styling


// // const Footer = () => {
// //   return (
// //     <footer className="footer-container">
// //       <div className="social-icons">
// //         <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
// //           <FontAwesomeIcon icon={faInstagram} />
// //         </a>
// //         <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer">
// //           <FontAwesomeIcon icon={faSnapchat} />
// //         </a>
// //         <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
// //           <FontAwesomeIcon icon={faTwitter} />
// //         </a>
// //       </div>
// //       <p>&copy; 2024 Your Company Name</p>
// //     </footer>
// //   );
// // };

// // export default Footer;




















// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faSnapchat, faTwitter } from "@fortawesome/free-brands-svg-icons";

// function Footer() {
//   return (
//     <footer style={{ backgroundColor: "black", color: "white", width: "100%" }}>
//       <div className="container-fluid">
//         <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//           {/* <FontAwesomeIcon icon={faInstagram} className="mr-300" style={{ fontSize: "24px" }} />
//           <FontAwesomeIcon icon={faSnapchat} className="mr-300" style={{ fontSize: "24px" }} />
//           <FontAwesomeIcon icon={faTwitter} className="mr-300" style={{ fontSize: "24px" }} /> */}
//           <span style={{ flex: "1", textAlign: "center" }}>© 2023. Hair studio</span>
//         </span> 
//       </div>
//     </footer>
//   );
// }

// export default Footer;