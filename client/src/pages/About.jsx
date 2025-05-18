import { easeIn, motion } from "framer-motion";
import myProfile from "../assets/portfolioImage.png";

function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center min-h-screen p-6 mb-[1rem] md:p-12">
      <div className="flex flex-col mt-20 md:flex-row justify-center items-center w-full max-w-6xl gap-6 md:gap-12">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="w-full sm:w-[20rem] md:w-1/2 flex justify-center mb-16 ">
          <img
            src={myProfile} // Replace with your image path
            alt="Krishna Kondapalli"
            className="w-64 h-64 sm:w-80 sm:h-72 md:w-80 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 80 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="w-full sm:w-[25rem] md:w-1/2 tracking-tight md:tracking-tight text-gray-600/90 text-base md:text-lg leading-relaxed md:leading-8 text-center md:text-left">
          <p className="font-bold text-slate-600">
            I’m a passionate Full-Stack Developer with a strong focus on
            building scalable, performant, and user-centric web applications. On
            the front end, I specialize in React.js, TypeScript, Next.js, Redux
            Toolkit, and Tailwind CSS, creating responsive and dynamic user
            interfaces. On the back end, I work extensively with Python,
            utilizing Django and Flask to develop robust APIs and server-side
            logic. I have hands-on experience with relational databases like
            MySQL and PostgreSQL, enabling me to architect full-stack solutions
            from concept to deployment. I thrive in collaborative environments,
            value clean and maintainable code, and enjoy leveraging modern
            technologies to deliver impactful digital experiences.
          </p>
          <div className="mt-5">
            <a
              href="https://drive.google.com/file/d/13JBgMpp5WZ0IftXvTd-KgSKmXnV-8QPX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white  rounded-full p-4 text-sm mb-10 text-stone-800">
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
