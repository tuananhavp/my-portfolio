import React from "react";

interface PersonalityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PersonalityCard = ({ title, description, icon }: PersonalityCardProps) => {
  return (
    <div
      className="flex -start gap-2 mt-6 hover:shadow-md hover:shadow-white
                 transition-shadow duration-500 py-4 px-2 cursor-pointer hover:bg-white/5 rounded-lg "
    >
      <span className="2xl:text-2xl text-xl text-blue-400">{icon}</span>
      <div>
        <h3 className="2xl:text-lg text-base">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default PersonalityCard;
