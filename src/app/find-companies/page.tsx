"use client";

import { INDUSTRY_OPTIONS } from "@/constants";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { CompanyType, filterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FindCompaniesPage = () => {
  const FILTER_FORMS: filterFormType[] = [
    {
      name: "industry",
      label: "Industry",
      items: INDUSTRY_OPTIONS,
    },
  ];

  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const onSubmitFormFilter = async (
    values: z.infer<typeof formFilterCompanySchema>
  ) => {
    console.log(values);
  };

  const dummyData: CompanyType[] = [
    {
      image: "/images/company2.png",
      categories: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eius quasi doloribus consequatur culpa cumque fugit iusto consequuntur, sapiente ut quibusdam perferendis nostrum aliquid incidunt, dignissimos ipsam molestias temporibus. Ab.",
      name: "Twitter",
      totalJobs: 10,
    },
    {
      image: "/images/company2.png",
      categories: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eius quasi doloribus consequatur culpa cumque fugit iusto consequuntur, sapiente ut quibusdam perferendis nostrum aliquid incidunt, dignissimos ipsam molestias temporibus. Ab.",
      name: "Twitter",
      totalJobs: 10,
    },
    {
      image: "/images/company2.png",
      categories: "Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eius quasi doloribus consequatur culpa cumque fugit iusto consequuntur, sapiente ut quibusdam perferendis nostrum aliquid incidunt, dignissimos ipsam molestias temporibus. Ab.",
      name: "Twitter",
      totalJobs: 10,
    },
  ];

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={FILTER_FORMS}
      title="dream companies"
      subtitle="Find the dreams companies you dream work for"
      loading={false}
      type="company"
      data={dummyData}
    />
  );
};

export default FindCompaniesPage;
