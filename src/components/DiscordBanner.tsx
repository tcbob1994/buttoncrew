import React from 'react';
import { Disc as Discord } from 'lucide-react';

const DiscordBanner = () => {
  return (
    <div className="space-y-6">
      {/* Invite Banner */}
      <div className="bg-[#5865F2] rounded-lg p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Discord className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold">Join uns auf Discord!</h3>
              <p className="text-gray-100">Werde Teil unserer Community</p>
            </div>
          </div>
          <a
            href="https://discord.gg/V9xryXCtyz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#5865F2] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            discord.gg/V9xryXCtyz
          </a>
        </div>
      </div>

      {/* Discord Widget */}
      <div className="flex justify-center">
        <iframe 
          src="https://discord.com/widget?id=1216445566449393674&theme=dark"
          width="350" 
          height="500" 
          frameBorder="0" 
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className="rounded-lg shadow-lg"
          title="Discord Server Widget"
        ></iframe>
      </div>
    </div>
  );
};

export default DiscordBanner;