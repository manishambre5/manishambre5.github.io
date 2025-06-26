import { FaArrowUp } from 'react-icons/fa6';
import projects from '../assets/projects'
import Footer from './Footer';

function Projects () {
    return (
        <section id='Projects' className='shrink-0 h-auto flex flex-col gap-2 md:gap-4 snap-start px-4 md:px-2 justify-start items-center'>
            <header className="shrink-0">
                <h1 className='font-mono text-center'>PROJECTS</h1>
            </header>
            <section className="shrink-0 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {projects.map((project) => (
                    <article className="card flex flex-col gap-2 p-4 w-full break-inside-avoid">
                        <h2 className="text-2xl font-bold font-mono">{project.title}</h2>
                        <h3 className="text-xl font-primary">{project.subtitle}</h3>
                        <ul className="flex gap-2 sm:gap-4 flex-wrap justify-start">
                            {project.techstack.map((tech, index) => (
                                <li key={index} className="keyword">{tech}</li>
                            ))}
                        </ul>
                        <section className='flex gap-2 items-end justify-end'>
                            {project.github && <a href={project.github}><button>GitHub</button></a>}
                            {project.viewlive && <a href={project.viewlive}><button>View Live</button></a>}
                        </section>
                    </article>
                ))}
            </section>
            <FaArrowUp className='shrink-0 text-3xl go' />
            <Footer />
        </section>
    );
}

export default Projects;