import { RiReactjsLine } from "react-icons/ri"; // lowercase "js"
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiMysql,
  SiPython,
  SiDjango,
  SiFlask,
} from "react-icons/si";

const Skils = () => {
  const iconVariants = (duration) => ({
    initial: {
      y: -20,
    },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <section className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-wrap items-center justify-center gap-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4">
          <TbBrandNextjs className="text-7xl text-black dark:text-white " />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4">
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4">
          <SiTypescript className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4">
          <SiMysql className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(7)}
          className="p-4">
          <SiPython className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4">
          <SiDjango className="text-7xl text-green-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(8)}
          className="p-4">
          <SiFlask className="text-7xl text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Skils;
