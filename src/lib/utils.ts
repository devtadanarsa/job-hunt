import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";
import { JobType, companyJobType, optionType } from "@/types";
import { supabaseClient, supabasePublicUrl } from "./supabase";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);

  return isMatch;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);

  return res.json() as Promise<JSON>;
}

export const parsingJobCategories = (
  data: any,
  isLoading: boolean,
  error: any
) => {
  if (!isLoading && !error && data) {
    return data.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        totalJobs: item._count.Job,
      };
    }) as companyJobType[];
  }

  return [];
};

export const parsingJobItem = async (
  data: any,
  isLoading: boolean,
  error: any
) => {
  if (!isLoading && !error && data) {
    return await Promise.all(
      data.map(async (item: any) => {
        let imageName = item.Company?.CompanyOverview[0]?.image;
        let imageUrl;

        if (imageName) {
          imageUrl = await supabasePublicUrl(imageName, "company");
        } else {
          imageUrl = "/images/company2.png";
        }

        return {
          id: item.id,
          image: imageUrl,
          name: item.roles,
          jobType: item.jobType,
          type: item.CategoryJob.name,
          location: item.Company.CompanyOverview[0].location,
          description: item.description,
          categories: item.CategoryJob,
          skills: item.requiredSkills,
          needs: item.needs,
          applicants: item.applicants,
        };
      })
    );
  }

  return [];
};

export const parsingCategoriesToOption = (
  data: any,
  isLoading: boolean,
  error: any,
  isIndustry?: boolean
) => {
  if (!isLoading && !error && data) {
    return data.map((item: any) => {
      return {
        id: isIndustry ? item.name : item.id,
        label: item.name,
      } as optionType;
    }) as optionType[];
  }

  return [];
};

export const parsingCompanies = async (
  data: any,
  isLoading: boolean,
  error: any
) => {
  if (!isLoading && !error && data) {
    console.log(data);
    return await Promise.all(
      data.map(async (item: any) => {
        let imageName = item.CompanyOverview[0]?.image;
        let imageUrl;

        if (imageName) {
          imageUrl = await supabasePublicUrl(imageName, "company");
        } else {
          imageUrl = "/images/company2.png";
        }

        const companyDetail = item.CompanyOverview[0];

        return {
          id: item.id,
          name: companyDetail.name,
          image: imageUrl,
          totalJobs: item._count.Job,
          description: companyDetail.description,
          website: companyDetail.website,
          location: companyDetail.location,
          industry: companyDetail.industry,
          dateFounded: companyDetail.dateFounded,
          techStack: companyDetail.techStack,
          employee: companyDetail.industry,
          socialMedia: item.CompanySocialMedia[0],
          teams: item.CompanyTeam,
        };
      })
    );
  }

  return [];
};

export const dateFormat = (
  date: Date | string,
  format: string = "MMM DD, YYYY"
) => {
  return dayjs(date).format(format);
};
