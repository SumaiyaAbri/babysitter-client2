import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from './AuthContext';

import babysitterImg from './baby 3.png'; // Assuming the image path is correct

export default function UpdateBabysitterv1() {
  const { id } = useParams(); // Get the babysitter ID from the URL
 

  const [formData, setFormData] = useState({
    babysitterid: '',
    babysitterName: '',
    customerforbabysitterName:'', // i want it to show here the name 
    customerforbabysitterPhone:'',
    babysitterAge: '',
    babysitterPrice: '',
    babysitterPlace: '',
    babysitterHouseno: '',
    babysitterDate: '', // Ensure date is included
    babysitterPaymentMethod: '', // Ensure payment method is included
    babysitterCardno: '',
    babysitterCardday: '',
    babysitterCardcvv: '',
  });

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
         // customerforbabysitterName:babysittergirl.customerforbabysitterName, // can you added this i want it from the login 
          babysitterAge: babysittergirl.babysitterAge,
          babysitterPrice: babysittergirl.babysitterPrice,
          babysitterPlace: babysittergirl.babysitterPlace,
          babysitterHouseno: babysittergirl.babysitterHouseno,
          babysitterDate: '', // Default empty
          babysitterPaymentMethod: '', // Default empty
          babysitterCardno: '',
          babysitterCardday: '',
          babysitterCardcvv: '',
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
      const response = await fetch(`http://localhost:3001/addbillbabysittergirl`, { // Changed endpoint
        method: 'POST', // Changed method to POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save babysitter bill');
      }

      alert('Babysitter bill saved successfully!');
    } catch (error) {
      alert(`Error saving babysitter bill: ${error.message}`);
    }
  };

  return (
    <div className="container mt-4">
      <h2>selected Babysitter</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Babysitter ID:</label>
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
            disabled
          />
        </div>

        <div className="form-group">
          <label>Your Name:</label>
          <input
            type="text"
            className="form-control"
            name="customerforbabysitterName"
            value={formData.customerforbabysitterName}
            onChange={handleChange}
            
          />
        </div>

        <div className="form-group">
          <label>Your Phone:</label>
          <input
            type="text"
            className="form-control"
            name="customerforbabysitterPhone"
            value={formData.customerforbabysitterPhone}
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
            disabled
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
            disabled
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
            disabled
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
            disabled
          />
        </div>

        <div className="form-group">
          <label>Choose day:</label>
          <input
            type="date"
            className="form-control"
            name="babysitterDate"
            value={formData.babysitterDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Payment Method:</label>
          <select
            className="form-control"
            name="babysitterPaymentMethod"
            value={formData.babysitterPaymentMethod}
            onChange={handleChange}
          >
            <option value="">Select a payment method</option>
            <option value="cash">Cash on Delivery</option>
            <option value="visa">Visa</option>
          </select>
        </div>

        {formData.babysitterPaymentMethod === 'visa' && (
          <>
            <div className="form-group">
              <label>Card Number:</label>
              <input
                type="text"
                className="form-control"
                name="babysitterCardno"
                value={formData.babysitterCardno}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Card Expiry Date:</label>
              <input
                type="text"
                className="form-control"
                name="babysitterCardday"
                value={formData.babysitterCardday}
                onChange={handleChange}
                placeholder="MM/YY"
              />
            </div>

            <div className="form-group">
              <label>Card CVV:</label>
              <input
                type="text"
                className="form-control"
                name="babysitterCardcvv"
                value={formData.babysitterCardcvv}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <button type="submit" className="btn btn-success">
          Next to pay
        </button>
        <br></br>    <br></br>
      </form>
    </div>
  );
}
