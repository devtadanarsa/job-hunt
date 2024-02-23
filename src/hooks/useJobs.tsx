import { fetcher, parsingJobItem } from "@/lib/utils";
import { JobType } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";

const useJobs = (filter?: string[]) => {
  const [jobList, setJobList] = useState<JobType[]>([]);

  const paramsCategory = useMemo(() => {
    if (filter && filter.length > 0) {
      return filter.join(",");
    }

    return "";
  }, [filter]);

  const { data, isLoading, error, mutate } = useSWR(
    `/api/job/filter?category=${paramsCategory}`,
    fetcher
    // { revalidateOnMount: false }
  );

  const parseJobs = useCallback(async () => {
    const parsedData = await parsingJobItem(data, isLoading, error);
    setJobList(parsedData);
  }, [data, isLoading, error]);

  useEffect(() => {
    parseJobs();
  }, [data, isLoading, error]);

  return {
    jobList,
    mutate,
    isLoading,
  };
};

export default useJobs;
