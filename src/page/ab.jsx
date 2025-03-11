import React from "react";
import { Detail } from "../components";

const Ab = () => (
  <div className="p-4 space-y-6">
    <div className="text-center py-6">
      <Detail
        count="3"
        heading="<Special Note>"
        hfsize="64px"
        wordColors={[
          { word: "pandemic", scolor: "#CE1F1F" },
          { word: "coronavirus", scolor: "#CE1F1F" },
          {
            word: "The club is thankful for all the support and guidance received from the University and hope for further contributions to the community as whole.",
            scolor: "#F7E2AD",
          },
        ]}
        hrmarl="270px"
        hrmarr="270px"
        description="The year from 2020 to 2022 was entirely under <br>pandemic situation. With the help and support of the<br> members, the club have survived and uplifted from <br>the pandemic. Various activities were conducted<br> despite of the outbreak of <br>coronavirus. 
        <br><br><br>The club is thankful for all the support and guidance received from the University and hope for further contributions to the community as whole."
        spcolor="#F8C43F"
        color="#fff"
      />
    </div>

    <Detail
      marginLeft="310px"
      marginRight="310px"
      hrmarl="10px"
      hrmarr="10px"
      spcolor="#F7E2AD"
      wordColors={[]}
    />
    <Detail
      marginLeft="310px"
      marginRight="310px"
      hrmarl="150px"
      hrmarr="150px"
      spcolor="#F7E2AD"
      wordColors={[]}
    />

    <Detail count="4" hrenable="none" wordColors={[]} />

    <Detail
      heading="Individual Achievements"
      spcolor="#9C62F9"
      hfsize="54px"
      wordColors={[]}
    />

    <Detail
      hrenable="none"
      description="1. LIMIT 2020 - An Olympiad by ISI’s club<br>Participants: Tarush Pandey, Tanmay Das, Sanskar Garodia, Faiz Ansari"
      color="#fff"
      hrmarl="275px"
      hrmarr="275px"
      wordColors={[
        { word: "1.LIMIT 2020 - An Olympiad by ISI’s club", scolor: "#F7E2AD" },
      ]}
      count="2"
    />

    <Detail
      description="2. Albert Einstein international scholarship test 2021 <br>- A mathematical scholarship test by AICTSD <br>Participants: Tarush Pandey, Ambika Patidar, Aniruddha Shende, Maahi Chouhan, <br>Ritu Karnawat, Tanmay Das<br>Two of the participants score 90% score in the exam."
      color="#fff"
      hrenable="none"
      spcolor="#9C62F9"
      hrmarl="275px"
      hrmarr="275px"
      wordColors={[
        {
          word: "2. Albert Einstein international scholarship test 2021 ",
          scolor: "#F7E2AD",
        },
        {
          word: "- A mathematical scholarship test by AICTSD",
          scolor: "#F7E2AD",
        },
      ]}
      count="0"
    />

    <Detail
      description="3. Aryabhatta National Maths Competition 2020: <br>A Mathematical Olympiad by “AICTSD”<br>Participants: Kishita Pakhrani, Tarush Pandey, Faiz Ansari, <br>Stuti Jajodia, Anit Agrawal"
      color="#fff"
      hrenable="none"
      spcolor="#9C62F9"
      hrmarl="275px"
      hrmarr="275px"
      wordColors={[
        {
          word: "3. Aryabhatta National Maths Competition 2020: A Mathematical Olympiad by “AICTSD”",
          scolor: "#F7E2AD",
        },
        { word: "A Mathematical Olympiad by “AICTSD”", scolor: "#F7E2AD" },
      ]}
      count="0"
    />

    <Detail count="6" hrenable="none" wordColors={[]} />
  </div>
);

export default Ab;
