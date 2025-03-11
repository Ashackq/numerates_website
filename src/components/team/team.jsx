import React from "react";
import linke from "../../ass/in.png";

const Team = () => {
  const team = [
    {
      name: "Gauri Ket",
      role: "President",
      photo: "gauriket.jpg",
      linkedin: "https://www.linkedin.com/in/gauri-ket-877296220/",
    },
    {
      name: "Aman Singh",
      role: "Vice President",
      photo: "amansingh.jpg",
      linkedin: "https://www.linkedin.com/in/aman-singh-b13b3b219/",
    },
    {
      name: "Sanket Yendhe",
      role: "Design Head",
      photo: "sanketyendhe.jpg",
      linkedin: "https://www.linkedin.com/in/sanket-yendhe-3640b7234/",
    },
    {
      name: "Rishab Jain",
      role: "Treasurer",
      photo: "rishabjain.jpg",
      linkedin: "https://www.linkedin.com/in/rishabh-jain-b57b20200/",
    },
    {
      name: "Akash Patel",
      role: "Management Head",
      photo: "akashpatel.jpg",
      linkedin: "https://www.linkedin.com/in/akash-patel-8a6107237/",
    },
  ];

  return (
    <div className="bg-[#2c3e50] text-white text-center py-10 px-5">
      <h1 className="text-3xl font-bold mb-6">Meet our Team</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {team.map((member) => (
          <div key={member.name} className="w-40">
            <div className="relative group">
              <img
                src={require(`./photos/${member.photo}`)}
                alt={member.name}
                className="w-40 h-40 rounded-[25%] object-cover mb-3"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 text-lg"
                >
                  <img src={linke} alt="LinkedIn" className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
