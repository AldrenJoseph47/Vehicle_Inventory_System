// src/pages/VehicleList.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { vehicles } from '../utils/vehicles'; // Import hardcoded vehicles
import '../styles/VehicleList.css'; // Import the styles
import '../styles/Pagination.css'; // Import pagination styles

const VehicleList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
  const [currentPage, setCurrentPage] = useState<number>(1); // State for pagination

  // Filter vehicles based on search query
  const filteredVehicles = vehicles.filter((vehicle) => {
    return (
      vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Pagination logic: Show 6 vehicles per page
  const vehiclesPerPage = 6;
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="vehicle-list">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Make, Model, or Location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Vehicle Grid */}
      <div className="vehicle-grid">
        {currentVehicles.map((vehicle, index) => (
          <Link key={index} to={`/vehicle/${vehicle.make + vehicle.model}`} className="vehicle-card-link">
            <div className="vehicle-card">
              <img src={vehicle.images[0]} alt={vehicle.make} className="vehicle-image" />
              <div className="vehicle-details">
                <h3>{vehicle.make} {vehicle.model}</h3>
                <p><strong>Year:</strong> {vehicle.year}</p>
                <p><strong>Location:</strong> {vehicle.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-container">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="pagination-button"
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          className="pagination-button"
          disabled={currentPage * vehiclesPerPage >= filteredVehicles.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default VehicleList;
