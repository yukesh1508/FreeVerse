import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggle menu
  const navigate = useNavigate();
  

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Redirect to a search results page
    }
  };



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img src="/images/FV.png" alt="FreeVerse Logo" width="50" height="50" /> FreeVerse
        </Link>
        {/* Toggle Button for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Search */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quizzes">
                Practice Websites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/interview-questions">
                Interview Preparations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/coursepage">
                Course
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* Logout Button */}
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
