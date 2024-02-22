"use client";

import TitleSection from "@/components/atoms/TitleSection";
import React from "react";
import JobItem from "./JobItem";
import { JobType } from "@/types";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";

const FeaturedJobs = () => {
  const { featuredJobs, isLoading, error } = useFeaturedJobs(false);

  return (
    <div className="mt-32">
      <TitleSection wordOne="Featured" wordTwo="Jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {featuredJobs.map((item: JobType) => (
          <JobItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
