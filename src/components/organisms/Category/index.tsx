import TitleSection from "@/components/atoms/TitleSection";
import React from "react";
import { BiCategory } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <div className="mt-32 mb-8">
      <TitleSection wordOne="Explore by" wordTwo="Category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {[0, 1, 2, 3, 4].map((item: number) => (
          <CategoryItem key={item} name="Category" totalJobs={100} />
        ))}
      </div>
    </div>
  );
};

export default Category;
