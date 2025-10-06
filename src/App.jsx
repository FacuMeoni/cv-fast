import './App.css'
import { Icons } from './components/icons';
import { formatProfileUrl, showRedirectionButton } from './utils/helpers.js';
import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';


const useUserDataStore = create(
  persist(
    combine(
      { 
        personal: {
          name: "Juan Pérez",
          label: "Frontend Developer",
          summary: "+3 years of experience in web development. I'm a Fullstack developer with solid knowledge in JavaScript, HTML, CSS, TailwindCSS, React, Astro, NextJS, Redux, NodeJS, Express, Java, Spring Boot, AWS, SQL, MySQL, Sequelize, Docker, Git, GitHub, C#, and .NET. Proactive person, with a strong desire to learn and grow in the IT industry.",
          image: "",
        },
        contact: [
          { network: "Phone", data: "+54 2364414166" },
          { network: "Mail", data: "meonifacu@gmail.com" },
          { network: "LinkedIn", data: "https://www.linkedin.com/in/facundo-meoni-fullstack/" },
          { network: "Github", data: "https://github.com/juanperez" },
          { network: "X", data: "https://x.com/Faacumeoni1" },
          { network: "PersonalWeb", data: "https://facumeoni-webdev.netlify.app/" }
        ],
        location: {
          address: "",
          postalCode: "",
          city: "Junin, Buenos Aires",
          countryCode: "",
          country: "Argentina"
        },
        experience: [
          {
            company: "Tech Solutions SA", 
            position: "Senior Frontend Developer",
            url: "https://techsolutions.com",
            startDate: "2018/01/01",
            endDate: "Present",
            summary: "Liderazgo técnico de un equipo de 5 desarrolladores en el diseño y construcción de aplicaciones web a escala usando React y Node.js. Definí estándares de código, realicé revisiones de PRs y mentoría, y trabajé con diseño y producto para iterar con métricas. Enfocado en mejorar tiempos de carga, accesibilidad y mantenibilidad mediante arquitectura de componentes y separación de responsabilidades.",
            highlights: [
              "Implementación de arquitectura basada en componentes reutilizables",
              "Mejora del rendimiento en un 40% de la aplicación principal",
              "Mentoría de desarrolladores junior"
            ]
          },
          {
            company: "Web Studio",
            position: "Frontend Developer",
            url: "https://webstudio.com",
            startDate: "2013/03/01",
            endDate: "2017/12/01",
            summary: "Desarrollo de interfaces responsivas y accesibles en múltiples proyectos, integrando backends REST y optimizando UX. Participé en la migración progresiva de jQuery a React, adopción de patrones modernos (hooks, lifting state) y mejores prácticas de rendimiento y SEO, cuidando la semántica HTML/CSS y la escalabilidad del código.",
            highlights: [
              "Migración de jQuery a React",
              "Optimización de SEO y rendimiento de sitios web"
            ]
          }
        ],
        education: [
          { 
            institution: "Universidad de Buenos Aires", 
            area: "Ingeniería en Sistemas", 
            studyType: "Licenciatura", 
            startDate: "2008/03/01", 
            endDate: "2013/12/01", 
            score: "9.0", 
            skills: ["Desarrollo Web", "Bases de Datos", "Inteligencia Artificial"] 
          },   
        ],
        skills: [],
        projects: [
          { name: "", isActive: false, url: "", url2: "", description: "", skills: [] },
        ], }, 
        (set, get) => {
          return { 
           
          }
        }
    ), { name: 'user-store' }
    )
)

function Template({ personal, contact, location, experience, education, skills, projects, updateName }) {
  
  return(
      <div style={{width: '100'}}>
        <header id='header' className='sections'>
          <div>
            <h1 onClick={() => updateName('Facundo Meoni')}>{personal.name}</h1>
            <span className='label'>{personal.label} { location.city ? `from ${location.city}, ${location.country}.` : '' } </span>
          </div>
          <nav aria-label="Contact" className="sections">
            <ul className="contact-list">
              { contact.map(({network, data}) => {
                const Icon = Icons[network];
                return (
                <li key={network}>
                  <a
                    href={data}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                  {Icon && <Icon width={20} height={20}/>}
                    <span className="username">{formatProfileUrl(data)}</span>
                    { showRedirectionButton(data) ? <Icons.Redirect width={18} height={18}/> : ''}
                  </a>
                </li>
                )
              })}
            </ul>
          </nav>
        </header>

        <section id='personal' className='sections'>
          <h2 className='section-title'>
            About
          </h2>
          <div>
            <p className='text'> {personal.summary} </p>
          </div>
        </section>

        <section id='experience' className='sections'>
          <div>
            <h2 className='section-title'>
              Experience
            </h2>
          </div>

          <ul className='item-list'>
              { experience.map(({company, position, summary, startDate, endDate }) => (
                <li className='item' key={company}>
                    <article>
                      <header className='header-item '>
                      <h4 className='item-title'>
                        {company && (
                          <span>
                            {company} - <span className='item-subtitle'>{position}</span>
                          </span>
                        )}
                      </h4>
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
          <div>
            <h2 className='section-title'>
              Projects
            </h2>
          </div>
          

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
      </div>
  )
}

function App() {
  const { personal, contact, social, location, experience, education, skills, projects, updateName } = useUserDataStore(state => state);

  return (
    <main>
      <Template 
        personal={personal}
        contact={contact}
        social={social}
        location={location}
        experience={experience}
        education={education}
        skills={skills}
        projects={projects}
        updateName={updateName}
      />
    </main>
  )
}

export default App