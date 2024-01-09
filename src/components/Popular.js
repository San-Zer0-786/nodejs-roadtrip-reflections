import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserProfile } from '../redux/actions/actions';

const Popular = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    document.body.className = 'users show';
    fetch('https://olunra7p4g.execute-api.eu-west-1.amazonaws.com/test/car-models')
    .then((response) => response.json())
    .then((data) => {
      console.warn(data.body.data); // Log the fetched data
      setCarData(data.body.data); // Update state with fetched data
    })
    .catch((error) => console.error('Error fetching data:', error));
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
      <div className="users show">
      <div className="container-fluid main-container">
      <div className="banner-container animated fadeInUp-small" data-animation="fadeInUp-fadeOutDown-slow">
          <div className="hero-wrapper">
              <header className="hero">
                  <div className="profile-info">
                    <h2>Most Popular Vehicles</h2>
                      <p>Select a car to find user posts detailing their experiences!</p>
                  </div>
              </header>
          </div>
      </div>


      <div className="posts-wrapper animated fadeInUp" data-animation="fadeInUp-fadeOutDown">

          <h4 className="small-heading border-top">latest</h4>
         
          <table>
        <thead>
          <tr>
            <th>Car Make</th>
            <th>Car Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {carData.map((car, index) => (
            <tr key={index}>
              <td>{car.make.name}</td>
              <td>{car.name}</td>
              <td>2000</td>
            </tr>
          ))}
        </tbody>
      </table>
       

      </div>

      </div>
      </div>
)
  
};

export default Popular;
