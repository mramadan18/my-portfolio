import Head from "next/head";
import { fadeInUp, routeAnimation } from "@/animations";
import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Mahmoud Ramadan | Resume</title>
      </Head>
      <motion.main
        className="py-2 px-6"
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* education & exp */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div>
              <h5 className="my-2 text-xl font-bold">Faculty of commerce</h5>
              <p className="font-semibold">Helwan university(2019-2023)</p>
              {/* <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati repudiandae repellendus illo maxime
              </p> */}
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            <div>
              <h5 className="my-2 text-xl font-bold">Frond End Developer</h5>
              <p className="font-semibold">Manarat Al-asr (2023-on)</p>
              {/* <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati repudiandae repellendus illo maxime
              </p> */}
            </div>
          </motion.div>
        </div>

        {/* languages & tool */}
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div>
            <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
            <div className="my-2">
              {languages.map((language) => (
                <Bar data={language} key={language.name} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
            <div className="my-2">
              {tools.map((tool) => (
                <Bar data={tool} key={tool.name} />
              ))}
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Resume;
