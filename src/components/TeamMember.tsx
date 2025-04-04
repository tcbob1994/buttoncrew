import React from 'react';
import { User } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
}

const TeamMember = ({ name, role }: TeamMemberProps) => {
  return (
    <div className="group relative flex flex-col items-center">
      <div className="bg-[#2E2E44] p-4 rounded-full mb-2">
        <User className="w-12 h-12 text-purple-400" />
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