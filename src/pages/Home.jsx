import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SpaceshipCanvas from '../canvas/modern/spaceship/SpaceshipCanvas';
import AtomCanvas from '../canvas/physics/atom/AtomCanvas';
import TestTubeCanvas from '../canvas/chemistry/testtube/TestTubeCanvas';
import HumanHeartCanvas from '../canvas/biology/humanheart/HumanHeartCanvas';
import SectionWrapper from '../hoc/SectionWrapper';
import { slideAnimation } from '../config/motion';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <div className='w-full px-2 my-20'>
        <motion.main
          className='max-w-7xl flex flex-col gap-14 mx-auto'
        >
          <SectionWrapper>
            <motion.section {...slideAnimation('down')} className='text-center'>
              <h1 className='head-text'>SciFilia</h1>
              <h3 className='h3-semibold mb-2'>Where Science Meets Fantasy</h3>
              <p className='w-full font-normal text-gray-500 text-base mb-4'>
                SciFilia offers a diverse collection of 3D science objects allowing users to explore topics like physics, chemistry, biology, and modern scientific concepts. By utilizing 3D modeling technology, users can interact with complex scientific phenomena, enhancing their understanding and engagement. This platform provides a dynamic learning environment that bridges theoretical knowledge with practical application in science education.
              </p>
              <CustomButton
                title='Get Started >'
                handleClick={() => navigate('/get-started')}
                customStyles='w-[200px] py-2.5'
              />
            </motion.section>
          </SectionWrapper>
          <HeroSection 
            title="Modernize"
            description='Dive into the boundless realms of the sci-fi universe, where the extraordinary awaits at every turn. Embark on a journey beyond the confines of reality, where the limits of imagination are merely a starting point. '
            buttonTitle='Explore'
            handleButtonClick={() => navigate('/explore/modern')}
            direction='left'
            CanvasComponent={SpaceshipCanvas}
          />
          <HeroSection 
            title="Quantamize"
            description='Embark on a voyage of discovery into the uncharted territories of the unknown, where mysteries abound and revelations await. Journey further still, delving into the minuscule realm of atoms, where the building blocks of existence reveal their intricate dance of energy and matter.'
            buttonTitle='Explore'
            handleButtonClick={() => navigate('/explore/physics')}
            direction='right'
            CanvasComponent={AtomCanvas}
          />
          <HeroSection 
            title="Chemify"
            description='Embark on a captivating journey through a world where the delicate balance between acids and bases holds the key to understanding the very essence of existence. Dive into the realm where chemical interactions shape the fabric of reality.'
            buttonTitle='Explore'
            handleButtonClick={() => navigate('/explore/chemistry')}
            direction='left'
            CanvasComponent={TestTubeCanvas}
          />
          <HeroSection 
            title="Biologize"
            description='Dive into your life starting with cells as the basic units. Cells group together to form tissues, which collaborate to create organs with specialized functions.'
            buttonTitle='Explore'
            handleButtonClick={() => navigate('/explore/biology')}
            direction='right'
            CanvasComponent={HumanHeartCanvas}
          />
        </motion.main>
      </div>
    </AnimatePresence>
  )
}

export default Home