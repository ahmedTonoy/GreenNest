import { motion } from "motion/react";
import decorative from "../../../../assets/decor2.png";

const HeroSlide = ({ slide }) => {
  const { badge, title, description, image, primaryButton, secondaryButton } =
    slide;
  console.log(secondaryButton);
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-5 w-full md:relative">
      <div className="space-y-5 text-center md:text-left md:w-[55%] z-10">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="italic text-lg"
        >
          {badge}
        </motion.h3>
        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl max-w-xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center md:justify-start gap-4"
        >
          {primaryButton && (
            <button className="btn min-w-37 btn-primary">
              {primaryButton.text}
            </button>
          )}
          {secondaryButton && (
            <button className="btn min-w-37 btn-secondary">
              {secondaryButton?.text}
            </button>
          )}
        </motion.div>
      </div>
      <motion.div
        animate={{
          y: [
            6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -5, -4, -3, -2, -1, 0,
            1, 2, 3, 4, 5, 6,
          ],
          rotate: [1, 0.5, 0, -0.5, -1, -0.5, 0, 0.5, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="hidden md:block md:absolute absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-100 opacity-40"
      >
        <img src={decorative} alt="" />
      </motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-[45%]"
      >
        <img
          src={image}
          className="rounded-xl md:rounded-l-full object-cover"
          alt="Hero section image"
        />
      </motion.div>
    </div>
  );
};

export default HeroSlide;
