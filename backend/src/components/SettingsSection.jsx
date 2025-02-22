import React from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

const SettingsSection = ({ title, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <div>
              <p className="text-sm font-medium text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-500">{item.value}</p>
            </div>
            <button className="text-deniz-600 hover:text-deniz-700 text-sm flex items-center">
              <PencilIcon className="w-4 h-4 mr-1" />
              Düzenle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsSection; 