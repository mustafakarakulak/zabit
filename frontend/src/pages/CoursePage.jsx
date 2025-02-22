import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CourseGridCard from '../components/CourseGridCard';

const courses = [
  {
    id: 1,
    name: 'Deniz Hukuku',
    description: 'Uluslararası deniz hukuku ve denizcilik mevzuatı hakkında kapsamlı eğitim.',
    lessons: 30,
    progress: 75,
    color: 'bg-blue-600',
    image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: 2,
    name: 'Navigasyon Teknikleri',
    description: 'Modern navigasyon ekipmanları ve teknikleri üzerine detaylı eğitim.',
    lessons: 25,
    progress: 45,
    color: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1482440308425-276ad0f28b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: 3,
    name: 'Gemi Manevrası',
    description: 'Farklı koşullarda gemi manevra teknikleri ve uygulamaları.',
    lessons: 20,
    progress: 60,
    color: 'bg-green-600',
    image: 'https://images.unsplash.com/photo-1566375638495-4836da10955b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: 4,
    name: 'Meteoroloji',
    description: 'Deniz meteorolojisi ve hava tahmin sistemleri eğitimi.',
    lessons: 15,
    progress: 30,
    color: 'bg-purple-600',
    image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: 5,
    name: 'Deniz Güvenliği',
    description: 'ISPS kod ve deniz güvenliği prosedürleri eğitimi.',
    lessons: 28,
    progress: 20,
    color: 'bg-red-600',
    image: 'https://images.unsplash.com/photo-1559091169-7fa020a4f791?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: 6,
    name: 'Deniz İngilizcesi',
    description: 'Denizcilik İngilizcesi ve SMCP eğitimi.',
    lessons: 40,
    progress: 15,
    color: 'bg-indigo-600',
    image: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  }
];

const CoursePage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Kurslarım" />
        
        <main className="flex-1 overflow-auto p-8">
          {/* Filtreler ve Arama */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4">
              <select className="rounded-lg border-gray-300 text-gray-700 text-sm">
                <option>Tüm Kurslar</option>
                <option>Devam Edenler</option>
                <option>Tamamlananlar</option>
              </select>
              
              <select className="rounded-lg border-gray-300 text-gray-700 text-sm">
                <option>Sıralama</option>
                <option>En Yeni</option>
                <option>İlerleme</option>
              </select>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Kurs ara..."
                className="rounded-lg border-gray-300 pl-10 pr-4 py-2 text-sm w-64"
              />
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Kurs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
              <CourseGridCard key={course.id} course={course} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursePage; 