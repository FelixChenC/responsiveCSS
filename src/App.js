import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <a href="#" className="logo">
          logo
        </a>
        <ul className="nav_item">
          <li>
            <a href="#Courses">Courses</a>
          </li>
          <li>
            <a href="#Professionals">Professionals</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="section-home">
        <div className="content">
          <h1 className="title">ABC Academy</h1>
          <h2 className="dec">
            A Bootcamp for who is ready to dive in the world of web development
          </h2>
        </div>
      </div>

      <div className="section-courses" id="Courses">
        <div className="content">
          <h1 className="dec">Learn More About Our Courses</h1>
          <h2 className="detial">
            There are many useful tools in different courses to help you build
            up your career to become a Professionals developer
          </h2>
          <img
            className="image"
            src="https://cdn.lynda.com/course/170427/170427-637251494437967118-16x9.jpg"
            alt="HTML"
          />
        </div>
      </div>

      <div className="section-prof" id="Professionals">
        <div className="content">
          <h1 className="dec">See Our Professionals</h1>
          <h2 className="detial">List of our Professionals</h2>
          <img
            className="image"
            src="https://cdn.lynda.com/course/570965/570965-637286209030430156-16x9.jpg"
            alt="prof"
          />
        </div>
      </div>

      <div className="section-contact" id="Contact">
        <div className="content">
          <h1 className="dec">Contact</h1>
          <h2 className="detial">
            Check out our social media or email to reach us
          </h2>
          <div className="social">
            <i className="fab fa-twitter-square"></i>
            <i class="fab fa-github-square"></i>
            <i class="fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
