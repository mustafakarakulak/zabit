import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BellIcon, 
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

// Mock notifications verisi
const mockNotifications = [
  {
    id: 1,
    title: 'Yeni Kurs Eklendi',
    message: 'STCW Güncelleme kursu sisteme eklendi.',
    time: '5 dakika önce',
    unread: true
  },
  {
    id: 2,
    title: 'Sınav Hatırlatması',
    message: 'Deniz Hukuku sınavınız yarın başlayacak.',
    time: '1 saat önce',
    unread: true
  },
  {
    id: 3,
    title: 'Başarı Rozeti',
    message: 'Navigasyon kursunu tamamladınız!',
    time: '2 saat önce',
    unread: true
  }
];

const Header = ({ title }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleLogout = () => {
    // Çıkış işlemleri burada yapılacak
    navigate('/');
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        
        <div className="flex items-center space-x-6">
          {/* Bildirimler Dropdown */}
          <div className="relative">
            <button 
              className="text-gray-600 hover:text-gray-900 relative"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
            >
              <BellIcon className="w-6 h-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs text-white flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && notifications.length > 0 && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100">
                  <h3 className="font-semibold text-gray-900">Bildirimler</h3>
                  <button 
                    onClick={markAllAsRead}
                    className="text-sm text-deniz-600 hover:text-deniz-700"
                  >
                    Tümünü Okundu İşaretle
                  </button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`px-4 py-3 hover:bg-gray-50 ${notification.unread ? 'bg-blue-50' : ''}`}
                    >
                      <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                      <p className="text-sm text-gray-500">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Kullanıcı Profili Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200"
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
            >
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Kaptan Ahmet</p>
                <p className="text-xs text-gray-500">Premium Üye</p>
              </div>
              <UserCircleIcon className="w-8 h-8 text-gray-400" />
              <ChevronDownIcon className="w-4 h-4 text-gray-400" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                <button 
                  onClick={() => navigate('/settings')}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <Cog6ToothIcon className="w-4 h-4 mr-2" />
                  Ayarlar
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                >
                  <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                  Çıkış Yap
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 