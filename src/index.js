import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/HomePage';
import reportWebVitals from './reportWebVitals';
import Bio from './Components/Bio';
import Skills from'./Components/skills'
import projects from'./Components/Project'
import HomePage from './Components/HomePage';
import Projects from './Components/Project';
import Contact from './Components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Projects />
    <Contact />
    <Skills />
    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
