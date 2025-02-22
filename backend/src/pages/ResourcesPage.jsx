import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ResourceCard from '../components/ResourceCard';

const resources = [
  {
    id: 1,
    title: 'IMO Kuralları',
    description: 'Uluslararası Denizcilik Örgütü kuralları ve düzenlemeleri',
    type: 'PDF',
    color: 'bg-blue-500',
    downloadUrl: '#'
  },
  {
    id: 2,
    title: 'SOLAS Rehberi',
    description: 'Denizde Can Güvenliği Uluslararası Sözleşmesi',
    type: 'DOC',
    color: 'bg-orange-500',
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'MARPOL Dökümanı',
    description: 'Denizlerin Gemiler Tarafından Kirletilmesinin Önlenmesi',
    type: 'PDF',
    color: 'bg-green-500',
    downloadUrl: '#'
  },
  {
    id: 4,
    title: 'ISM Kod',
    description: 'Uluslararası Güvenlik Yönetimi Kodu',
    type: 'PDF',
    color: 'bg-purple-500',
    downloadUrl: '#'
  },
  {
    id: 5,
    title: 'ISPS Kod',
    description: 'Uluslararası Gemi ve Liman Tesisi Güvenlik Kodu',
    type: 'DOC',
    color: 'bg-red-500',
    downloadUrl: '#'
  },
  {
    id: 6,
    title: 'STCW Konvansiyonu',
    description: 'Gemi Adamları Eğitim ve Belgelendirme Standartları',
    type: 'PDF',
    color: 'bg-indigo-500',
    downloadUrl: '#'
  }
];

const ResourcesPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Kaynaklar" />
        
        <main className="flex-1 overflow-auto p-8">
          {/* Arama ve Filtreler */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4">
              <select className="rounded-lg border-gray-300 text-gray-700 text-sm">
                <option>Tüm Dökümanlar</option>
                <option>PDF Dosyaları</option>
                <option>Word Dosyaları</option>
              </select>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Kaynak ara..."
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

          {/* Kaynaklar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResourcesPage; 