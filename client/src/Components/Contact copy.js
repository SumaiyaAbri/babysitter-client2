import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../imgs/b1.png';
import img2 from '../imgs/b2.png';
import img3 from '../imgs/b3.png';
import img4 from '../imgs/b4.png';

const images = [img1, img2, img3, img4];

const UsersPage = () => {
  const [babysitters, setBabysitters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch babysitter data when the component mounts
    const fetchBabysitters = async () => {
      try {
        const response = await fetch('http://localhost:3001/getAllbabysittergirls');
        const data = await response.json();
        console.log('Fetched data:', data); // Log the fetched data
        setBabysitters(data.babysittergirls);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBabysitters();
  }, []);

  const handleUpdate = (babysitterId) => {
    // Handle update logic here
    console.log(`Update babysitter with ID: ${babysitterId}`);
  };

  const handleDelete = async (babysitterId) => {
    try {
      // Send a DELETE request to the server to delete the babysitter with the specified ID
      await fetch(`http://localhost:3001/deletebabysittergirl/${babysitterId}`, {
        method: 'DELETE',
      });

      // Update the local state to reflect the deletion
      setBabysitters(babysitters.filter((babysitter) => babysitter.babysitterid !== babysitterId));
    } catch (error) {
      console.error('Error deleting babysitter:', error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Link to="/users" className="btn rounded p-4 text-center" style={{ backgroundColor: "#FFD4BE" }}>
              <h2>List Babysitter</h2>
            </Link>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <Link to="/registerbabysitter" className="btn rounded p-4 text-center" style={{ backgroundColor: "#FFD4BE" }}>
              <h2>Add Babysitter</h2>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/updatebabysitter" className="btn rounded p-4 text-center" style={{ backgroundColor: "#FFD4BE" }}>
              <h2>Update Babysitter</h2>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/deletebabysitter" className="btn rounded p-4 text-center" style={{ backgroundColor: "#FFD4BE" }}>
              <h2>Delete Babysitter</h2>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          {babysitters.map((babysitter) => (
            <div key={babysitter._id} className="col-md-4 mb-4">
              <div className="card">
                <img style={{ width: '50%', margin: '0 auto', paddingTop: '4px' }} src={images[Math.floor(Math.random() * images.length)]} className="card-img-top" alt="Babysitter" />
                <div className="card-body">
                  <h5 className="card-title">{babysitter.babysitterName}</h5>
                  <p className="card-text">Age: {babysitter.babysitterAge}</p>
                  <p className="card-text">Price: ${babysitter.babysitterPrice}</p>
                  <p className="card-text">Place: {babysitter.babysitterPlace}</p>
                  <p className="card-text">House Number: {babysitter.babysitterHouseno}</p>
                  <Link to={`/updatebabysitter/${babysitter.babysitterid}`}>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => handleUpdate(babysitter.babysitterid)}
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(babysitter.babysitterid)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
