import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import babysitterImg from './baby 3.png'; // Assuming the image path is correct
import { useNavigate } from "react-router-dom";

export default function UpdateBabysitterv1() {
  const { id } = useParams(); // Get the babysitter ID from the URL
  
  const [formData, setFormData] = useState({
    babysitterid: '',
    babysitterName: '',
    babysitterAge: '',
    babysitterPrice: '',
    babysitterPlace: '',
    babysitterHouseno: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch existing babysitter data
    const fetchBabysitter = async () => {
      try {
        const response = await fetch(`http://localhost:3001/getbabysittergirl/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch babysitter data');
        }
        const data = await response.json();
        const babysittergirl = data.babysittergirl[0]; // Access the first babysitter girl
        setFormData({
          babysitterid: babysittergirl.babysitterid,
          babysitterName: babysittergirl.babysitterName,
          babysitterAge: babysittergirl.babysitterAge,
          babysitterPrice: babysittergirl.babysitterPrice,
          babysitterPlace: babysittergirl.babysitterPlace,
          babysitterHouseno: babysittergirl.babysitterHouseno,
        });
      } catch (error) {
        console.error('Error fetching babysitter data:', error.message);
        setError(error.message);
      }
    };
  
    fetchBabysitter();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/updatebabysittergirl/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update babysitter');
      }

      alert('Babysitter updated successfully!');
      navigate("/users");
     
    } catch (error) {
   
      alert(`Error updating babysitter: ${error.message}`);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Update Babysitter</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            className="form-control"
            name="babysitterid"
            value={formData.babysitterid}
            onChange={handleChange}
            disabled
          />
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="babysitterName"
            value={formData.babysitterName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            className="form-control"
            name="babysitterAge"
            value={formData.babysitterAge}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            name="babysitterPrice"
            value={formData.babysitterPrice}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Place:</label>
          <input
            type="text"
            className="form-control"
            name="babysitterPlace"
            value={formData.babysitterPlace}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>House Number:</label>
          <input
            type="text"
            className="form-control"
            name="babysitterHouseno"
            value={formData.babysitterHouseno}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
      <img src={babysitterImg} alt="Babysitter" style={{ width: '70%' }} />
    </div>
  );
}
