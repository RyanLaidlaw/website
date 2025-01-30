import React from 'react';
import { Helmet } from 'react-helmet';
import './css/Education.css';

function Education() {
  const courses = [
    { courseTitle: 'Computer Organization and System-Level Programming', description: 'Studied software/hardware interaction to understand data and program representation. A strong understanding of registers, instruction sets, addressing, assemblers, linkers, concurrency, memory hierarchy and management was developed through extensive projects in the C programming language.' },
    { courseTitle: 'Introduction to Software Engineering', description: 'Study of software development practices and processes including: software life cycle, system validation, cloud infrastructure, virtual machines and containers as well as fundamental security concepts. Used these concepts to work in a group to develop a web application using HTML and CSS along with the Jinja library for Python for a dynamic frontend, and a backend based in MongoDB.' },
    { courseTitle: 'Introduction to Cybersecurity', description: 'An introduction into the expansive world of cybersecurity, including topics such as authentication, authorization, auditing, and cryptography. Covered various kinds of network attacks, such as ransomware, viruses, worms, SQL injections, spoofing and social engineering.'},
    { courseTitle: 'Data Structures and Algorithms', description: 'Covered the mechanics, implementation and relative efficiencies of advanced data structures (AVL trees, heaps, hash tables) with Java. Discussed abstract data types (maps, priority queues and graphs) as well as sorting and graph algorithms.' },
    { courseTitle: 'Programming for Digital Systems', description: 'An introduction to the C programming language, with an emphasis on low-level operations, memory management, and debugging. This class strongly emphasized Boolean algebra, basic logic gates and number systems and conversions to create a strong foundation for low-level systems.' },
    { courseTitle: 'Introduction to IT', description: 'Provided fundamentals of Internet communications to understand the underlying technologies of the World Wide Web. Provided an introduction to HTML and CSS to create and publish a basic web page.' },
    { courseTitle: 'Introduction to Computer Science I and II', description: 'Both classes provide an introduction to algorithm development and analysis, data structures, and data abstraction through Python and Java, respectively.' }
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
