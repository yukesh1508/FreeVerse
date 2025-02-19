import React from "react";
import { useParams, useNavigate, Link  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VideoPage.css";



export const videos = [
  {
    id: 1,
    title: "Mastering React JS",
    description: "Kickstart your journey with React and build modern web apps.",
    link: "https://www.youtube.com/embed/CgkZ7MvWUAA?si=sUIq8ZVK6YlE588F",
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    description: "Learn Javascript in English for beginners",
    link: "https://www.youtube.com/embed/jS4aFq5-91M?si=9vy7DTThdlaxveps",
  },
  {
    id: 3,
    title: "CSS Techniques",
    description: "Learn advanced CSS techniques to create stunning designs.",
    link: "https://www.youtube.com/embed/1Rs2ND1ryYc?si=Ljgsdj3ldV7q2O4z",
  },
  {
    id: 4,
    title: "HTML For Beginners",
    description: "Master the Language of the Web – Learn HTML from Scratch!.",
    link: "https://www.youtube.com/embed/HD13eq_Pmp8?si=jlPyhCtzTikiECGL",
  },
  {
    id: 5,
    title: "Python Programming for Beginners: Master the Basics!",
    description: "Learn Python from scratch and unlock the power of one of the most versatile programming languages. ",
    link: "https://www.youtube.com/embed/xk4_1vDrzzo?si=iiY8idNA21xjKW7p",
  },
  {
    id: 6,
    title: "Java Programming for Beginners: From Fundamentals to Applications",
    description: "Master the basics of Java programming and start building powerful applications. This course covers essential concepts to kickstart your coding journey and develop real-world software.",
    link: "https://www.youtube.com/embed/jS4aFq5-91M?si=9vy7DTThdlaxveps",
  },
  {
    id: 7,
    title: "Bootstrap 5: Build Responsive Websites with Ease",
    description: "Learn to create beautiful, mobile-first websites using Bootstrap 5. This course helps you build fast, responsive web pages with ease. (Available in Tamil)",
    link: "https://www.youtube.com/embed/EMbaXrkBv5U?si=86WEzcePL3sTc_ux",
  },
  {
    id: 8,
    title: "JavaScript for Beginners: Unleash the Power of Web Development",
    description: "Master the fundamentals of JavaScript and start building dynamic, interactive websites. This course will teach you essential programming concepts to create responsive and engaging web experiences. (Available in Tamil)",
    link: "https://www.youtube.com/embed/poo0BXryffI?si=xhN1zNkVqVzPv23N",
  },
  {
    id: 9,
    title: "Bootstrap 5: Build Responsive Websites with Ease",
    description: "Learn to create beautiful, mobile-first websites using Bootstrap 5. This course helps you build fast, responsive web pages with ease.",
    link: "https://www.youtube.com/embed/-qfEOE4vtxE?si=Qt9fxOFFCrJtTFjZ",
  },
  {
    id: 10,
    title: "Frontend Development Tutorial IN Tamil",
    description: "Learn Frontend Development with JavaScript For Beginner with Project",
    link: "https://www.youtube.com/embed/7dSJubxFWv0?si=r0eHF8V9iWqJJSwK://www.youtube.com/embed/jS4aFq5-91M?si=9vy7DTThdlaxveps",
  },
  {
    id: 11,
    title: "Prompt Engineering : Crafting AI-Driven Solutions",
    description: "Learn the art of prompt engineering to unlock the full potential of AI tools like ChatGPT. This course will teach you how to design effective prompts, optimize AI outputs, and solve real-world problems with precision.Learn advanced CSS techniques to create stunning designs.",
    link: "https://www.youtube.com/embed/_ZvnD73m40o?si=MA4MqL-9QOAcUIAu",
  },
  {
    id: 12,
    title: "Python Programming for Beginners: Master the Basics!",
    description: "Learn Python from scratch and unlock the power of one of the most versatile programming languages.",
    link: "https://www.youtube.com/embed/m67-bOpOoPU?si=zyXrAO5Yz80Mvv9Z",
  },
  {
    id: 13,
    title: "C++ Programming: Build Strong Foundations in Coding",
    description: "Master C++, the language that powers modern applications, games, and systems. This course covers core concepts like OOP, data structures, and algorithms to kickstart your programming journey. ",
    link: "https://www.youtube.com/embed/MhYECGUzdA4?si=8tErZZ3QtVtdXmJu",
  },
  {
    id: 14,
    title: "TypeScript Essentials: Supercharge Your JavaScript Skills",
    description: "Learn TypeScript to write cleaner, scalable, and error-free code. This course will guide you through advanced typing, interfaces, and modern JavaScript practices for building robust applications.",
    link: "https://www.youtube.com/embed/d56mG7DezGs?si=WpHjI3atNk825IqU",
  },
  {
    id: 15,
    title: "CSS Full Course In Tamil",
    description: "Learn advanced CSS techniques to create stunning designs. (Available in Tamil)",
    link: "https://www.youtube.com/embed/l0BTo4VGVVs?si=ltoeuX6Bg9J4xNrs",
  },
  {
    id: 16,
    title: "HTML Basics: Build the Backbone of the Web",
    description: "Learn HTML, the foundation of all websites, and create well-structured, responsive web pages from scratch. This course is perfect for beginners to start their web development journey. (Available in Tamil)",
    link: "https://www.youtube.com/embed/3jkub2c0kLA?si=gwROFX4NYMNJxSOC",
  },
  {
    id: 17,
    title: "PHP for Beginners: Dynamic Web Development Made Easy",
    description: "Master PHP to build dynamic, data-driven websites and backend systems. This course covers everything from the basics to advanced concepts, empowering you to create powerful web applications. ",
    link: "https://www.youtube.com/embed/BUCiSSyIGGU?si=DNceCtnm25cLKq6P",
  },
  {
    id: 18,
    title: "SQL Mastery: Manage and Query Databases Like a Pro",
    description: "Learn SQL to efficiently manage, query, and analyze data in relational databases. This course is ideal for building a strong foundation in database management and data manipulation.",
    link: "https://www.youtube.com/embed/HXV3zeQKqGY?si=iMAyDoLamEs2PWjI",
  },
  {
    id: 19,
    title: "Python Beginners Projects",
    description: "Build projects with python for beginners ",
    link: "https://www.youtube.com/embed/pdy3nh1tn6I?si=ZMzbPbgKCGs59748",
  },
  {
    id: 20,
    title: "Web Development Coding Bootcamp. Build Full-Stack Projects.",
    description: "React.js Full Stack Development, HTML CSS JavaScript Node.js MongoDB",
    link: "https://www.youtube.com/embed/MDZC8VDZnV8?si=dofh72wrj0uHXp67",
  },
  {
    id: 21,
    title: "React Native ",
    description: "React Native is a JavaScript framework for building mobile applications that run on both iOS and Android using a single codebase. It enables fast development with reusable components and a native-like user experience. ",
    link: "https://www.youtube.com/embed/sm5Y7Vtuihg?si=SGuKn7qbW3KTRtmn",
  },
  {
    id: 22,
    title: "Build 25 React Projects – Tutorial",
    description: "Master React by building 25 different projects. If you follow along, you'll be ready to interview for a job as a React developer.",
    link: "https://www.youtube.com/embed/5ZdHfJVAY-s?si=VXV1HQdEPAu84mkq",
  },
  {
    id: 23,
    title: "MongoDB Tutorial in Tamil",
    description: "In this detailed course, you'll learn everything from MongoDB fundamentals to advanced features. Starting with an introduction to MongoDB and its advantages over MySQL, you'll quickly move on to installing and setting up MongoDB, running commands, and performing CRUD operations. Explore document creation, querying, updating, and deletion, as well as managing collections and using MongoDB Compass. ",
    link: "https://www.youtube.com/embed/Svo-tPQ4GGU?si=t4kjO_8Sg32FthjG",
  },
  {
    id: 24,
    title: "Generative AI Full Course",
    description: "Learn about generative models and different frameworks, investigating the production of text and visual material produced by artificial intelligence.",
    link: "https://www.youtube.com/embed/mEsleV16qdo?si=Ea6ZX-BjbrFbXj4w",
  },
];

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
// Replace with the actual logged-in user's ID

  const video = videos.find((video) => video.id === parseInt(id));

  

  if (!video) {
    return (
      <div className="video-page d-flex align-items-center justify-content-center vh-100">
        <h2>Video not found!</h2>
      </div>
    );
  }

  return (
    <div className="video-page container video py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="video-container shadow-sm p-4 rounded bg-white">
            <h2 className="video-title text-center mb-4">{video.title}</h2>
            <div className="ratio ratio-16x9">
              <iframe
                className="video-frame rounded"
                src={video.link}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-description mt-3 text-secondary">{video.description}</p>
            <div className="d-flex flex-wrap justify-content-between align-items-center mt-4 gap-2">
              <button className="btn btn-outline-primary" onClick={() => navigate("/")}>
                Back to Home
              </button>
              <Link to="/quizzes" className="btn btn-secondary">
                Go to Quizzes
              </Link>
              <Link to="/interview-questions" className="btn btn-secondary">
                Go to Interview Questions
              </Link>
              <button className="btn btn-primary" onClick={() => navigate("/coursepage")}>
              Back to Videos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;