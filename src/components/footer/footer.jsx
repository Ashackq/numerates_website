import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const devs = [
    {
      id: 1,
      name: "Akash Patel",
      role: "Web Developer",
      photo: "akashpatel.jpg",
      linkedIn: "https://www.linkedin.com/in/akash-patel-8a6107237/",
    },
    {
      id: 2,
      name: "Could Be You",
      role: "..",
      photo: "sample2.jpg",
      linkedIn:
        "https://docs.google.com/forms/d/1PzCzz3t5MQFG8l9ogD1G_qkYoOIoMVMObfKH2hhrU5w/edit",
    },
  ];

  return (
    <footer className="bg-black text-white py-10 px-5 w-full">
      {/* Developers Section */}
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Our Developers:</h1>
        <div className="flex justify-center gap-6 flex-wrap">
          {devs.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative">
                <img
                  src={require(`../team/photos/${member.photo}`)}
                  alt={member.name}
                  loading="lazy"
                  className="w-40 h-40 rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <h2 className="mt-2 text-lg">{member.name}</h2>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Links Section */}
      <div className="flex justify-center gap-4 my-6">
        {["About", "Events", "Teams", "Con", "Fut"].map((link) => (
          <Link
            key={link}
            to={`/${link}`}
            className="hover:underline hover:text-blue-400"
          >
            {link}
          </Link>
        ))}
      </div>

      {/* University Link */}
      <div className="text-center my-4">
        <Link
          to="https://www.mitwpu.edu.in"
          target="_blank"
          className="hover:underline hover:text-blue-400"
        >
          MIT - World Peace University
        </Link>
      </div>

      {/* Socials Section */}
      <div className="text-center my-4">
        <p className="font-semibold">Follow us on:</p>
        <div className="flex justify-center gap-4">
          <Link
            to="https://www.instagram.com/mitwpunumerates/"
            target="_blank"
            className="flex items-center gap-2"
          >
            <img
              src={require("./logos/instagram.png")}
              alt="Instagram"
              className="w-6 h-6"
            />
            Instagram
          </Link>

          <Link
            to="https://www.linkedin.com/company/numerates-club/mycompany/"
            target="_blank"
            className="flex items-center gap-2"
          >
            <img
              src={require("./logos/linkedin.png")}
              alt="LinkedIn"
              className="w-6 h-6"
            />
            LinkedIn
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-8">
        <p>© 2025 All Rights Reserved</p>
        <p>Website design and development by Numerates.</p>
      </div>
    </footer>
  );
};

export default Footer;
