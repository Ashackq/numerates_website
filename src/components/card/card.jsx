import React from "react";

const possibleColors = [
  "bg-[#241833]",
  "bg-[#1c282c]",
  "bg-[#2d161f]",
  "bg-[#312a2d]",
  "bg-[#312722]",
];

const getRandomColor = (index) => possibleColors[index % possibleColors.length];

const Card = ({ cardData }) => {
  return (
    <div className="font-lora text-center tracking-wide">
      <h1 className="text-4xl mt-10 mb-5 text-white">
        Following is the list of <br /> projects:
      </h1>
      <div className="flex flex-wrap justify-center">
        {cardData.map((activeProjects, index) => (
          <div key={index} className="flex flex-wrap justify-center">
            {activeProjects.map((projectNames, cardIndex) => (
              <div
                className={`relative z-10 flex flex-col items-center justify-between ${getRandomColor(
                  cardIndex
                )} rounded-[50px] shadow-lg p-5 w-[510px] h-[532px] mb-10 mx-5 transition-transform duration-200 ease-in-out hover:translate-y-[-5px] hover:shadow-2xl`}
                key={cardIndex}
              >
                <div className="absolute top-5 right-4 w-full h-full bg-gray-300 opacity-10 rounded-[50px] z-[-1]" />
                <h2 className="text-2xl text-white">Active Projects</h2>
                {projectNames.map((name, projectIndex) => (
                  <p
                    key={projectIndex}
                    className="text-lg text-white text-center mt-[-60px] mb-[60px]"
                  >
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
