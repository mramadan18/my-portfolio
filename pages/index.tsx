import Head from "next/head";
import { fadeInUp, routeAnimation, stagger } from "@/animations";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mahmoud Ramadan | About</title>
      </Head>
      <motion.main
        className="flex flex-col px-6 pt-1 flex-grow"
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h5 className="my-3 font-medium">
          Hello, I'm Mahmoud Ramadan, a dedicated front-end developer with a
          strong passion for turning creative designs into seamless and
          interactive web experiences. I'm the bridge between design concepts
          and functional web interfaces, and I thrive on making design visions
          come to life on the web.
        </h5>
        <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 mx-[-1.5rem] flex-grow">
          <h6 className="my-3 text-xl font-bold tracking-wide">
            What I am doing
          </h6>
          <motion.div
            className="grid gap-6 lg:grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="bg-gray-200 dark:bg-dark-200 rounded-lg lg:col-span-1"
                variants={fadeInUp}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.main>
    </>
  );
};

export default Home;
