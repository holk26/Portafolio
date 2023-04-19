import { motion } from "framer-motion";

const Portafolio = () => {
  const scaleVariants = {
    hover: { scale: 1.1, zIndex: 2 },
    unhover: { scale: 1, zIndex: 1 },
  };

  return (
    <motion.div
      className="col-md-4 mt-4 p-2"
      variants={scaleVariants}
      whileHover="hover"
      whileTap="hover"
    >
      <div className="card h-100">
        <img
          src="https://avatars.githubusercontent.com/u/23020718?v=4"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h3>title</h3>
          <p>Descripcion</p>
          <a href="#">Know more</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Portafolio;
