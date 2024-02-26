import { fetcher, parsingJobItem } from "@/lib/utils";
import { JobType } from "@/types";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

const useFeaturedJobs = (dateSorted: boolean) => {
  let url;
  if (dateSorted) {
    url = "/api/job/featured?sortByLatest=true";
  } else {
    url = "/api/job/featured";
  }

  const { data, isLoading, error } = useSWR<any>(url, fetcher);
  const [featuredJobs, setFeaturedJobs] = useState<JobType[]>([]);

  const parseJobs = useCallback(async () => {
    const parsedData = await parsingJobItem(data, isLoading, error);
    setFeaturedJobs(parsedData);
  }, [data, isLoading, error]);

  useEffect(() => {
    parseJobs();
  }, [data, isLoading, error]);

  return {
    featuredJobs,
    isLoading,
    error,
  };
};

export default useFeaturedJobs;
