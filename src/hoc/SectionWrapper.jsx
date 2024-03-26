import { motion } from "framer-motion";

const SectionWrapper = ({ children }) => {
  return (
    <motion.section
        variants={{
          visible: { opacity: 1, transition: { duration: 1, delay: 0.5 }, },
          hidden: { opacity: 0 }
        }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        className={`max-w-7xl mx-auto relative z-0`}
      >
        {children}
      </motion.section>
  )
}

export default SectionWrapper;