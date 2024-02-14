import Image from "next/image";
import React from "react";

const clients = [
  "/images/jobox.png",
  "/images/dsign.png",
  "/images/wave.png",
  "/images/twins.png",
  "/images/bubles.png",
];

const Clients = () => {
  return (
    <div className="relative z-10">
      <div className="text-lg text-muted-foreground">
        Companies we helped grow
      </div>
      <div className="mt-8 flex flex-row justify-between">
        {clients.map((item: string, i: number) => (
          <Image key={i} src={item} alt={item} width={139} height={35} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
