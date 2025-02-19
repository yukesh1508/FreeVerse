import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InterviewVideo.css";

const InterviewVideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the video details from navigation state
  const video = location.state?.video;

  if (!video) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <h2 className="text-danger">Video not found!</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">{video.title}</h2>

            {/* Video Embed */}
            <div className="ratio ratio-16x9">
              <iframe
                className="rounded"
                src={video.link}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <p className="mt-3 text-muted text-center">{video.category}</p>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-outline-primary" onClick={() => navigate("/")}>
                Home
              </button>
              <button className="btn btn-secondary" onClick={() => navigate("/search")}>
                Back to Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewVideoPage;
