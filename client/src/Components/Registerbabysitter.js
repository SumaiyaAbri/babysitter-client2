import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/*

import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

*/

function RegisterBabysitter() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    price: "",
    place: "",
    houseno: ""
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

    try {
      // Make a POST request to the server with the form data
      const response = await fetch("http://localhost:3001/addbabysittergirl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful (status code 200)
      if (response.ok) {
        alert("Babysitter added successfully!");
        console.log("Form data submitted successfully!");
        navigate("/users");
        // Optionally, you can redirect or perform other actions here
      } else {
        const errorData = await response.json();
        alert(`Error submitting form data: ${errorData.message}`);
        console.error("Error submitting form data");
      }
    } catch (error) {
      alert(`Error submitting form data: ${error.message}`);
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className="container mt-4" style={{ backgroundColor: "#e7e77e", padding: "20px", borderRadius: "10px" }}>
      <h2 style={{ fontFamily: "Arial, sans-serif", color: "black" }}>Register Babysitter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Civial ID:</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={formData.id}
            onChange={handleChange}
            style={{ backgroundColor: "#FAEBCE" }}
          />
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ backgroundColor: "#FAEBCE" }}
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
            style={{ backgroundColor: "#FAEBCE" }}
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={{ backgroundColor: "#FAEBCE" }}
          />
        </div>

        <div className="form-group">
          <label>Place:</label>
          <input
            type="text"
            className="form-control"
            name="place"
            value={formData.place}
            onChange={handleChange}
            style={{ backgroundColor: "#FAEBCE" }}
          />
        </div>

        <div className="form-group">
          <label>House Number:</label>
          <input
            type="text"
            className="form-control"
            name="houseno"
            value={formData.houseno}
            onChange={handleChange}
            style={{ backgroundColor: "#FAEBCE" }}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterBabysitter;
