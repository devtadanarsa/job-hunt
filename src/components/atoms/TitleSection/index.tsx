import React, { FC } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface TitleSectionProps {
  wordOne: string;
  wordTwo: string;
}

const TitleSection: FC<TitleSectionProps> = ({ wordOne, wordTwo }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="text-4xl font-bold">
        {wordOne} <span className="text-primary">{wordTwo}</span>
      </div>
      <div className="inline-flex gap-3 items-center text-primary font-semibold cursor-pointer">
        <span>Show all jobs</span>
        <HiOutlineArrowNarrowRight />
      </div>
    </div>
  );
};

export default TitleSection;
