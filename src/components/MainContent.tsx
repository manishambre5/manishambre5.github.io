import { LuEye, LuPlus, LuMinus, LuEyeClosed, LuList, LuGrid2X2, LuRows3 } from 'react-icons/lu';
import projects from '../assets/projects';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

type ViewMode = "list" | "grid";

export const MainContent = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [view, setView] = useState<ViewMode>("list");

  return (
    <div className="mx-4 flex flex-col gap-2 py-2 cursor-default font-primary">
        <header className='flex items-center gap-4 text-slate-400'>

            {/* Layout view toggle */}
            <div className="flex gap-4 items-center justify-center" onClick={() => setView(prev => (prev === "list" ? "grid" : "list"))}>
                <LuRows3
                    className={`transition-all duration-300 size-8 ${ view === "list" ? "text-sky-600" : "hover:text-sky-600" }`}
                />
                <LuGrid2X2
                    className={`transition-all duration-300 size-8 ${ view === "grid" ? "text-sky-600" : "hover:text-sky-600" }`}
                />
            </div>

            <h2 className='text-2xl uppercase font-semibold tracking-widest'>Projects</h2>

        </header>

        {view === "list" ? (
            <main className='flex flex-col gap-2'>
            {projects.map((project, index) => (
                <article key={index} className="flex flex-col gap-2 py-2 border-b border-slate-400">

                    {/* Accordion trigger */}
                    <div className="text-4xl flex gap-2 justify-between items-start w-full">
                        <h2
                        className={`hover:text-sky-600 cursor-pointer max-w-4/5 ${openIndex === index ? "text-sky-600" : "text-slate-900"}`}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            {project.title}
                        </h2>
                        <div className='flex gap-4 items-center'>
                            {project.github && (
                                <a className="inline-flex items-center gap-1" href={project.github}>
                                <FaGithub className='w-8 h-8' />
                                </a>
                            )}
                            {project.viewlive && (
                                <a className="relative size-8 inline-flex items-center gap-1" href={project.viewlive}>
                                    <LuEye className='absolute animate-eye-close size-full' />
                                    <LuEyeClosed className='absolute animate-eye-open size-full' />
                                </a>
                            )}
                            <div className="relative w-10 h-10 text-white bg-sky-600 flex items-center justify-center rounded-full" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <LuPlus
                                    className={`absolute transition-all duration-300 size-full ${
                                    openIndex === index ? "opacity-0 -rotate-90" : "opacity-100"
                                    }`}
                                />
                                <LuMinus
                                    className={`absolute transition-all duration-300 size-full ${
                                    openIndex === index ? "opacity-100" : "opacity-0 rotate-90"
                                    }`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Accordion content */}
                    <div
                    className={`space-y-2 overflow-hidden transition-all duration-300 ${
                        openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                    >
                        <h3 className='text-xl'>{project.subtitle}</h3>

                        <ul className="flex gap-2 flex-wrap">
                            {project.techstack.map((tech, i) => (
                            <li
                                key={i}
                                className="bg-sky-600 text-slate-100 px-1 text-sm font-mono"
                            >
                                {tech}
                            </li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
            </main>


        ) : (

            
            <main className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                {projects.map((project, index) => (
                <article key={index} className={`flex flex-col items-center justify-center gap-2 p-2 border-2 md:border-4 border-slate-100 rounded-sm aspect-square size-full`}>

                    {/* Accordion trigger */}
                    <div className={`flex w-full gap-2 ${openIndex === index ? "text-xl justify-between items-center" : "text-xl lg:text-4xl sm:text-3xl justify-center items-center size-full flex-col"}`}>
                        <h2
                        className={`hover:text-sky-600 cursor-pointer max-w-4/5 ${openIndex === index ? "text-sky-600" : "text-center text-slate-900"}`}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            {project.title}
                        </h2>
                        <div className='flex gap-4'>
                            {project.github && (
                                <a className="inline-flex items-center gap-1" href={project.github}>
                                <FaGithub className='w-6 h-6' />
                                </a>
                            )}
                            {project.viewlive && (
                                <a className="relative size-6 inline-flex items-center gap-1" href={project.viewlive}>
                                    <LuEye className='absolute animate-eye-close size-full' />
                                    <LuEyeClosed className='absolute animate-eye-open size-full' />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Accordion content */}
                    <div
                    className={`space-y-2 overflow-hidden ${
                        openIndex === index ? "max-h-1/2 opacity-100 overflow-y-scroll" : "max-h-0 opacity-0"
                    }`}
                    >
                        <h3 className='text-sm'>{project.subtitle}</h3>

                        <ul className="flex gap-2 flex-wrap">
                            {project.techstack.map((tech, i) => (
                            <li
                                key={i}
                                className="bg-sky-600 text-slate-100 px-1 text-sm font-mono"
                            >
                                {tech}
                            </li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
            </main>
        )}
    </div>
  );
}