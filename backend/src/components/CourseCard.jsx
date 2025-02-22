import React from 'react';

const CourseCard = ({ course }) => {
  const { name, lessons, progress, color, icon: Icon } = course;

  return (
    <div className={`p-6 rounded-xl ${color} transform transition-all hover:scale-105 cursor-pointer`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-white/80 text-sm mt-1">{lessons} Ders</p>
        </div>
        <Icon className="w-8 h-8 text-white/80" />
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-white/90">İlerleme</span>
          <span className="text-sm text-white/90">{progress}%</span>
        </div>
        <div className="h-2 bg-white/20 rounded-full">
          <div 
            className="h-full bg-white rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard; 