import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Quizzes.css";


export const quizzes = [
  {
    id: 1,
    title: "JavaScript ",
    description: "Codewars is a platform for solving coding challenges to practice and improve your programming skills in various languages.",
    url:"https://www.codewars.com/"
  },
  {
    id: 2,
    title: "PHP -W3Resource",
    description: "PHP Exercises - W3Resource offers a collection of PHP coding exercises to practice and enhance your PHP programming skills.",
    url:"https://www.w3resource.com/php-exercises/"
  },
  {
    id: 3,
    title: "Grid Garden",
    description: "Learn Grid using Grid Garden.",
    url: "https://cssgridgarden.com/",
  },
  {
    id: 4,
    title: "CSS Diner",
    description: "CSS Diner is an interactive game that helps you master CSS selectors by solving fun challenges to style elements on a virtual table." ,
    url:"https://flukeout.github.io/"
  },
  {
    id: 5,
    title: "Flexbox Froggy",
    description: "Learn Flexbox with an interactive game!",
    url: "https://flexboxfroggy.com/",
  },
  {
    id: 6,
    title: "Python ",
    description: "Codewars is a platform for solving coding challenges to practice and improve your programming skills in various languages.",
    url:"https://www.hackerrank.com/domains/python"
  },
  {
    id: 7,
    title: "Java - HackerRank",
    description: "HackerRank Java Challenges offers a variety of Java practice problems, including data structures, algorithms, and object-oriented programming.",
    url:"https://www.hackerrank.com/domains/java"
  },
  {
    id: 8,
    title: "Exercism",
    description: "Practice coding in over 50 languages with mentored feedback for deeper learning.",
    url: "https://exercism.org/",
  },
  {
    id: 9,
    title: "SQL - HackerRank",
    description: "HackerRank SQL Challenges provides a variety of SQL practice problems, including querying, joins, and advanced database operations." ,
    url:"https://www.hackerrank.com/domains/sql"
  },
  {
    id: 10,
    title: "Python - Checkio",
    description: "CheckiO: Fun and engaging Python challenges for intermediate learners.",
    url: "https://checkio.org/",
  },
  {
    id: 11,
    title: "Interview Preparation",
    description: "HackerEarth is a platform offering coding challenges, hackathons, and interview preparation resources for developers." ,
    url:"https://www.hackerearth.com/practice/interviews/"
  },
  {
    id: 12,
    title: "Ruby",
    description: "LearnRubyOnline is an interactive platform for learning and practicing Ruby programming through hands-on coding exercises.",
    url: "https://www.learnrubyonline.org/",
  },
];

const Quizzes = () => {
  return (
    <div className="container mt-4 quizzes">
      <h2 className="mb-4 text-center">Practice Websites</h2>
      <div className="row">
        {quizzes.map((quiz) => (
          <div className="col-md-6 col-lg-4 mb-4" key={quiz.id}>
            <div className="card shadow-sm p-3 h-100">
              <div className="card-body text-center">
                <h5 className="card-title">{quiz.title}</h5>
                <p className="card-text text-secondary">{quiz.description}</p>
                {quiz.url ? (
                  <a
                    href={quiz.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                  >
                    Visit
                  </a>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => alert("Quiz Coming Soon!")}
                  >
                    Visit
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
