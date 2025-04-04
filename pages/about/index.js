import Layouts from '@/components/Layouts';
import { Skills } from '@/data/Skills';
import { motion } from 'framer-motion';
import { ContentAnimation, FadeAnimation } from '@/components/Animations';

const About = () => {
  return (
    <Layouts pageTitle=" | About">
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page">
          ABOUT
        </motion.span>

        <motion.div {...ContentAnimation} className="relative order-2 flex w-3/4 flex-col items-end justify-end md:order-1 md:w-1/3">
          <div className="my-5 mr-2 text-left font-semibold text-primary-light">My Skills</div>
          <div className="flex w-4/5 flex-wrap justify-evenly">
            {Skills.map((skill) => (
              <div key={skill.id} className="skills-icon">
                <svg className="p-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={skill.svg} />
                </svg>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...ContentAnimation} className="relative order-1 my-10 w-3/4 text-justify md:order-2 md:my-0 md:w-1/4">
          <p className="text-md font-light text-primary-light">
            {`Hello!, My Name is RaldzzXyz, But You Can Call Me Raldz. I Come From Manado City, North Sulawesi, Indonesia. I Am One Of The Self-Taught JavaScript Learners, I'm Interested In JavaScript Because It Doesn't Look Too Complex And I Think JavaScript Is Not Too Difficult If There Is A Will To Learn. My Message For You Guys Keep The Spirit Up!`}
          </p>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default About;
