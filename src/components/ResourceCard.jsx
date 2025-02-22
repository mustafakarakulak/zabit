import React from 'react';
import { BookOpenIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const ResourceCard = ({ resource }) => {
  const { title, description, color, type, downloadUrl } = resource;

  return (
    <div className={`${color} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105`}>
      <div className="flex justify-between items-start">
        <div className="p-2 bg-white/10 rounded-lg">
          <BookOpenIcon className="w-6 h-6 text-white" />
        </div>
        <button className="text-white/80 hover:text-white">
          <EllipsisVerticalIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/80">{description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-white/90 bg-white/10 px-3 py-1 rounded-full">
          {type}
        </span>
        <a 
          href={downloadUrl} 
          className="text-sm text-white/90 hover:text-white"
        >
          İndir
        </a>
      </div>
    </div>
  );
};

export default ResourceCard; 