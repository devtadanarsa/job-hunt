import LatestJobs from "@/components/organisms/LatestJobs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsPeople } from "react-icons/bs";
import {
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

const DetailCompanyPage = () => {
  const companyInformation = [
    {
      title: "Founded",
      description: "March, 06 2023",
      icon: AiOutlineFire,
    },
    {
      title: "Employees",
      description: "151-250",
      icon: BsPeople,
    },
    {
      title: "Location",
      description: "Indonesia",
      icon: HiOutlineLocationMarker,
    },
    {
      title: "Industry",
      description: "Advertising",
      icon: HiOutlineOfficeBuilding,
    },
  ];

  const socialLinks = [
    {
      icon: BsFacebook,
      link: "https://facebook.com",
    },
    {
      icon: TwitterIcon,
      link: "https://twitter.com",
    },
    {
      icon: BsLinkedin,
      link: "https://linkedin.com",
    },
  ];

  return (
    <>
      <div className="bg-slate-100 px-32 pt-16 pb-14">
        <div className="inline-flex gap-3 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline hover:text-black">
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/find-companies"
            className="hover:underline hover:text-black"
          >
            Companies
          </Link>{" "}
          /{" "}
          <Link
            href="/detail/company/1"
            className="hover:underline hover:text-black"
          >
            Twitter
          </Link>
        </div>

        <div>
          <div className="mt-10 inline-flex gap-6 items-start">
            <Image
              src="/images/company2.png"
              alt="/images/company2.png"
              width={150}
              height={150}
            />
            <div>
              <div className="inline-flex gap-4 items-center">
                <span className="text-4xl font-semibold">Twitter</span>
                <Badge>10 Jobs</Badge>
              </div>
              <div className="mt-2">
                <Link href="/" className="font-semibold text-primary">
                  https://twitter.com
                </Link>
              </div>
              <div className="inline-flex items-center gap-10 mt-6">
                {companyInformation.map((item: any, i: number) => (
                  <div className="inline-flex items-center gap-3" key={i}>
                    <div>
                      <div className="bg-white p-3 rounded-full">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">{item.title}</div>
                      <div className="font-semibold">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 p-16 flex flex-row items-start gap-10">
        <div className="w-3/4">
          <div className="mb-16">
            <div className="text-3xl font-semibold mb-3">Company Profile</div>
            <div className="text-muted-foreground">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo id
                laboriosam alias magnam, nobis eius recusandae ipsum accusantium
                sequi dolores veniam enim ullam tempora deserunt aut? Quibusdam
                incidunt rerum itaque!
              </p>
            </div>
          </div>
          <div className="text-3xl font-semibold mb-4">Contact</div>
          <div className="flex items-center gap-5 w-[400px] flex-wrap">
            {socialLinks.map((item: any, i: number) => (
              <div
                className="p-2 border border-primary text-primary w-max inline-flex items-center gap-3 font-semibold"
                key={i}
              >
                <item.icon />
                <span className="text-sm">{item.link}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-3xl font-semibold mb-4">Tech Stack</div>
          <div className="text-gray-500 text-sm">
            Learn about the technology and tools that Pattern uses.
          </div>
          <div className="mt-5 inline-flex gap-4">
            <Badge className="rounded-sm">Javascript</Badge>
            <Badge className="rounded-sm">HTML</Badge>
          </div>
        </div>
      </div>
      <div className="px-32">
        <Separator />
        <div className="my-16">
          <div className="text-3xl font-semibold mb-4">Teams</div>
          <div className="grid grid-cols-5 gap-5 mt-5">
            {[0, 1, 2].map((item: number) => (
              <div key={item} className="border border-border px-3 py-5">
                <div className="w-16 h-16 rounded-full mx-auto bg-gray-300" />
                <div className="text-center my-4">
                  <div className="font-semibold text-sm">Devta Danarsa</div>
                  <div className="text-gray-500 text-xs">CEO & Co-Founder</div>
                </div>
                <div className="mx-auto w-max">
                  <div className="inline-flex gap-2">
                    <BsInstagram className="w-4 h-4 text-gray-500" />
                    <BsLinkedin className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Separator />
      </div>
      <div className="px-32 mt-16">
        <LatestJobs />
      </div>
    </>
  );
};

export default DetailCompanyPage;
