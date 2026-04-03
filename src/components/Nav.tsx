import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

export const Nav = () => {
  return (
    <nav className="flex items-center sm:justify-start justify-around gap-4 sm:gap-12 w-full py-8 fixed bg-white">
        <a href='https://www.linkedin.com/in/manishambre5/'><FaLinkedin className='w-8 h-8' /></a>
        <a href='https://github.com/manishambre5'><FaGithub className='w-8 h-8' /></a>
        <a href='mailto:manishambre5@gmail.com'><FaEnvelope className='w-8 h-8' /></a>
        <a href="https://github.com/manishambre5/manishambre5.github.io" className="inline-flex text-lg sm:text-xl">Source Code{<LuArrowUpRight />}</a>
    </nav>
  )
}