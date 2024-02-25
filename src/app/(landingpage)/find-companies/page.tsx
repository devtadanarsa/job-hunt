"use client";

import { INDUSTRY_OPTIONS } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import useCompanies from "@/hooks/useCompanies";
import useCompanyIndustryFilter from "@/hooks/useCompanyIndustryFilter";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { CompanyType, filterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FindCompaniesPage = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const { filters } = useCompanyIndustryFilter();

  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const onSubmitFormFilter = async (
    values: z.infer<typeof formFilterCompanySchema>
  ) => {
    setCategories(values.industry);
    console.log(values.industry);
  };

  const onResetFilter = () => {
    formFilter.setValue("industry", []);
  };

  const { companies, isLoading, error } = useCompanies(categories);

  return (
    <ExploreDataContainer
      onResetFilter={onResetFilter}
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={filters}
      title="dream companies"
      subtitle="Find the dreams companies you dream work for"
      loading={isLoading}
      type="company"
      data={companies}
    />
  );
};

export default FindCompaniesPage;
