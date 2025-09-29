import './App.css'
import { basics, works, projects, skills, education} from './information/example-data.json';
import { Icons } from './components/icons';
import { formatProfileUrl, showRedirectionButton } from './utils/helpers.js';

function App() {

  return (
    <main>
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
                  { showRedirectionButton(profile.data) ? <Icons.Redirect width={18} height={18}/> : ''}
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

        <ul className='item-list'>
            { works.map(({company, position, summary, startDate, endDate }) => (
              <li className='item' key={company}>
                  <article>
                    <header className='header-item '>
                      <h4 className='item-title'>{company} - <span className='item-subtitle'>{position} </span></h4>
                      <span className='item-date'>{startDate} - {endDate}</span>
                    </header>

                    <p className='item-content'>
                      {summary}
                    </p>
                  </article>
              </li>
            ))}
          </ul>
      </section>

      <section id='education' className='sections'>
          <div>
            <h2 className='section-title'>
              Education
            </h2>
          </div>

          <ul className='item-list'>
            { education.map(({institution, area, startDate, endDate }) => (
              <li className='item' key={institution}>
                  <article>
                    <header className='header-item'>
                      <h4 className='item-title'>{institution}</h4>
                      <span className='item-date'>{startDate} - {endDate}</span>
                    </header>

                    <p className='item-subtitle'>
                      {area}
                    </p>
                  </article>
              </li>
            ))}
          </ul>
      </section>

      <section id='projects' className='sections'>
        <header>
          <h2>
            Projects
          </h2>
        </header>
        

        <ul className='item-list'>
        { projects.map(({ name, description, skills, url }) => (
              <li className='item' key={name}>
                  <article>
                    <header className='header-item with-link'>
                      <h4 className='item-title'> 
                        {name} 
                      </h4> 
                      { url && <a href={url} target="_blank" rel="noopener noreferrer"><Icons.Redirect width={18} height={18}/></a>}
                    </header>

                    <p className='item-content'>
                      {description}
                    </p>

                    <div className='skills-container'>
                      { skills.map((skill) => {
                        return <span key={skill} className='skills'> {skill} </span>
                      })}
                    </div>
                  </article>
              </li>
            ))}
        </ul>
      </section>

      <section className='sections'>
        <h2 className='section-title'>
          Skills
        </h2>

        <ul className='skills-container'>
          { skills.map((skill) => {
            return <li key={skill} className='skills'> {skill} </li>
          })}
        </ul>
      </section>
    </main>
  )
}

export default App