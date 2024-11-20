import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '../utils/vehicles'; // Import hardcoded vehicles
import '../styles/VehicleDetails.css'; // Import updated styles

const VehicleDetails: React.FC = () => {
  const { id } = useParams(); // Get the vehicle ID from the URL parameters
  const vehicle = vehicles.find((v) => v.make + v.model === id); // Find the vehicle by ID (combination of make and model)

  if (!vehicle) {
    return <div>Vehicle not found</div>; // If no vehicle is found
  }

  return (
    <div className="vehicle-details-container">
      <h1>{vehicle.make} {vehicle.model}</h1>
      <div className="vehicle-details1">
        <img src={vehicle.images[0]} alt={vehicle.make} className="vehicle-detailimage" />
        <div className="info-container">
          <div className="info-box">
            <strong>Year</strong>
            <p>{vehicle.year}</p>
          </div>
          <div className="info-box">
            <strong>Mileage</strong>
            <p>{vehicle.mileage} miles</p>
          </div>
          <div className="info-box">
            <strong>Price</strong>
            <p>${vehicle.price}</p>
          </div>
          <div className="info-box">
            <strong>Location</strong>
            <p>{vehicle.location}</p>
          </div>
          <div className="info-box">
            <strong>Availability</strong>
            <p>{vehicle.availability ? "Available" : "Not Available"}</p>
          </div>
        </div>
      </div>
      <Link to="/vehicle-list" className="back-button">Back to Vehicles List</Link>
    </div>
  );
};

export default VehicleDetails;
