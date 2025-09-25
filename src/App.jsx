import './App.css'
import { basics, works, projects, skills } from './information/example-data.json';
import { Icons } from './components/icons';
import {formatProfileUrl, showRedirectionButton} from './utils/helpers.js';


function App() {

  return (
    <main>
      <div className='template-container'>
        <header id='header' className='sections'>
          <div>
            <h1>{basics.name}</h1>
            <span className='label'>{basics.label} { basics.location.city ? `from ${basics.location.city}, ${basics.location.country}` : '' }</span>
          </div>
          <nav aria-label="Contact" className="sections">
            <ul className="contact-list">
              { basics.contact.map((profile) => {
                const Icon = Icons[profile.network];
                return (
                <li key={profile.network}>
                  <a
                    href={profile.data}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                  {Icon && <Icon width={20} height={20}/>}
                    <span className="username">{formatProfileUrl(profile.data)}</span>
                    { showRedirectionButton(profile.data) }
                  </a>
                </li>
                )
              })}
            </ul>
          </nav>
        </header>

        <section id='basics' className='sections'>
          <h2 className='section-title'>
            About
          </h2>
          <div>
            <p className='text'> {basics.summary} </p>
          </div>
        </section>

        <section id='experience' className='sections'>
          <div>
            <h2 className='section-title'>
              Experience
            </h2>
          </div>

          <ul className='experience-list'>
            { works.map((work) => (
              <li key={work.company} className='experience-item'>
                <div className='item-experience-header'>
                  <div>
                    <h4>{work.company}</h4>
                    <span>{work.position}</span>
                  </div>
                  
                  <div>
                    {work.startDate} - {work.endDate}
                  </div>
                </div> 

                <p className='text'>
                  {work.summary}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id='projects' className='sections'>
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
        </section>

        <section id='skills' className='sections'>
          <h4 className='section-title'>Skills</h4>
          <div>
            { skills.map((skill) => (
              <span key={skill}> {skill} </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App