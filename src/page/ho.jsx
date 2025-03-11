import React, { useEffect, useRef } from "react";
import { Detail, Card, Time } from "../components";
import cover from "../ass/cover.jpg";
import { gsap, ScrollTrigger } from "gsap/all";
import TextPlugin from "gsap/TextPlugin";
import SplitType from "split-type";

const cardData = [
  [
    [
      "1.Urinary Incontinence using machine learning",
      "2.Effect of Sanskrit verses and chants on the human brain and its healing capacities",
      "3.Brain signal collection and further refining method with the help of Neural Networks",
    ],
    [
      "4.Medical Card",
      "5.Solar tree classrooms",
      "6.EEG and EOG brain signal collection for concentration and anxiety level determination in soldiers during field work",
      "7.Diagnosis of Scalp Disorders using Deep Learning Approach",
    ],
    [
      "8.Stock market determination with the help of MongoDB and Deep Learning and sentimental analysis",
      "9.Movie recommendation software using Apache Spark framework and Databricks Community edition",
      "10.Drive-eye",
    ],
  ],
];

const Ome = () => {
  const descriptionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const animTextDescription = new SplitType(descriptionRef.current, {
      types: "words, chars",
    });
    const animTextHeading = new SplitType(headingRef.current, {
      types: "words, chars",
    });

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".heading", {
      duration: 3,
      text: { value: "INITIATE || IDEATE || INNOVATE" },
      scrollTrigger: { trigger: ".heading" },
    });

    gsap.set(animTextDescription.chars, { opacity: 0.1 });
    gsap.to(animTextDescription.chars, {
      opacity: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: descriptionRef.current,
        scrub: true,
        start: "top 50%",
        end: "bottom 65%",
      },
    });

    gsap.set(animTextHeading.chars, { y: 100 });
    gsap.to(animTextHeading.chars, {
      y: 0,
      stagger: 0.05,
      delay: 0.1,
      duration: 0.5,
      scrollTrigger: { trigger: headingRef.current },
    });
  }, []);

  return (
    <div className="p-8 space-y-10">
      <div className="relative text-center">
        <img className="w-full rounded-lg shadow-lg" src={cover} alt="cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold heading">Welcome to Numerates</h1>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-xl">&lt;&lt;</span>
            <p className="text-lg">
              we don’t differentiate <br /> unless it’s
              <span className="text-yellow-400"> calculus</span>
            </p>
            <span className="text-xl">&gt;&gt;</span>
          </div>
        </div>
      </div>

      <Time
        events={[
          {
            name: "TreasureHunt",
            date: "2025-03-18T14:00:00",
            id: 1,
            link: "/treasurehunt",
          },
          {
            name: "Recruitment",
            date: "2025-04-10T14:00:00",
            id: 2,
            link: "https://docs.google.com/forms/d/1PzCzz3t5MQFG8l9ogD1G_qkYoOIoMVMObfKH2hhrU5w/edit",
          },
          {
            name: "Olympiad",
            date: "2025-03-18T14:00:00",
            id: 2,
            link: "https://phsykick.web.app/",
          },
          {
            name: "Finxpo",
            date: "2025-03-20T14:00:00",
            id: 2,
            link: "https://finxpo-b983e.web.app/",
          },
        ]}
      />

      <Detail count="6" hrenable="none" wordColors={[]} />
      <Detail
        descriptionRef={descriptionRef}
        headingRef={headingRef}
        clipPath="polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
        hfsize="50px"
        heading="<Notches on our belt>"
        hrmarl="485px"
        hrmarr="485px"
        spcolor="#F8C43F"
        wordColors={[
          { word: "17 major projects", scolor: "#F7E2AD" },
          { word: "3 research papers", scolor: "#F7E2AD" },
        ]}
        description="<br><br>We at Numerates believe in skill-set building through experience and<br> hard work.<br> This club brought in various project and research work, in<br> order to help its members in growing their understanding and<br> knowledge.<br> In the last year, the club has undertaken 17 major projects<br> and 3 research papers have been published.<br><br>"
        color="#fff"
      />

      <Card cardData={cardData} />

      <Detail count="10" hrenable="none" wordColors={[]} />
    </div>
  );
};

export default Ome;
