export type JobType = {
  id: string;
  image: string;
  jobType: string;
  name: string;
  type: string;
  location: string;
  description: string;
  categories: companyJobType;
  needs?: number;
  applicants?: number;
  skills: string[];
};

export type CompanyType = {
  image: string;
  totalJobs: number;
  name: string;
  description: string;
  categories: string;
};

export type optionType = {
  id: string;
  label: string;
};

export type filterFormType = {
  label: string;
  name: string;
  items: optionType[];
};

export type companyJobType = {
  id: string;
  name: string;
  totalJobs: number;
};
