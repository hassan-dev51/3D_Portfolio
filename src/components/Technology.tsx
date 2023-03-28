"use client";

import React from "react";
import StartWrapper from "@/hoc/StartWrapper";
import { technologies } from "@/utlis/data";
import BallCanvas from "./canvas/BallCanvas";
const Technology = () => {
  console.log(technologies);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default StartWrapper(Technology, "technology");
