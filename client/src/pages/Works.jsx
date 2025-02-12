import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const works = [
  {
    imgSrc: "/public/fastPizza.jpeg",
    title: "The Fast React Pizza",
    technologies: ["HTML", "CSS", "Javascript", "React js"],
    projectLinks: "https://krish-the-fast-react-pizza.netlify.app/",
  },
  {
    imgSrc: "/public/react-quiz-app-image.png",
    title: "The React Quiz",
    technologies: ["HTML", "CSS", "Javascript", "React js"],
    projectLinks: "https://reactquiiiz.netlify.app/",
  },
  {
    imgSrc: "/public/worldwise.png",
    title: "The World Wise",
    technologies: ["HTML", "Javascript", "React js", "React Router"],
    projectLinks: "https://worldwiseee.netlify.app/",
  },
  {
    imgSrc: "/public/about-2.jpg",
    title: "The Wild Oasis",
    technologies: ["HTML", "Javascript", "React js", "Tailwind CSS"],
    projectLinks: "https://krish-the-wild-oasis.netlify.app/dashboard",
  },
];

function Works() {
  return (
    <section
      id="works"
      className="relative flex justify-center  items-center h-auto w-full overflow-hidden"
    >
      {/* Grid Container */}
      <motion.div
        className="grid md:grid-cols-2 grid-cols-2   sm:grid-cols-1 sm:items-center sm:m-40 gap-6 m-16 xl:m-6"
        style={{
          display: "grid",
          width: "50rem", // Fixed width for the grid
        }}
      >
        {/* Cards */}
        {works.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Left cards start from -100, right cards from 100
            whileInView={{ opacity: 1, x: 0 }} // Animate to opacity 1 and x: 0
            transition={{ duration: 0.8, delay: index * 0.2 }} // Smooth transition with delay
            // Animate only once
          >
            <ProjectCard
              imgSrc={project?.imgSrc}
              title={project?.title}
              technologies={project?.technologies}
              projectLink={project?.projectLinks}
              classes="flex-shrink-0 w-80 sm:text-[10px]"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Works;
