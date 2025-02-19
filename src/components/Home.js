import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const videos = [
  {
    id: 6,
    title: "Java programming",
    image: "/images/java.jpg",
  },
  {
    id: 2,
    title: "JavaScript In English",
    image: "/images/js.jpg",
  },
  {
    id: 3,
    title: "CSS ",
    image: "/images/css.jpg",
  },
  {
    id: 12,
    title: "Python In Tamil",
    image: "/images/python.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/video/${id}`);
  };

  const handleExplore = () => {
    navigate("/coursepage");
  };

  return (
    <div className="home container mt-4">
      {/* Welcome Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4">Welcome to Freeverse!</h1>
        <p className="fs-5 text-muted">
          Empowering minds through technology and creativity. Discover a wealth
          of knowledge and skills with our curated video library. Whether you're
          a beginner or a professional, we've got something for everyone.
        </p>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => handleExplore()}
        >
          Explore Now
        </button>
      </div>

      {/* Features Section */}
      <div className="row text-center mb-5">
        <div className="col-md-4 feature-box">
          <i className="bi bi-laptop display-3 text-primary"></i>
          <h3 className="mt-3">Expert-Led Courses</h3>
          <p className="text-muted">
            Learn from industry leaders and experts with years of experience.
            Our courses are designed to provide hands-on knowledge.
          </p>
        </div>
        <div className="col-md-4 feature-box">
          <i className="bi bi-graph-up display-3 text-primary"></i>
          <h3 className="mt-3">Grow Your Career</h3>
          <p className="text-muted">
            Upgrade your skills and accelerate your career growth with
            in-demand technologies and tools.
          </p>
        </div>
        <div className="col-md-4 feature-box">
          <i className="bi bi-camera-reels display-3 text-primary"></i>
          <h3 className="mt-3">Diverse Library</h3>
          <p className="text-muted">
            Explore our extensive library of videos on React, JavaScript,
            Python, and much more.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold">Go further in web development</h1>
            <p className="text-muted">
              See our top courses in JavaScript, React, and more to
              advance your skills.
            </p>
            <button className="btn btn-primary btn-lg " onClick={() => handleExplore()}>Learn more</button>
          </div>
          <div className="col-md-6">
            <img
              src="/images/web.jpg"
              alt="Hero Section"
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Video Cards Section */}
      <h2 className="mb-4 text-center">Recommended for you</h2>
      <div className="row">
        {videos.map((video) => (
          <div className="col-md-3" key={video.id}>
            <div
              className="card shadow-sm"
              onClick={() => handleCardClick(video.id)}
              style={{ cursor: "pointer" }}
            >
              {/* Card Image */}
              <img
                src={video.image}
                className="card-img-top"
                alt={video.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              {/* Card Body */}
              <div className="card-body text-center">
                <h5 className="card-title">{video.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
