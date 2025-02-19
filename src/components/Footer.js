import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              FreeVerse is dedicated to providing quality education and resources to help learners excel in their careers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <button className="text-white text-decoration-none btn btn-link p-0" onClick={() => navigate("/quizzes")}>
                  Quizzes
                </button>
              </li>
              <li>
                <button className="text-white text-decoration-none btn btn-link p-0" onClick={() => navigate("/interview-questions")}>
                  Interview Questions
                </button>
              </li>
              <li>
                <button className="text-white text-decoration-none btn btn-link p-0" onClick={() => navigate("/coursepage")}>
                  Courses
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: freeversecourse@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="bg-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} FreeVerse. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
