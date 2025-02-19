import React from "react";
import { useLocation, Link } from "react-router-dom";
import { videos } from "./VideoPage"; // Import videos from VideoPage
import { quizzes } from "./Quizzes"; // Import quizzes
import { interviewVideos } from "./InterviewQuestions"; // Import interview questions
import "./SearchResultsPage.css"; // Import your CSS file for styling

const SearchResultsPage = () => {
  const query = new URLSearchParams(useLocation().search).get("query");

  // Combine videos, quizzes, and interview questions
  const combinedResults = [
    ...videos.map((video) => ({ ...video, type: "video" })),
    ...quizzes.map((quiz) => ({ ...quiz, type: "quiz" })),
    ...interviewVideos.map((interview) => ({ ...interview, type: "interview" })),
  ];

  // Filter combined results based on the search query
  const filteredResults = combinedResults.filter((item) =>
    item.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <div className="container">
      <h2 className="search-results-title">
        Search Results for "{query}"
      </h2>
      {filteredResults.length > 0 ? (
        <ul className="video-list">
          {filteredResults.map((item) => (
            <li className="video-item" key={`${item.type}-${item.id}`}>
              {item.type === "video" ? (
                <>
                  <iframe
                    src={item.link}
                    title={item.title}
                    className="thumbnail"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="video-content">
                    <Link to={`/video/${item.id}`} className="video-title">
                      {item.title}
                    </Link>
                    <p className="video-description">{item.description}</p>
                    <Link to={`/video/${item.id}`} className="watch-button">
                      Watch Now
                    </Link>
                  </div>
                </>
              ) : item.type === "quiz" ? (
                <div className="quiz-content">
                  <h5 className="quiz-title">{item.title}</h5>
                  <p className="quiz-description">{item.description}</p>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success"
                    >
                      Visit
                    </a>
                  ) : (
                    <button className="btn btn-primary" onClick={() => alert("Quiz Coming Soon!")}>
                      Start Quiz
                    </button>
                  )}
                </div>
              ) : (
                // 🎯 FIXED: Interview Video Case
                <div className="interview-content">
                  <img src={item.image} className="thumbnail" alt={item.title} />
                  <div className="video-content">
                    <h5 className="interview-title">{item.title}</h5>
                    <p className="interview-description">{item.category}</p>
                    <Link to={`/interview/${item.id}`} state={{ video: item }} className="interview-button">
                      Watch Now
                    </Link>

                  </div>
                </div>
              )}
            </li>
          ))}

        </ul>
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
