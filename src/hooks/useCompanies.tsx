import { fetcher, parsingCompanies } from "@/lib/utils";
import { JobType } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";

const useCompanies = (filter?: string[]) => {
  const [companies, setCompanies] = useState<JobType[]>([]);

  const paramsCategory = useMemo(() => {
    if (filter && filter.length > 0) {
      return filter.join(",");
    }

    return "";
  }, [filter]);

  const { data, isLoading, error, mutate } = useSWR(
    `/api/company/filter?category=${paramsCategory}`,
    fetcher
  );

  const parseJobs = useCallback(async () => {
    const parsedData = await parsingCompanies(data, isLoading, error);
    setCompanies(parsedData);
  }, [data, isLoading, error]);

  useEffect(() => {
    parseJobs();
  }, [data, isLoading, error]);

  return {
    companies,
    mutate,
    isLoading,
    error,
  };
};

export default useCompanies;
