import { FaPython, FaReact } from "react-icons/fa6";

function Skills() {
    return (
        <section id='Skills' className='h-[calc(100vh-5rem)] flex flex-col gap-2 md:gap-4 snap-start sm:scroll-mt-20 px-4 md:px-2 bg-black justify-center mb-20 sm:mb-0 pb-20 -z-10'>
            <header className="">
                <h1 className='font-mono text-white text-center'>SKILLS</h1>
            </header>
            <section className="grid md:grid-flow-col gap-4 items-center justify-center">
                <article className='flex flex-col justify-start items-center md:items-start gap-2 md:gap-4 bg-white font-mono h-full max-w-lg p-4 inset-shadow'>
                    <header className="flex gap-2 md:gap-4 justify-start items-center">
                        <FaReact className="logo text-3xl" />
                        <h2 className="sm:text-2xl">Full Stack Web Development</h2>
                    </header>
                    <h3 className="font-bold">Tech Stack</h3>
                    <ul className="flex gap-2 sm:gap-4 flex-wrap justify-center md:justify-start">
                        <li className="keyword">React JS</li>
                        <li className="keyword">TailwindCSS</li>
                        <li className="keyword">HTML5</li>
                        <li className="keyword">CSS3</li>
                        <li className="keyword">JavaScript</li>
                        <li className="keyword">Python</li>
                        <li className="keyword">TypeScript</li>
                        <li className="keyword">Vue.js</li>
                        <li className="keyword">Node.js</li>
                        <li className="keyword">REST API</li>
                        <li className="keyword">Flask</li>
                        <li className="keyword">Django</li>
                        <li className="keyword">PHP</li>
                        <li className="keyword">Git</li>
                        <li className="keyword">MySQL</li>
                        <li className="keyword">MongoDB</li>
                        <li className="keyword">PostgreSQL</li>
                    </ul>
                </article>
                <article className='flex flex-col justify-start items-center md:items-start gap-2 md:gap-4 bg-white font-mono h-full max-w-lg p-4 inset-shadow'>
                    <header className="flex gap-2 md:gap-4 justify-start items-center">
                        <FaPython className="logo text-3xl" />
                        <h2 className="sm:text-2xl">Data Science & Analytics</h2>
                    </header>
                    <h3 className="font-bold">Tech Stack</h3>
                    <ul className="flex gap-2 sm:gap-4 flex-wrap justify-center md:justify-start">
                        <li className="keyword">Pandas</li>
                        <li className="keyword">Matplotlib</li>
                        <li className="keyword">Scikit-learn</li>
                        <li className="keyword">PyTorch</li>
                        <li className="keyword">TensorFlow</li>
                        <li className="keyword">NLTK</li>
                        <li className="keyword">NumPy</li>
                        <li className="keyword">BeautifulSoup</li>
                        <li className="keyword">SciPy</li>
                        <li className="keyword">SQL</li>
                        <li className="keyword">Power BI</li>
                        <li className="keyword">R</li>
                        <li className="keyword">C</li>
                        <li className="keyword">Linux</li>
                    </ul>
                </article>
            </section>
        </section>
    );
}

export default Skills;