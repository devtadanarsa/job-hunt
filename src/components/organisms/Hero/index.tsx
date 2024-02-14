import Image from "next/image";
import React from "react";
import FormSearch from "../FormSearch";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="w-1/2">
        <div className="text-7xl font-semibold text-slate-800 w-max relative">
          Discover <br /> more than <br />{" "}
          <span className="text-primary">5000+ Jobs</span>
        </div>
        <Image
          src="/images/pattern2.png"
          alt="/images/pattern2.png"
          width={455}
          height={32}
          className="mb-5"
        />
        <div className="text-muted-foreground text-lg">
          Greate platform for <br /> the job seeker that searching for new
          career heights and passionate about startups.
        </div>
        <FormSearch />
      </div>
      <div className="block mt-2">
        <Image
          src="/images/hero.png"
          alt="/images/hero.png"
          width={501}
          height={310}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Hero;
