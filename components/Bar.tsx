import { ISkill } from "@/type";
import { motion } from "framer-motion";

const Bar: React.FunctionComponent<{ data: ISkill }> = ({
  data: { name, Icon },
}) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="my-2 text-white bg-gray-300 dark:bg-dark-300 rounded-full">
      <motion.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
