import React from "react";
import Image from "next/image";

const Body = () => {
  const features = [
    {
      title: "Scouting Hub",
      image: "/Frame 20.png",
      description:
        "Discover grassroots talents with professional-grade scouting tools. Track and compare performances in real time.",
    },
    {
      title: "Smart Agent Matching",
      image: "/Frame 23.png",
      description:
        "Connect rising talents with scouts and agents based on region, skillset, and market value.",
    },
    {
      title: "Spotlight",
      image: "/Frame 24.png",
      description:
        "Showcase your skills. Shape your future. Access every match you’ve played, build personal highlight reels, track your performance, and create a standout profile that gets noticed.",
    },
    {
      title: "Match Footage Access",
      image: "/Frame 25.png",
      description:
        "Watch full matches, highlight reels, and position-specific clips to assess talent better.",
    },
    {
      title: "CoachVision Suite",
      image: "/Frame 26.png",
      description:
        "Smarter analysis. Better results. Get tactical insights and player-specific video clips. Analyse full matches and fine-tune strategies with visual data that supports every coaching decision.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-800">
          Empowering Players to Find <br /> Their Opportunities
        </h1>
        <p className="text-teal-600 mt-4">
          Discover a world of opportunities with our platform. We help players
          connect with scouts and showcase their talents effectively.
        </p>
      </div>

      {/* First Row - 2 items */}
      <div className="w-full sm:w-[1500px] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.slice(0, 2).map((feature, index) => (
          <div
            key={index}
            className="p-4 flex flex-col bg-white rounded-lg shadow-md"
          >
            <div className="relative w-full h-60 sm:h-72 md:h-80">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - 3 items */}
      <div className="w-full sm:w-[1500px] mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.slice(2).map((feature, index) => (
          <div
            key={index + 2}
            className="p-4 flex flex-col bg-white rounded-lg shadow-md"
          >
            <div className="relative w-full h-60 sm:h-72 md:h-80">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
