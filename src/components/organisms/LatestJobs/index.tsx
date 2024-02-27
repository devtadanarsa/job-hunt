"use client";

import TitleSection from "@/components/atoms/TitleSection";
import React from "react";
import JobItem from "./JobItem";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";

const LatestJobs = () => {
  const { featuredJobs, isLoading, error } = useFeaturedJobs(true);
  const limitedFeaturedJobs = featuredJobs.slice(0, 3);

  return (
    <div className="py-16 mt-10 mb-10 relative">
      <TitleSection wordOne="Latest" wordTwo="Jobs Open" />
      <div className="mt-12 grid grid-cols-3 gap-8">
        {limitedFeaturedJobs.map((item: JobType) => (
          <JobItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
