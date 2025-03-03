import PropTypes from "prop-types";
import { motion } from "framer-motion";

function ProjectCard({ imgSrc, title, tags, projectLink, classes }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 0.5 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      className={
        "bg-white/10 rounded-xl  shadow-lg mr-4 p-4  mt-12  " + classes
      }>
      {/* Image */}
      <figure className='w-full h-48 md:h-60 lg:h-72 overflow-hidden'>
        <img
          src={imgSrc}
          alt={title}
          loading='lazy'
          className='w-full h-full object-cover'
        />
      </figure>

      {/* Content */}
      <div className='p-5 overflow-hidden '>
        {/* Title */}
        <h3 className='text-xl font-semibold text-gray-200 mb-2'>{title}</h3>

        {/* Tags */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {tags?.length > 0 &&
            tags.map((label, key) => (
              <span
                key={key}
                className='px-2 py-1 text-sm bg-gray-200 text-gray-600 rounded-full'>
                {label}
              </span>
            ))}
        </div>

        {/* Link */}
        <a
          href={projectLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center cursor-pointer text-blue-500 hover:text-blue-700 font-medium'>
          View Project
          <span className='material-symbols-rounded ml-1'>
            {" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M7 17L17 7' />
              <path d='M7 7h10v10' />
            </svg>
          </span>
        </a>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
