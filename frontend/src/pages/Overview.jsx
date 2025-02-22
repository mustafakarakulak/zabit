import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';

const courses = [
  {
    id: 1,
    name: 'Deniz Hukuku',
    lessons: 30,
    progress: 75,
    color: 'bg-blue-500',
    icon: AcademicCapIcon
  },
  {
    id: 2,
    name: 'Navigasyon',
    lessons: 25,
    progress: 45,
    color: 'bg-orange-500',
    icon: TrophyIcon
  },
  {
    id: 3,
    name: 'Gemi Manevrası',
    lessons: 20,
    progress: 60,
    color: 'bg-green-500',
    icon: AcademicCapIcon
  },
  {
    id: 4,
    name: 'Meteoroloji',
    lessons: 15,
    progress: 30,
    color: 'bg-purple-500',
    icon: TrophyIcon
  }
];

const statistics = [
  {
    title: 'Courses Completed',
    value: '02',
    subtitle: 'Tamamlanan Kurslar',
    color: 'bg-blue-50'
  },
  {
    title: 'Total Points Gained',
    value: '250',
    subtitle: 'Kazanılan Puanlar',
    color: 'bg-blue-50'
  },
  {
    title: 'Courses In Progress',
    value: '03',
    subtitle: 'Devam Eden Kurslar',
    color: 'bg-blue-50'
  },
  {
    title: 'Tasks Finished',
    value: '05',
    subtitle: 'Tamamlanan Görevler',
    color: 'bg-blue-50'
  }
];

// Activity verisi için mock data
const activityData = {
  daily: {
    data: [
      { day: 'Mon', hours: 4.5, tasks: 6 },
      { day: 'Tue', hours: 3.8, tasks: 5 },
      { day: 'Wed', hours: 5.1, tasks: 7 },
      { day: 'Thu', hours: 4.5, tasks: 6 },
      { day: 'Fri', hours: 3.2, tasks: 4 },
      { day: 'Sat', hours: 2.5, tasks: 3 },
      { day: 'Sun', hours: 1.0, tasks: 1 }
    ],
    maxHours: 5.1
  },
  weekly: {
    data: [
      { week: 'W1', hours: 15.5, tasks: 18 },
      { week: 'W2', hours: 18.2, tasks: 22 },
      { week: 'W3', hours: 12.8, tasks: 15 },
      { week: 'W4', hours: 20.5, tasks: 25 }
    ],
    maxHours: 20.5
  },
  monthly: {
    data: [
      { month: 'Jan', hours: 65.5, tasks: 78 },
      { month: 'Feb', hours: 72.3, tasks: 85 },
      { month: 'Mar', hours: 58.8, tasks: 65 }
    ],
    maxHours: 72.3
  }
};

const Overview = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('daily');
  const currentActivity = activityData[activeTimeframe];
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}/questions`);
  };

  const handleViewAllClick = () => {
    navigate('/courses');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Overview" />
        
        <main className="flex-1 overflow-auto p-8">
          {/* Karşılama Metni */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Hoş geldin, Kaptan Ahmet!
            </h1>
            <p className="text-gray-600">
              Eğitimlerine kaldığın yerden devam et.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sol Taraf - Kurslar */}
            <div className="lg:flex-[2]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  My Courses
                </h2>
                <button 
                  onClick={handleViewAllClick}
                  className="text-deniz-600 hover:text-deniz-700 text-sm"
                >
                  View all
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map(course => (
                  <div key={course.id} onClick={() => handleCourseClick(course.id)}>
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ Taraf - İstatistikler */}
            <div className="lg:flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Statistics
              </h2>
              
              {/* İstatistik Kartları */}
              <div className="grid grid-cols-2 gap-6">
                {statistics.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`${stat.color} rounded-xl p-4 flex flex-col items-center justify-center text-center`}
                  >
                    <span className="text-3xl font-bold text-blue-600 mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-600">
                      {stat.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Activity Chart */}
              <div className="mt-8 bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Activity</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {activeTimeframe === 'daily' && 'Son 7 günlük aktivite'}
                      {activeTimeframe === 'weekly' && 'Son 4 haftalık aktivite'}
                      {activeTimeframe === 'monthly' && 'Son 3 aylık aktivite'}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setActiveTimeframe('daily')}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        activeTimeframe === 'daily' 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      Day
                    </button>
                    <button 
                      onClick={() => setActiveTimeframe('weekly')}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        activeTimeframe === 'weekly' 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      Week
                    </button>
                    <button 
                      onClick={() => setActiveTimeframe('monthly')}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        activeTimeframe === 'monthly' 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      Month
                    </button>
                  </div>
                </div>
                
                {/* Çubuk Grafik Alanı */}
                <div className="h-40 flex items-end justify-between">
                  {currentActivity.data.map((item, i) => {
                    const maxHours = currentActivity.maxHours;
                    // Yüksekliği yüzdesel hesapla, min %10, max %85
                    const heightPercentage = Math.max(
                      10,
                      (item.hours / maxHours) * 85
                    );

                    return (
                      <div key={i} className="flex flex-col items-center">
                        <div className="relative group">
                          {/* ÇUBUĞUN KENDİSİ */}
                          <div 
                            className="w-8 bg-blue-500 rounded-t-lg transition-all group-hover:bg-blue-600"
                            style={{ height: `${heightPercentage}%` }}
                          />
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                            <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                              <p>{item.hours} saat</p>
                              <p>{item.tasks} görev</p>
                            </div>
                          </div>
                        </div>
                        {/* Gün/Hafta/Ay etiketleri */}
                        <span className="mt-2 text-xs text-gray-500">
                          {item[
                            activeTimeframe === 'daily'
                              ? 'day'
                              : activeTimeframe === 'weekly'
                              ? 'week'
                              : 'month'
                          ]}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Toplam İstatistikler */}
                <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Toplam Süre</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {currentActivity.data
                        .reduce((acc, curr) => acc + curr.hours, 0)
                        .toFixed(1)} saat
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Tamamlanan Görev</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {currentActivity.data
                        .reduce((acc, curr) => acc + curr.tasks, 0)} görev
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Ortalama/Gün</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {(
                        currentActivity.data.reduce(
                          (acc, curr) => acc + curr.hours,
                          0
                        ) / currentActivity.data.length
                      ).toFixed(1)} saat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Overview;
