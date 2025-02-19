import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InterviewQuestions.css";

export const interviewVideos = [
  { 
    id: 101, 
    title: "Quantitative Aptitude Tutorials", 
    category: "Quantitative Aptitude", 
    link: "https://www.youtube.com/embed/videoseries?si=CgdrRHQwpnEEPZUT&amp;list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt",
    image: "/images/download.jpg"
  },
  { 
    id: 102, 
    title: "Tell Me About Yourself ", 
    category: "Interview Skills", 
    link: "https://www.youtube.com/embed/FMa1hZt7KSo?si=51vwJKcXmzvehsbF",
    image: "/images/tell.jpg"
  },
  { 
    id: 103, 
    title: "5 EASY STEPS to Master English ", 
    category: "Learn English", 
    link: "https://www.youtube.com/embed/VEz0KWURvPk?si=3_JlCZfu1SAlP-xO",
    image: "https://img.youtube.com/vi/VEz0KWURvPk/0.jpg"
  },
  { 
    id: 104, 
    title: "Master Aptitude", 
    category: "Aptitude", 
    link: "https://www.youtube.com/embed/gpTH7WI1s_0?si=m6qDQYNsNc-I4KuD",
    image: "/images/app.jpg"
  },
  { 
    id: 105, 
    title: "How to Crack Aptitude for IT Jobs", 
    category: "Aptitude", 
    link: "https://www.youtube.com/embed/L-EFQ5q6RvM?si=0yGXl8OR1KQqukID",
    image: "/images/app.jpg"
  },
  { 
    id: 106, 
    title: "HTML CSS Interview Questions and Answers", 
    category: "Interview Questions", 
    link: "https://www.youtube.com/embed/76RFEWtPFK0?si=zIlalMSykeO6ntUX",
    image: "/images/htmlcss.jpeg"
  },
  { 
    id: 107, 
    title: "Top 50 Python Interview Questions", 
    category: "Interview Questions", 
    link: "https://www.youtube.com/embed/lEC7nuPtHp0?si=3gyoTScehZ31TOaz",
    image: "/images/python.jpg"
  },
  { 
    id: 108, 
    title: "Java Interview Questions and Answers ", 
    category: "Interview Questions", 
    link: "https://www.youtube.com/embed/oYXivKMSEqM?si=IOg4hLU-fA1g4Dhf",
    image: "/images/java.jpg"
  },
  { 
    id: 109, 
    title: "React Coding Interview Prep - 30 Questions and Answers", 
    category: "Interview Questions", 
    link: "https://www.youtube.com/embed/XBTJDpT2XaI?si=4mKiUBMAdA2mJUbf",
    image: "/images/react.jpg"
  },
  { 
    id: 110, 
    title: "Learn Tenses In English Grammar With Examples", 
    category: "Learn English", 
    link: "https://www.youtube.com/embed/MwQdQI7valM?si=uc6aPfWQep3MX8lJ",
    image: "/images/tense.jpeg"
  },
  { 
    id: 111, 
    title: "JavaScript Interview Questions and Answers ", 
    category: "Interview Questions", 
    link: "https://www.youtube.com/embed/kl2bM9e-jJc?si=qmI3BQzYOOJ9DhmL",
    image: "/images/js.jpg"
  },
  { 
    id: 112, 
    title: "Top 65 SQL Interview Questions and Answers", 
    category: "Interview Questions", 
    link: "https://www.youtube.com/embed/-WEpWH1NHGU?si=9GDP_ZtWxem_EeoN",
    image: "/images/sql.jpg"
  }
];

const InterviewQuestions = () => {
  const navigate = useNavigate();

  const handleCardClick = (video) => {
    navigate(`/interview-video/${video.id}`, { state: { video } });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Interview Preparation Videos</h2>
      <div className="row">
        {interviewVideos.map((video) => (
          <div className="col-md-3 mb-4" key={video.id}>
            <div
              className="card shadow-sm"
              onClick={() => handleCardClick(video)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={video.image}
                className="card-img-top"
                alt={video.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewQuestions;
