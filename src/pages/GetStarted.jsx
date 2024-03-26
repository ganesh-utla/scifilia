import { Tilt } from 'react-tilt'
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { fadeIn } from '../config/motion';
import { useNavigate } from 'react-router-dom';

const TopicCard = ({ index, title, icon, handleClick }) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
        onClick={handleClick}
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-24 h-24 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
};


const GetStarted = () => {

  const navigate = useNavigate();

  const topics = [
    { title: 'Physics', icon: '/images/physics.png' },
    { title: 'Chemistry', icon: '/images/chemistry.png' },
    { title: 'Biology', icon: '/images/biology.png' },
    { title: 'Modern', icon: '/images/modern.png' },
  ]

  return (
    <AnimatePresence>
      <div className="w-full px-2 my-20">
        <motion.main className="max-w-7xl flex flex-col items-center gap-14 mx-auto">
          <h1 className="h1-bold">Explore</h1>
          <motion.div className="flex flex-wrap gap-6">
            {topics.map((topic, index) => (
              <TopicCard 
                key={index}
                index={index}
                title={topic.title}
                icon={topic.icon}
                handleClick={() => navigate(`/explore/${topic.title.toLowerCase()}`)}
              />
            ))}
          </motion.div>
          <p className='w-full font-normal text-gray-500 text-base mb-4'>
            Currently, the platform features a selection of topics including physics, chemistry, biology, and modern scientific concepts. Future plans involve expanding the range of topics to offer users an even broader array of subjects to explore and discover through 3D science objects.
          </p>
        </motion.main>
      </div>
    </AnimatePresence>
  );
};

export default GetStarted;
