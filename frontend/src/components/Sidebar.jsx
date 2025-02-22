import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, BookOpenIcon, FolderIcon, 
  CogIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Overview', path: '/dashboard', icon: HomeIcon },
    { name: 'Courses', path: '/courses', icon: BookOpenIcon },
    { name: 'Resources', path: '/resources', icon: FolderIcon },
    { name: 'Settings', path: '/settings', icon: CogIcon },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-deniz-700">ZABİTLER.com</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium ${
                  location.pathname === item.path
                    ? 'bg-deniz-50 text-deniz-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 