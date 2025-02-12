import { data, Link, NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import { easeIn, hover, motion } from "framer-motion";
import { use } from "react";

const variants = {
  start: { scale: 0, rotate: 0 },

  hover: {
    y: -20,
    rotate: 0.5,

    skew: "0deg",
    scale: 1.1,
    backgroundColor: "#00ffff",
    transition: { type: "spring", stiffness: 200, duration: 30, ease: easeIn },
  },
  click: {},
};

function Blog() {
  return (
    <section
      id="blog"
      className="flex flex-col justify-center   items-center h-screen"
    >
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -150 }}
        transition={{ duration: 1, delay: 0.4, ease: easeIn }}
        className="text-center grid grid-cols-3 gap-11 p-10"
      >
        <motion.div
          variants={variants}
          whileHover="hover"
          className="p-5 border rounded-lg shadow-lg bg-white"
        >
          <h3 className="text-xl font-bold mb-3">React Actions</h3>
          <p className="text-gray-600">
            Handle async updates, pending states, and optimistic UI changes.
          </p>
          <a
            href="https://react.dev/blog/2024/12/05/react-19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-3 inline-block"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          whileHover="hover"
          className="p-5 border rounded-lg shadow-lg bg-white"
        >
          <h3 className="text-xl font-bold mb-3">New Hooks</h3>
          <p className="text-gray-600">
            Hooks like <code>useOptimistic</code> and <code>useFormStatus</code>
            .
          </p>
          <a
            href="https://react.dev/blog/2024/12/05/react-19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-3 inline-block"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          whileHover="hover"
          className="p-5 border rounded-lg shadow-lg bg-white"
        >
          <h3 className="text-xl font-bold mb-3">React Server Components</h3>
          <p className="text-gray-600">
            Fetch and render components on the server for better performance.
          </p>
          <a
            href="https://react.dev/blog/2024/12/05/react-19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-3 inline-block"
          >
            Learn more
          </a>
        </motion.div>
        <motion.div
          variants={variants}
          whileHover="hover"
          className="p-5 border rounded-lg shadow-lg bg-white"
        >
          <h3 className="text-xl font-bold mb-3">Asset Loading</h3>
          <p className="text-gray-600">
            Efficiently load images, scripts, and other assets asynchronously.
          </p>
          <a
            href="https://react.dev/blog/2024/12/05/react-19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-3 inline-block"
          >
            Learn more
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Blog;
