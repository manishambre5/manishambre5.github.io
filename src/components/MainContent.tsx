import { LuChevronRight, LuArrowUpRight } from 'react-icons/lu';
import projects from '../assets/projects';
import { useState } from 'react';

export const MainContent = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2 py-4 cursor-default font-primary">
        <h2 className='uppercase text-slate-800 font-semibold'>Projects</h2>
        <div className='flex flex-col gap-12'>
        {projects.map((project, index) => (
            <article key={index} className="flex flex-col gap-2 py-4">
                <h2 className="text-2xl underline hover:text-sky-600 cursor-pointer flex gap-2 items-center w-fit" onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                    }><LuChevronRight
                    className={`shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                    }`}/>{project.title}
                </h2>

                <section className="flex gap-4">
                {project.github && (
                    <a className="inline-flex items-center gap-1" href={project.github}>
                    GitHub <LuArrowUpRight />
                    </a>
                )}
                {project.viewlive && (
                    <a className="inline-flex items-center gap-1" href={project.viewlive}>
                    View Live <LuArrowUpRight />
                    </a>
                )}
                </section>

                <div
                className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
                >
                <h3>{project.subtitle}</h3>

                <ul className="flex gap-2 flex-wrap">
                    {project.techstack.map((tech, i) => (
                    <li
                        key={i}
                        className="bg-slate-900 text-slate-100 px-1 text-sm font-mono"
                    >
                        {tech}
                    </li>
                    ))}
                </ul>
                </div>
            </article>
            ))}
        </div>
    </div>
  )
}