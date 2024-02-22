import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(request: NextRequest) {
  const sortByLatest = request.nextUrl.searchParams.get("sortByLatest");
  let jobs;

  if (sortByLatest) {
    jobs = await prisma.job.findMany({
      take: 6,
      orderBy: {
        datePosted: "desc",
      },
      include: {
        CategoryJob: true,
        Company: {
          include: {
            CompanyOverview: true,
          },
        },
      },
    });
  } else {
    jobs = await prisma.job.findMany({
      take: 6,
      include: {
        CategoryJob: true,
        Company: {
          include: {
            CompanyOverview: true,
          },
        },
      },
    });
  }

  return NextResponse.json(jobs);
}
