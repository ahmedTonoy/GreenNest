import { motion } from "motion/react";
import { useState } from "react";

const EcoDecorGrid = ({ ecoDecorIdeas }) => {
  const [openedId, setOpenedId] = useState(null);
  const onToggle = (id) => {
    setOpenedId(id === openedId ? null : id);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-2 bg-base-100 gap-4">
      {ecoDecorIdeas.map((idea) => {
        const isOpened = idea.id === openedId;
        return (
          <motion.article
            key={idea.id}
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.02 },
            }}
            onTap={() => onToggle(idea.id)}
            initial="rest"
            whileHover="hover"
            animate={isOpened ? "hover" : "rest"}
            transition={{ duration: 0.25 }}
            className={`
                group relative overflow-hidden rounded-3xl min-h-72
                ${idea.id === 1 ? "md:col-span-5 md:row-span-1" : ""}
                ${idea.id === 2 ? "md:col-span-3 md:row-span-2" : ""}
                ${idea.id === 3 ? "md:col-span-2 md:row-span-2" : ""}
                ${idea.id === 4 ? "md:col-span-3 md:row-span-1" : ""}
                ${idea.id === 5 ? "md:col-span-2 md:row-span-1" : ""}
              `}
          >
            <img
              src={idea.image}
              alt={idea.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

            <motion.div
              layout
              className="absolute w-full bottom-0 right-0 p-5 text-white"
            >
              <h3 className="text-xl text-right font-semibold">{idea.title}</h3>
              <motion.p
                variants={{
                  rest: {
                    opacity: 0,
                    height: 0,
                    marginTop: 0,
                  },
                  hover: {
                    opacity: 1,
                    height: "auto",
                    marginTop: 10,
                  },
                }}
                transition={{ duration: 0.3 }}
                className="w-full overflow-hidden text-sm text-right text-white/85"
              >
                {idea.description}
              </motion.p>
            </motion.div>
          </motion.article>
        );
      })}
    </div>
  );
};

export default EcoDecorGrid;
