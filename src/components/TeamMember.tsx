import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
}

const TeamMember = ({ name, role }: TeamMemberProps) => {
  // Generate a unique gaming-themed profile picture for each team member
  const getProfileImage = (name: string) => {
    const images = [
      '/images/team/bob.png?w=300&h=300&fit=crop',
      '/images/team/jj.png?w=300&h=300&fit=crop',
      '/images/team/seetang.jpeg?w=300&h=300&fit=crop',
      '/images/team/andre.png?w=300&h=300&fit=crop'
    ];
    
    // Use name to consistently get the same image for each team member
    const index = name.charCodeAt(0) % images.length;
    return images[index];
  };

  return (
    <div className="group relative flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-2 ring-4 ring-purple-400 ring-opacity-50">
        <img
          src={getProfileImage(name)}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-200"
        />
      </div>
      
      {/* Hover Information */}
      <div className="opacity-0 group-hover:opacity-100 absolute -bottom-16 w-full bg-[#2E2E44] p-3 rounded-lg text-center transform transition-all duration-200 shadow-lg">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;