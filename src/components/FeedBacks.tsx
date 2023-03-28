"use client";

import StartWrapper from "@/hoc/StartWrapper";
import { styles } from "@/styles";
import { testimonials } from "@/utlis/data";
import { fadeIn, textVariant } from "@/utlis/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const FeedBacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant(1)}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
            key={index}
          >
            <p className="text-white font-black text-[48px]">&quot;</p>

            <div className="mt-1">
              <p className="text-white tracking-wider text-[18px]">
                {testimonial.testimonial}
              </p>

              <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex-1 flex flex-col">
                  <p className="text-white font-medium text-[16px]">
                    <span className="blue-text-gradient">@</span>{" "}
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-secondary text-[12px]">
                    {testimonial.designation} of {testimonial.company}
                  </p>
                </div>

                {/* <Image
                  src={testimonial.image}
                  alt={`feedback_by-${testimonial.name}`}
                  className="w-10 h-10 rounded-full object-cover"
                  width={40}
                  height={40}
                /> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StartWrapper(FeedBacks, "");
