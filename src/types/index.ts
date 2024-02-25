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

export type CompanyTeamType = {
  id: string;
  name: string;
  position: string;
  instagram: string;
  linkedin: string;
};

export type CompanySocialMediaType = {
  id: string;
  instagram: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  youtube: string;
};

export type CompanyType = {
  id: string;
  image: string;
  totalJobs: number;
  name: string;
  description: string;
  website: string;
  location: string;
  employee: string;
  industry: string;
  dateFounded: Date;
  techStack: string[];
  socialMedia: CompanySocialMediaType;
  teams: CompanyTeamType;
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
