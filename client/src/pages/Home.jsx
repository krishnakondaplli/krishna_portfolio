import About from "./About";
import Blog from "./Blog";
import Works from "./Works.jsx";
import ArrowDown from "../icons/ArrowDown.jsx";
import Contact from "./Connect.jsx";
import { NavLink } from "react-router-dom";
import ReactFeatures from "../components/ReactFeatures.jsx";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";

const parentVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.5 },
  },
};
const childVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.5 } },
};

function Home() {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id='home' className='relative w-full  overflow-hidden'>
      {/* Half Sphere */}
      <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] md:w-[70rem] md:h-[75rem] sm:w-[50rem] sm:h-[55rem] bg-gradient-to-b from-indigo-900 to-cyan-900/5 rounded-full z-0 blur-lg '></div>

      <motion.div className='max-h-screen   lg:mt-32 sm:mt-0 p-6 md:p-12 pt-24 relative flex flex-col items-center text-center'>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 2 }}
          // variants={parentVariant}
          className='mt-8'>
          <p className='text-2xl md:text-4xl font-bold text-gray-700/90'>
            Welcome to my portfolio
          </p>
        </motion.div>
        <motion.div initial='hidden' animate='visible' variants={childVariant}>
          <h1 className='text-2xl md:text-5xl font-serif tracking-wide mt-4 md:mt-8'>
            Building Exceptional User Experiences
          </h1>
          <p className='mt-4 md:text-lg px-4 md:px-0'>
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
          <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-8'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0.5, x: -200 }}
              transition={{ duration: 0.9, delay: 0.3 }}>
              <NavLink
                to='/works'
                onClick={(e) => handleScroll(e, "works")}
                className='gap-4 inline-flex items-center border border-gray-400 px-6 h-12 rounded-xl transition-colors duration-300 hover:bg-slate-800'>
                <span className='font-semibold'>Explore My Work</span>
                <ArrowDown className='size-4' />
              </NavLink>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0.5, x: 200 }}
              transition={{ duration: 0.9, delay: 0.3 }}>
              <NavLink
                to='/connect'
                onClick={(e) => handleScroll(e, "connect")}
                className='gap-2 inline-flex items-center border border-white/90 bg-white text-gray-800 rounded-xl h-12 px-6 transition-colors duration-300 hover:bg-white/80'>
                <span>👋</span>
                <span className='font-semibold'>Let&apos;s connect</span>
              </NavLink>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className=''>
        <About />
        <Works />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}

export default Home;
