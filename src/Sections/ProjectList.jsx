import React from 'react'
import { Projects } from '../Data/ProjectsData';

const ProjectList = () => {

  return (
    <section className='projects' id='projects'>
      <h2>Projects</h2>

      <ul>
        {Projects.map((project, index)=> (
            <li key={index} className='project-card'>
              <p className='project-title'>{project.title}</p>

              <p className='project-desc'>{project.description}</p>

              <p className='project-tech'>
                
                <strong>Tech:</strong> {project.tech}
                
                </p>

              <div className='project-links'>

              <a 
              href={project.live}
              target='_blank'
              rel='noopener noreferrer'
              >
              Live
              </a>
              {"|"}

              <a 
              href={project.GitHub}
              target='_blank'
              rel='noopener noreferrer'
              >
               GitHub
              </a>
              </div>

              
              </li>
        ))}
      </ul>
    </section>
    
  )
}

export default ProjectList;