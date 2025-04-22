import picture from '../assets/profile.jpg';

function Landing() {
    return (
        <section id='AboutMe' className='h-[calc(100vh-5rem)] mb-20 sm:mb-0 sm:mt-20 pb-20 sm:scroll-mt-20 flex flex-col gap-4 justify-center items-center px-4 md:px-2 snap-start -z-10'>
            <section className="">
                <h2 className='font-mono text-base sm:text-2xl lg:text-3xl'>Hi there! My name is</h2>
                <h1 className='font-me text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Manish Ambre</h1>
            </section>
            <section className='flex flex-row gap-4 items-start justify-center'>
                <picture className="overflow-clip shrink-0">
                    <img src={picture} className='w-20 md:h-48 md:w-40 profile border-4 object-cover object-bottom' />
                </picture>
                <blockquote className="font-mono text-base sm:text-lg lg:text-2xl sm:max-w-2/3">
                I’m a Master's student with a strong foundation in Web Development and Data Analytics. I’m passionate about transforming raw data into actionable insights and building user-centric web applications that are not only visually appealing but also functional and efficient. I am committed to leveraging data and technology to empower people and solve real world problems.
                </blockquote>
            </section>
        </section>
    );
}

export default Landing;