import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

export const Nav = () => {
  return (
    <nav className="flex items-center sm:justify-start sm:mx-4 justify-around gap-2 sm:gap-12 py-6 sm:py-8 fixed bg-white z-10 border-b-4 border-slate-50 top-0 left-0 right-0 lg:left-16 lg:right-16 xl:left-48 xl:right-48">
        <a href='https://www.linkedin.com/in/manishambre5/'><FaLinkedin className='w-8 h-8' /></a>
        <a href='https://github.com/manishambre5'><FaGithub className='w-8 h-8' /></a>
        <a href='mailto:manishambre5@gmail.com'><FaEnvelope className='w-8 h-8' /></a>
        <a href="https://github.com/manishambre5/manishambre5.github.io" className="inline-flex sm:text-xl">Source Code{<LuArrowUpRight />}</a>
    </nav>
  )
}