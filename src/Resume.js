import React from 'react';
import { Helmet } from 'react-helmet';
import './css/Resume.css';

function Resume() {
  const skills = [
    'Python, Java, C',
    'HTML/CSS',
    'JavaScript',
    'Version Control',
    'Backend Development',
    'DevOps'
  ];

  const tools = [
    'VS Code, JetBrains IDEs',
    'Bootstrap',
    'React, Node.js',
    'Git, Bitbucket, Jira',
    'MongoDB, Flask',
    'Docker, Azure'
  ];

  const workExperience = [
    { jobTitle: 'Non-Volatile Memory Express (NVMe) Test Developer', company: 'UNH InterOperability Laboratory', period: 'January 2024 - Present', 
    description: 'Working with other interns to leverage Agile methodologies to develop and upkeep Python and Bash testing scripts to be used by firmware engineers working for major tech companies worldwide. Providing professional level customer support to debug and solve issues found in legacy and newly released code to assist senior level engineers in continuing on their path to the NVMe Integrator\'s List.', 
    link: 'https://www.iol.unh.edu/' },

    { jobTitle: 'Crew Member', company: 'R&R Landscaping', period: 'June 2023 - June 2024', 
    description: 'Performed upkeep of existing landscaping by pruning, trimming, weeding, and mulching as the leader of a 2-3 man crew.' },

    { jobTitle: 'Courtesy Clerk', company: 'Shaws Supermarkets', period: 'November 2019 - June 2023',  
    description: "Customer service representative that worked directly with store patrons. Handled price corrections, returns, and customer check out."}
  ];

  return (
    <div>
      <Helmet>
        <title>Résumé - Ryan Laidlaw</title>
      </Helmet>
      <div className="contact">
        <div className="contact-info">
          <h1>Ryan Laidlaw</h1>
          <h2 className='contact_actual'>Contact</h2>
          <h3 className='contact_links'>
            <a href='https://www.linkedin.com/in/ryan-laidlaw-561751293/'>
              <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn-Logo" className="linkedin-logo" />
            </a>
            <a href='https://www.instagram.com/ryan.laidlaw2/'>
              <img src={`${process.env.PUBLIC_URL}/instagram.webp`} alt="Instagram Logo" className="instagram-logo" />
            </a>
            <a href='https://github.com/RyanLaidlaw'>
              <img src={`${process.env.PUBLIC_URL}/github.png`} alt="Git Hub Logo" className="github-logo" />
            </a>
          </h3>
        </div>
        <a
          href={`${process.env.PUBLIC_URL}/RyanLaidlawResume.pdf`}
          download
          className="download-button">
          Download PDF
        </a>
      </div>
      <div className='tables'>
        <div className='skills'>
          <h2>Competencies</h2>
          <table>
            <thead></thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{skill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='tools'>
          <h2>Core Utilities</h2>
          <table>
            <thead></thead>
            <tbody>
              {tools.map((tool, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{tool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h2 className='work-title'>Work Experience</h2>
      <div className='work-exp'>
        {workExperience.map((work, index) => (
          <div key={index} className={`work-item ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}>
            <h3 className='company-name'>{work.company}</h3>
            <h3 className='job-title'>{work.jobTitle}</h3>
            <h3 className='period'>{work.period}</h3>
            <p className='job-description'>{work.description}</p>
            {work.link && (
              <p className='job-link'>
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  {work.link}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
