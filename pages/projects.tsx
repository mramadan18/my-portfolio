import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectNavbar from "@/components/ProjectNavbar";
import { projects as projectsData } from "@/data";
import { Category } from "@/type";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animations";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handleFilterCategory = (category: Category) => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
    } else {
      const newData = projectsData.filter((project) =>
        project.category.includes(category)
      );

      setProjects(newData);
      setActive(category);
    }
  };

  return (
    <motion.main
      className="py-2 px-5 overflow-y-scroll h-[65vh]"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ProjectNavbar
        navActive={active}
        handleFilterCategory={handleFilterCategory}
      />

      <motion.div
        className="grid grid-cols-12 gap-4 my-3 relative"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => {
          return (
            <motion.div
              className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg"
              variants={fadeInUp}
              key={project.name}
            >
              <ProjectCard
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.main>
  );
};

export default Projects;
