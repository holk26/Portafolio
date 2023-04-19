import { motion } from "framer-motion";

const Skills = ({ name, progressbar }) => {
  const skillsVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
    },
  };

  return (
    <motion.div
      className="py-3"
      variants={skillsVariants}
      initial="initial"
      whileHover="hover"
    >
      <h5>{name}</h5>
      <motion.div className="progress" style={{ backgroundColor: "white" }}>
        <motion.div
          className="progress-bar"
          role="progressbar"
          style={{
            width: progressbar + "%",
            backgroundColor: "rgb(39, 174, 96)",
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
