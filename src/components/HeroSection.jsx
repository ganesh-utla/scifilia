import React from "react";
import { motion } from "framer-motion";
import CustomButton from "../components/CustomButton";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const HeroSection = ({
  title,
  description,
  buttonTitle,
  CanvasComponent,
  direction,
  handleButtonClick,
}) => {
  return (
    <SectionWrapper>
      <motion.section
        className={`lg:h-[400px] flex ${
          direction === "left"
            ? "max-lg:flex-col-reverse"
            : "max-lg:flex-col-reverse lg:flex-row-reverse"
        } lg:items-center gap-5`}
        {...slideAnimation("up")}
      >
        <motion.div className="lg:w-[50%]" {...slideAnimation(direction)}>
          <motion.div {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="subhead-text">{title}</h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p className="w-full font-normal text-gray-500 text-base">
                {description}
              </p>
              <CustomButton
                type="outlined"
                title={buttonTitle}
                handleClick={handleButtonClick}
                customStyles="w-[200px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[50%] h-[400px]"
          {...slideAnimation(direction === "left" ? "right" : "left")}
        >
          <CanvasComponent />
        </motion.div>
      </motion.section>
    </SectionWrapper>
  );
};

export default HeroSection;
