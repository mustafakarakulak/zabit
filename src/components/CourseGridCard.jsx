import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClockIcon } from '@heroicons/react/24/outline';

const CourseGridCard = ({ course }) => {
  const navigate = useNavigate();
  const { id, name, description, lessons, progress, color, image } = course;

  const handleCardClick = () => {
    navigate(`/courses/${id}/questions`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`${color} rounded-xl overflow-hidden transform transition-all hover:scale-105 shadow-lg cursor-pointer`}
    >
      {/* Kurs Görseli */}
      <div className="h-48 w-full bg-white/10">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Kurs Bilgileri */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-white/80 text-sm mb-4">{description}</p>

        <div className="flex items-center space-x-2 text-white/90 text-sm mb-4">
          <ClockIcon className="w-4 h-4" />
          <span>{lessons} Ders</span>
        </div>

        {/* İlerleme Çubuğu */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-white/90">İlerleme</span>
            <span className="text-sm text-white/90">{progress}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseGridCard; 