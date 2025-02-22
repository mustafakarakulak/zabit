import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import QuestionArea from '../components/QuestionArea';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const QuestionPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Kursa geri dönme fonksiyonu
  const handleBackToCourse = () => {
    navigate('/courses');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Kurs Soruları" />
        
        <main className="flex-1 overflow-auto">
          {/* Geri dönüş butonu */}
          <div className="p-6">
            <button
              onClick={handleBackToCourse}
              className="flex items-center text-deniz-600 hover:text-deniz-700"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Kursa Geri Dön
            </button>
          </div>

          <QuestionArea courseId={parseInt(courseId, 10)} />
        </main>
      </div>
    </div>
  );
};

export default QuestionPage; 