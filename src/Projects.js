import React from 'react';
import { Helmet } from 'react-helmet'
import './css/Projects.css'

function Projects() {

  const schoolProjects = [
    {projectName: "BulletZone", class_name: "CS619 - Object-Oriented Design and Development", 
    projectDescription: <ul>
      <li>Multi-player tank game.</li>
      <li>Written in Java using AndroidStudio.</li>
      <li>Focus on Object-Oriented patterns and designs.</li>
      <li>Developed on the server side of the application, handling game logic using HTTP requests from the client side.</li>
    </ul>},
    {projectName: "Virtual Memory Simulation", class_name: "CS520 - Computer Organization and System-Level Programming",
     projectDescription: <ul>
      <li>Written in C.</li>
      <li>Implemented Round Robin and Least Recently Used replacement algorithms for memory paging.</li>
      <li>Created page table structure as well as TLB structure for improved performance.</li>
     </ul>},
    {projectName: "Calendar Application", class_name: "CS518 - Introduction to Software Engineering", 
    projectDescription: <ul>
      <li>Developed a calendar application, allowing users to create and track events.</li>
      <li>Written in Python using the Flask and Jinja frameworks to create dynamic HTML web pages.</li>
      <li>Utilized MongoDB in the backend to store user information.</li>
    </ul>},
    {projectName: "More to come..."}
  ]

  const personalProjects = [
    {projectName: "Minesweeper + Minesweeper Solver (In Progress)",
     projectDescription: <ul>
      <li>Created using Python's Pygame library.</li>
      <li>Features a fully functioning MineSweeper game, but an in-progress solver.</li>
     </ul>, 
     link: "https://github.com/RyanLaidlaw/Minesweeper"},
    {projectName: "Personal Website", 
    projectDescription: <ul>
      <li>Built with JavaScript, HTML and CSS and runs on Node.js.</li>
      <li>Deployed with GitHub Pages.</li>
      <li>Created to be an extension of my resume, this is where I keep a running list of my favorite projects and accomplishments.</li>
    </ul>, 
    link: "https://github.com/RyanLaidlaw/website"},
    {projectName: "Tic-Tac-Toe", 
    projectDescription:<ul>
      <li>Meant to be a basic introduction to Pygame.</li>
    </ul>, 
    link: "https://github.com/RyanLaidlaw/TicTacToe"},
    {projectName: "More to come..."}
  ]

  return (
    <div>
        <Helmet>
            <title>Projects - Ryan Laidlaw</title>
        </Helmet>
        <div>
            <h1>Notable School Projects</h1>
        </div>
        <div className='school-projects'>
        {schoolProjects.map((project, index) => (
            <div
            key={index}
            className={`school-item ${index % 2 === 0 ? 'even-row' : 'odd-row'} ${project.projectName === "More to come..." ? 'more-to-come' : ''}`}
            >
            <h3 className={`project-name ${project.projectName === "More to come..." ? 'more-to-come-font' : ''}`}>
              {project.projectName}
            </h3>
              <p className='class_name'>{project.class_name}</p>
              <p className='project-description'>{project.projectDescription}</p>
            </div>
        ))}
        </div>
        <div>
          <h1 className='personal-projects-title'>Personal Projects</h1>
        </div>
        <div className='personal-projects'>
        {personalProjects.map((project, index) => (
          <div
          key={index}
          className={`personal-item ${index % 2 === 0 ? 'even-row' : 'odd-row'} ${project.projectName === "More to come..." ? 'more-to-come' : ''}`}
          >
          <h3 className={`personal-project-name ${project.projectName === "More to come..." ? 'more-to-come-font' : ''}`}>
            {project.projectName}
          </h3>
          <p className='personal-project-description'>{project.projectDescription}</p>
          {project.link && (
            <p className='personal-project-link'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
            </p>
          )}
         </div>
        ))}
        </div>
    </div>
  );
}

export default Projects;
