
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar"; // Import your Navbar component
import Quizzes from "./components/Quizzes";
import InterviewQuestions from "./components/InterviewQuestions";
import VideoPage from "./components/VideoPage";
import SearchResultsPage from "./components/SearchResultsPage";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CoursePage from "./components/CoursePage";
import Layout from './components/Layout';
import InterviewVideoPage from "./components/InterviewVideoPage";


const App = () => {
 

  const LocationBasedNavbar = () => {
    const location = useLocation();

    // Show the Navbar only on `/home`, `/quizzes`, and `/interview-questions` routes
    const showNavbar = ["/home", "/quizzes", "/interview-questions", "/coursepage"].includes(location.pathname);

    return showNavbar && <Navbar />;


  };

  return (
    <Router>
      <Layout>
        <LocationBasedNavbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/quizzes" element={<Quizzes />} />

          <Route path="/interview-questions" element={<InterviewQuestions />} />
          <Route path="/interview-video/:id" element={<InterviewVideoPage />} />

          <Route path="/coursepage" element={<CoursePage />} />

          <Route path="/video/:id" element={<VideoPage />} />

          <Route path="/search" element={<SearchResultsPage />} /> {/* New route */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
