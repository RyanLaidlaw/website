import React from 'react';
import { Helmet } from 'react-helmet';
import './css/Education.css';

function Education() {
  const courses = [
    { courseTitle: 'Object-Oriented Design and Development', description: <ul>
      <li>Developed a multi-player tank application in Java.</li>
      <li>Explored many different Object-Oriented design patterns for more cohesive, less coupled code.</li>
    </ul>},
    { courseTitle: 'Introduction to the Theory of Computation', description: <ul>
      <li>Strong emphasis on proofs of correctness.</li>
      <li>Finite automata, context-free languages, pushdown automata.</li>
    </ul>},
    { courseTitle: 'Computer Organization and System-Level Programming', description: <ul>
      <li>Developed a strong understanding of registers, isntruction sets, addressing, assemblers, concurrency and memory management.</li>
      <li>Extensive projects written in the C programming language.</li>
    </ul> },
    { courseTitle: 'Introduction to Software Engineering', description: <ul>
      <li>Focused on software development practices (such as Agile), cloud infrastructure, virtual machines and containers.</li>
      <li>Created a web application using Python, HTML, CSS, Flask and Jinja for a dynamic frontend and MongoDB for a JSON-like database.</li>
    </ul> },
    { courseTitle: 'Data Structures and Algorithms', description: <ul>
      <li>Emphazied the implementation, mechanics and relative efficiencies of data structures in Java.</li>
      <li>Graphs, heaps, hash tables, AVL trees and various sorting algorithms.</li>
      </ul> }
  ];

  return (
    <div>
      <Helmet>
        <title>Education - Ryan Laidlaw</title>
      </Helmet>
      <div className="header">
      <img src={`${process.env.PUBLIC_URL}/unhlogo.png`} alt="UNH Logo" className="unh-logo" />
        <div className="uni-degree-container">
          <h1 className='uni-name'>The University of New Hampshire</h1>
          <h3 className='degree'>
            Bachelor of Science, Computer Science<br />
            Expected Graduation: May 2026<br />
            GPA: 3.68
          </h3>
        </div>
      </div>
      <h2 className='coursework-title'>Notable Coursework</h2>
      <div className='courses'>
        {courses.map((course, index) => (
          <div key={index} className={`course-item ${index % 2 === 0 ? 'even-row-course' : 'odd-row-course'}`}>
            <h3 className='course-name'>{course.courseTitle}</h3>
            <p className='course-description'>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
