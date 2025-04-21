import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'

function Nav () {
    return (
        <nav className='w-full h-20 flex flex-nowrap gap-4 items-center justify-between fixed p-2 bg-white text-3xl sm:text-4xl z-10'>
            <aside className='shrink-0 flex gap-2 sm:gap-7'>
                <a href='https://www.linkedin.com/in/manishambre5/'><FaLinkedin className='' /></a>
                <a href='https://github.com/manishambre5'><FaGithub className='' /></a>
                <a href='mailto:manishambre5@gmail.com'><FaEnvelope className='' /></a>
            </aside>
            <section className='shrink-0 flex gap-2 sm:gap-7'>
                <a href='#AboutMe'>About Me</a>
                <a href='#Skills'>Skills</a>
                <a href='#Projects'>Projects</a>
            </section>
        </nav>
    )
}

export default Nav;