import { useState } from "react";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "@/type";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";

const ProjectCard: React.FunctionComponent<{
  project: IProject;
  showDetail: number | null;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    description,
    deployed_url,
    github_url,
    key_techs,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        priority
        className="cursor-pointer"
        width={128}
        height={128}
        layout="responsive"
        quality={100}
        onClick={() => setShowDetail(id)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 w-full h-auto gap-x-12 text-black dark:text-white bg-gray-100 dark:bg-dark-100 p-2 md:p-10 rounded-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image
                src={image_path}
                alt={name}
                priority
                width={300}
                height={150}
                layout="responsive"
                quality={100}
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUp}
            >
              <a
                href={github_url}
                target="__blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                target="__blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="py-1 px-2 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 rounded-full top-3 right-3 
            focus:outline-none bg-gray-200 dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
