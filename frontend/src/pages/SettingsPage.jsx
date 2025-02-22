import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SettingsSection from '../components/SettingsSection';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const personalInfo = {
  title: 'Kişisel Bilgiler',
  items: [
    { label: 'İsim', value: 'Kaptan Ahmet Yılmaz' },
    { label: 'E-posta', value: 'kaptan.ahmet@email.com' },
    { label: 'Telefon', value: '+90 555 123 4567' }
  ]
};

const accountSettings = {
  title: 'Hesap Ayarları',
  items: [
    { label: 'Dil', value: 'Türkçe' },
    { label: 'Saat Dilimi', value: 'Istanbul (GMT+3)' },
    { label: 'Üyelik', value: 'Premium Plan' }
  ]
};

const notificationSettings = {
  title: 'Bildirim Ayarları',
  items: [
    { label: 'E-posta Bildirimleri', value: 'Aktif' },
    { label: 'SMS Bildirimleri', value: 'Pasif' },
    { label: 'Uygulama Bildirimleri', value: 'Aktif' }
  ]
};

const SettingsPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Ayarlar" />
        
        <main className="flex-1 overflow-auto p-8">
          {/* Profil Özeti */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <UserCircleIcon className="w-16 h-16 text-gray-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Kaptan Ahmet Yılmaz</h2>
                <p className="text-sm text-gray-500">Premium Üye</p>
              </div>
            </div>
          </div>

          {/* Ayarlar Bölümleri */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SettingsSection {...personalInfo} />
            <SettingsSection {...accountSettings} />
            <SettingsSection {...notificationSettings} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage; 