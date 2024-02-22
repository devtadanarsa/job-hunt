"use client";

import TitleSection from "@/components/atoms/TitleSection";
import React, { useMemo } from "react";
import useSWR from "swr";
import CategoryItem from "./CategoryItem";
import { fetcher, parsingJobCategories } from "@/lib/utils";
import { companyJobType } from "@/types";

const Category = () => {
  const { data, isLoading, error } = useSWR("/api/job/categories", fetcher);

  const categories = useMemo(
    () => parsingJobCategories(data, isLoading, error),
    [data, isLoading, error]
  );

  return (
    <div className="mt-32 mb-8">
      <TitleSection wordOne="Explore by" wordTwo="Category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {categories!!.map((item: companyJobType) => (
          <CategoryItem
            key={item.id}
            name={item.name}
            totalJobs={item.totalJobs}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
