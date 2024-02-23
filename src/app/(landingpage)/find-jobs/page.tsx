"use client";

import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobType, filterFormType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import useCategoryJobFilter from "@/hooks/useCategoryJobFilter";
import useJobs from "@/hooks/useJobs";

const FindJobsPage = () => {
  const { filters } = useCategoryJobFilter();

  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const [categories, setCategories] = useState<string[]>([]);
  const { jobList, mutate, isLoading } = useJobs(categories);

  const onSubmitFormFilter = async (
    values: z.infer<typeof formFilterSchema>
  ) => {
    setCategories(values.categories);
  };

  const onResetFilter = () => {
    formFilter.setValue("categories", []);
  };

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      onResetFilter={onResetFilter}
      filterForms={filters}
      title="dream job"
      subtitle="Find your next career at companies like Hubspot, Nike, and Dropbox"
      loading={false}
      type="job"
      data={jobList}
    />
  );
};

export default FindJobsPage;
