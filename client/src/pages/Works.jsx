import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const works = [
  {
    imgSrc: "client/public/fastPizza.jpeg",
    title: "The Fast React Pizza",
    technologies: ["HTML", "CSS", "Javascript", "React js"],
    projectLinks: "https://krish-the-fast-react-pizza.netlify.app/",
  },
  {
    imgSrc: "client/public/react-quiz-app-image.png",
    title: "The React Quiz",
    technologies: ["HTML", "CSS", "Javascript", "React js"],
    projectLinks: "https://reactquiiiz.netlify.app/",
  },
  {
    imgSrc: "client/public/worldwise.png",
    title: "The World Wise",
    technologies: ["HTML", "Javascript", "React js", "React Router"],
    projectLinks: "https://worldwiseee.netlify.app/",
  },
  {
    imgSrc: "client/public/about-2.jpg",
    title: "The Wild Oasis",
    technologies: ["HTML", "Javascript", "React js", "Tailwind CSS"],
    projectLinks: "https://krish-the-wild-oasis.netlify.app/dashboard",
  },
];

function Works() {
  return (
    <section
      id="works"
      className="relative flex justify-center  items-center w-full p-6 sm:p-12 "
    >
      {/* Grid Container */}
      <motion.div className="grid grid-cols-1 mt-16 sm:grid-cols-1 md:grid-cols-2 gap-6 w-[47rem] max-w-5xl">
        {/* Cards */}
        {works.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex justify-center"
          >
            <ProjectCard
              imgSrc={project?.imgSrc}
              title={project?.title}
              technologies={project?.technologies}
              projectLink={project?.projectLinks}
              classes="w-full max-w-xs sm:max-w-sm"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Works;
