import './App.css'
import { basics, works, projects, skills } from './information/example-data.json'


function App() {

  return (
    <main>
      <header id='header'>
        <h1>{basics.name}</h1>
        <span className='label'>{basics.label} { basics.location.city ? `from ${basics.location.city}, ${basics.location.country}` : '' }</span>
      </header>

      <div id='basics' className='sections'>
        <h2 className='section-title'>
          About
        </h2>
        <div>
          <p>{basics.summary}</p>
        </div>
      </div>

      <nav aria-label="Contact" className="sections">
        <ul className="contact-list">
          {basics.profiles.map((profile) => (
            <li key={profile.network}>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="username">{profile.username}</span>
                <span className="network">
                  {profile.network}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="external-link"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                    <path d="M11 13l9 -9" />
                    <path d="M15 4h5v5" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>


      <div id='experience' className='sections'>
        <div>
          <h2 className='section-title'>
            Experience
          </h2>
        </div>

        <ul>
          { works.map((work) => (
            <li key={work.company}>
             <div>
                <div>
                  <h4>{work.company}</h4>
                  <span>{work.position}</span>
                </div>
                
                <div>
                  {work.startDate} - {work.endDate}
                </div>
              </div> 

              <div>
                {work.summary}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div id='projects' className='sections'>
        <div>
          <h3 className='section-title'>
            Projects
          </h3>
          
          <ul>
            { projects.map((project) => (
              <li key={project.name}>
                <div>
                  <h4>{project.name}</h4>
                  <span>{project.description}</span>
                </div>

                <div>
                  {project.skills.map((skill) => (
                    <span key={skill}> {skill} </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id='skills' className='sections'>
        <h4 className='section-title'>Skills</h4>
        <div>
          { skills.map((skill) => (
            <span key={skill}> {skill} </span>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App