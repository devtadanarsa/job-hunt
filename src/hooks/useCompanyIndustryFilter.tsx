import { fetcher, parsingCategoriesToOption } from "@/lib/utils";
import { filterFormType } from "@/types";
import { useMemo } from "react";
import useSWR from "swr";

const useCompanyIndustryFilter = () => {
  const { data, isLoading, error } = useSWR("/api/company/categories", fetcher);

  const categories = useMemo(
    () => parsingCategoriesToOption(data, isLoading, error),
    [data, error, isLoading]
  );

  const filters = useMemo(() => {
    return [
      {
        name: "industry",
        label: "Industry",
        items: categories,
      },
    ] as filterFormType[];
  }, [categories]);

  return {
    filters,
  };
};

export default useCompanyIndustryFilter;
