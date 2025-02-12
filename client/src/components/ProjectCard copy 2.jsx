import PropTypes from "prop-types";

function ProjectCard({ imgSrc, title, technologies, projectLink, classes }) {
  return (
    <div className={`p-4 bg-gray-500/10 shadow-lg rounded-lg ${classes} `}>
      <div className="mb-4">
        <img
          src={imgSrc}
          alt={title}
          className="w-[24rem] h-64 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        {technologies?.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-400 text-gray-800 text-sm px-2 py-1 rounded-full mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Link */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
      >
        View Project
        <span className="material-symbols-rounded ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      </a>
    </div>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
