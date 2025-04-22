import projects from '../assets/projects'

function Projects (props) {
    return (
        <section id='Projects' className='h-auto flex flex-col gap-2 md:gap-4 lg:h-screen snap-start sm:scroll-mt-20 px-4 md:px-2 justify-start -z-10'>
            <header className="">
                <h1 className='font-mono text-center'>PROJECTS</h1>
            </header>
            <section className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {projects.map((project) => (
                    <article className="card flex flex-col gap-2 p-4 w-full break-inside-avoid">
                        <h2 className="text-2xl font-bold font-mono">{project.title}</h2>
                        <h3 className="text-xl font-primary">{project.subtitle}</h3>
                        <ul className="flex gap-2 sm:gap-4 flex-wrap justify-center md:justify-start">
                            {project.techstack.map((tech, index) => (
                                <li key={index} className="keyword">{tech}</li>
                            ))}
                        </ul>
                        <section className='flex gap-2 items-end justify-end'>
                            <a href={project.github}><button>GitHub</button></a>
                            <a href={project.viewlive}><button>View Live</button></a>
                        </section>
                    </article>
                ))}
            </section>
        </section>
    );
}

export default Projects;