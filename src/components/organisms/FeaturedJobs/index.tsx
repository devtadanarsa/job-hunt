import TitleSection from "@/components/atoms/TitleSection";
import React from "react";
import JobItem from "./JobItem";

const FeaturedJobs = () => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection wordOne="Featured" wordTwo="Jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company.png"
            jobType="Full-Time"
            name="Email Marketing"
            type="Agency"
            location="Paris, France"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel dolorem, possimus et eius laborum voluptate. Veniam, iusto. Voluptatum ratione voluptatibus ipsum, animi asperiores unde illo fugit expedita dolorum repudiandae."
            categories={["Marketing", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
