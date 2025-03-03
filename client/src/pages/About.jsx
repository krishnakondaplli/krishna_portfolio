import { easeIn, motion } from "framer-motion";
import myProfile from "../assets/mImage1.png";

function About() {
  return (
    <section
      id='about'
      className='flex justify-center items-center min-h-screen p-6 mb-[1rem] md:p-12'>
      <div className='flex flex-col mt-20 md:flex-row justify-center items-center w-full max-w-6xl gap-6 md:gap-12'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className='w-full sm:w-[20rem] md:w-1/2 flex justify-center'>
          <img
            src={myProfile} // Replace with your image path
            alt='Krishna Kondapalli'
            className='w-64 h-64 sm:w-80 sm:h-72 md:w-80 md:h-80 object-cover rounded-lg shadow-lg'
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 80 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className='w-full sm:w-[25rem] md:w-1/2 tracking-tighter text-gray-600/90 text-base md:text-lg leading-relaxed md:leading-8 text-center md:text-left'>
          <p className='font-bold text-slate-600'>
            A passionate Front-End Developer with experience in building dynamic
            and user-friendly web applications. Skilled in
            React.js,Typescript,Next.js, Redux Toolkit,and Tailwind CSS, I focus
            on creating responsive and high-performance user interfaces. I
            thrive in collaborative environments and love leveraging modern
            technologies to deliver impactful digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
