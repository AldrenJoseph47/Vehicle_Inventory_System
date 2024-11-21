import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VehicleList from './pages/VehicleList';
import VehicleDetails from './pages/VehicleDetails';
import Login from './pages/Login';
import Home from './pages/Home'; // Import the Home component
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import Footer from './components/Footer';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          {/* Public Home Page - No Authentication Required */}
          <Route path="/" element={<Home />} />

          {/* Login Page - No Authentication Required */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes - Authentication Required */}
          <Route
            path="/vehicle-list"
            element={
              <ProtectedRoute>
                <VehicleList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vehicle/:id"
            element={
              <ProtectedRoute>
                <VehicleDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
