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
      await fetch(`http://localhost:3001/deleteBabysitter/${babysitterId}`, {
        method: 'DELETE',
      });

      // Update the local state to reflect the deletion
      setBabysitters(babysitters.filter((babysitter) => babysitter._id !== babysitterId));
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


      <div className="container mt-4">
      
        <div className="row">
          {babysitters.map((babysitter) => (
            <div key={babysitter._id} className="col-md-4 mb-4">
              <div className="card">
                <img   style={{ width: '50%', margin: '0 auto', paddingTop: '4px' }} src={images[Math.floor(Math.random() * images.length)]} className="card-img-top" alt="Babysitter" />
                <div className="card-body">
                  <h5 className="card-title">{babysitter.babysitterName}</h5>
                  <p className="card-text">Age: {babysitter.babysitterAge}</p>
                  <p className="card-text">Price: ${babysitter.babysitterPrice}</p>
                  <p className="card-text">Place: {babysitter.babysitterPlace}</p>
                  <p className="card-text">House Number: {babysitter.babysitterHouseno}</p>
                  <Link to={`/selectpage/${babysitter.babysitterid}`}>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => handleUpdate(babysitter._id)}
                    > 
                      Select
                    </button>
                  </Link>
              
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
