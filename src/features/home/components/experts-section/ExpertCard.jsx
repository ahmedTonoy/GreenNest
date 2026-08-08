import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

const imageVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.08,
  },
};

const overlayVariants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const textItemVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const ExpertCard = ({ expert, opened, onToggle }) => {
  const { name, specialization, experience, rating, image } = expert;

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      onTap={onToggle}
      animate={opened ? "hover" : "initial"}
      className="relative overflow-hidden cursor-pointer bg-base-100"
    >
      <div className="overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          variants={imageVariants}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="w-full h-70 object-cover"
        />
      </div>

      <motion.div
        variants={overlayVariants}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="absolute inset-0 flex items-center justify-center bg-black/55 backdrop-blur-xs"
      >
        <motion.div className="flex flex-col items-center gap-3 text-center text-white px-4">
          <motion.h3 variants={textItemVariants} className="text-3xl font-bold">
            {name}
          </motion.h3>

          <motion.h4
            variants={textItemVariants}
            className="text-lg text-secondary"
          >
            {specialization}
          </motion.h4>

          <motion.p variants={textItemVariants}>{experience}+ Exp</motion.p>

          <motion.p
            variants={textItemVariants}
            className="font-bold flex items-center gap-1"
          >
            {rating}
            <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExpertCard;
