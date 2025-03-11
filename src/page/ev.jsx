import React from "react";
import { Time, Detail } from "../components";
import kpit from "../ass/kpit.jpg";

const Ev = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="py-6">
        <Time
          events={[
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
            {
              name: "Pi Day",
              date: "2025-03-18T14:00:00",
              id: 1,
              link: "/treasurehunt",
            },
          ]}
        />
      </div>

      <Detail count="4" hrenable="none" wordColors={[]} />
      <Detail
        heading="<Past Events>"
        hfsize="64px"
        spcolor="#F8C43F"
        wordColors={[]}
      />
      <Detail count="1" hrenable="none" wordColors={[]} />

      <div className="p-4">
        <Detail
          heading="KPIT SPARKLE"
          description="We got an opportunity to collaborate with KPIT to market their Sparkle Event..."
          color="#fff"
          pos="left"
          spcolor="#94D443"
          wordColors={[{ word: "14th September", scolor: "#B2E174" }]}
        />
      </div>
      <div className="flex justify-center">
        <img
          src={kpit}
          alt="KPIT Sparkle"
          className="w-full max-w-xl rounded-lg shadow-lg"
        />
      </div>

      <Detail count="6" hrenable="none" wordColors={[]} />

      <div className="p-4">
        <Detail
          heading="Webinars & Workshops"
          description="Over the period of two years, Numerates Club have conducted webinars..."
          color="#fff"
          pos="right"
          spcolor="#94D443"
          wordColors={[
            { word: "“Vedic Mathematics”", scolor: "#5BC4FF" },
            {
              word: "“Research paper analysis: How to read a Research paper”",
              scolor: "#5BC4FF",
            },
          ]}
        />
      </div>

      <Detail count="6" hrenable="none" wordColors={[]} />

      <div className="p-4">
        <Detail
          heading="Competitions & Quizzes & Workshops"
          description="The club started with the weekly quizzes for competitive mathematics exam..."
          color="#fff"
          pos="left"
          spcolor="#E78A8A"
          wordColors={[
            { word: "“Numerates Club”", scolor: "#F7E2AD" },
            { word: "“Pi Day”", scolor: "#F8C43F" },
            { word: "“14th of March”", scolor: "#F8C43F" },
            { word: "“Modern Portfolio Theory”", scolor: "#5BC4FF" },
            { word: "The Pi Day Quiz", scolor: "#5BC4FF" },
          ]}
        />
      </div>
      <Detail count="10" hrenable="none" wordColors={[]} />
    </div>
  );
};

export default Ev;
