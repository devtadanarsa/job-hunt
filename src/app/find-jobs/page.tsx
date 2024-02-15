"use client";

import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { filterFormType } from "@/types";
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

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={FILTER_FORMS}
    />
  );
};

export default FindJobsPage;
