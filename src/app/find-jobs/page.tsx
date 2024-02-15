"use client";

import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobType, filterFormType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";

const FILTER_FORMS: filterFormType[] = [
  {
    name: "categories",
    label: "Categories",
    items: CATEGORIES_OPTIONS,
  },
];

const FindJobsPage = () => {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmitFormFilter = async (
    values: z.infer<typeof formFilterSchema>
  ) => {
    console.log(values);
  };

  const dummyData: JobType[] = [
    {
      applicants: 5,
      categories: ["Marketing", "Design"],
      description: "lorem",
      image: "/images/company2.png",
      jobType: "Full Time",
      location: "Paris, France",
      name: "Social Media Assistant",
      needs: 10,
      type: "Agency",
    },
  ];

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={FILTER_FORMS}
      title="Dream Job"
      subtitle="Find your next career at companies like Hubspot, Nike, and Dropbox"
      loading={false}
      type="job"
      data={dummyData}
    />
  );
};

export default FindJobsPage;
