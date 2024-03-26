import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { asteroid, atom, earth, moon, solarsystem } from '../canvas/physics';
import { testtube, testtubeset, diamond, dna, periodictable } from '../canvas/chemistry';
import { dinosaur, humanbrain, humanheart, humanskeleton, mitochondria, plantcell } from '../canvas/biology';
import { lamborghini, machineguns, rocket, spacesatellite, spaceship, telescope } from '../canvas/modern';
import { fadeIn, slideAnimation } from '../config/motion';


const ObjectCard = ({ index, title, handleClick }) => {
  return (
    <motion.div className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
        onClick={handleClick}
      >
        <div
          className='bg-tertiary rounded-[20px] py-12 px-12 flex justify-evenly items-center flex-col'
        >
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  )
}

const ExplorePage = () => {

  const { topic } = useParams();
  const [objects, setObjects] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const CanvasComponent = selectedObject? selectedObject.canvas : null;

  useEffect(() => {
    if (topic==='physics') setObjects([ asteroid, atom, earth, moon, solarsystem ]);
    else if (topic==='chemistry') setObjects([ testtube, testtubeset, diamond, dna, periodictable ]);
    else if (topic==='biology') setObjects([ dinosaur, humanbrain, humanheart, humanskeleton, mitochondria, plantcell ]);
    else if (topic==='modern') setObjects([ lamborghini, machineguns, rocket, spacesatellite, spaceship, telescope ]);
  }, [topic]);

  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1).toLowerCase();
  }

  return (
    <AnimatePresence>
      <div className="w-full px-2 my-20">
        {selectedObject===null? (
          <motion.main className="relative max-w-7xl flex flex-col items-center gap-14 mx-auto">
            <h1 className="h1-bold" {...slideAnimation('down')}>
              {capitalize(topic)}
            </h1>
            <motion.main className='flex justify-center flex-wrap gap-6'>
              {objects.map((object, index) => (
                <ObjectCard 
                  key={index}
                  index={index}
                  title={object.title}
                  handleClick={() => setSelectedObject(object)}
                />
              ))}
            </motion.main>
          </motion.main>
        ) : (
          <motion.main className="relative max-w-7xl flex flex-col items-center gap-6 mx-auto">
            <h4 className='text-white text-[17px] font-bold text-center cursor-pointer' onClick={() => setSelectedObject(null)}>
              {`< Back`}
            </h4>
            <h1 className="h1-bold" {...slideAnimation('down')}>
              {selectedObject.title}
            </h1>
            <motion.main className="w-full mx-auto bg-tertiary p h-[600px]">
              <CanvasComponent />
            </motion.main>
            <p className='text-gray-400 text-center'>
              {selectedObject.description}
            </p>
          </motion.main>
        )}
      </div>
    </AnimatePresence>
  )
}



export default ExplorePage