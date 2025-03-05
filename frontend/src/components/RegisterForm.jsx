import React, { useState } from 'react';

const RegisterForm = () => {
  // Dropdown’da listelenecek sınıflar
  const classOptions = [
    "Elektro Teknik Zabiti",
    "General Operator",
    "ROC",
    "Sınırlı Baş Makinist",
    "Stcw",
    "Uzak yol 2.Mühendis",
    "Uzak yol Başmuhendis",
    "Uzak yol Kaptan",
    "Uzak yol Vardiya Zabiti",
    "Yat Kaptanı Sınırsız"
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    userClass: '' // yeni eklenen alan
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Ad Soyad gereklidir';
    }

    if (!formData.email) {
      newErrors.email = 'E-posta adresi gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!formData.password) {
      newErrors.password = 'Şifre gereklidir';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalıdır';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifreler eşleşmiyor';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Telefon numarası gereklidir';
    }

    // userClass boş geçilmemişse kontrol
    if (!formData.userClass) {
      newErrors.userClass = 'Lütfen bir sınıf seçiniz';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form verilerini backend’e gönder
      console.log('Form gönderildi:', formData);

      // fetch veya axios ile örnek istek (POST)
      /*
      fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then((res) => res.json())
      .then((data) => {
         console.log('Kayıt başarılı:', data);
      })
      .catch((error) => {
         console.error('Kayıt hatası:', error);
      });
      */
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Ad Soyad */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Ad Soyad
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deniz-500 focus:ring-deniz-500"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* E-posta */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-posta Adresi
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deniz-500 focus:ring-deniz-500"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Telefon Numarası */}
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Telefon Numarası
        </label>
        <input
          type="tel"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deniz-500 focus:ring-deniz-500"
        />
        {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
      </div>

      {/* Şifre */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Şifre
        </label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deniz-500 focus:ring-deniz-500"
        />
        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
      </div>

      {/* Şifre Tekrar */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Şifre Tekrar
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deniz-500 focus:ring-deniz-500"
        />
        {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
      </div>

      {/* Sınıfınızı Seçiniz */}
      <div>
        <label htmlFor="userClass" className="block text-sm font-medium text-gray-700">
          Sınıfınızı Seçiniz
        </label>
        <select
          id="userClass"
          value={formData.userClass}
          onChange={(e) => setFormData({ ...formData, userClass: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deniz-500 focus:ring-deniz-500"
        >
          <option value="">Lütfen bir sınıf seçiniz</option>
          {classOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.userClass && <p className="mt-1 text-sm text-red-600">{errors.userClass}</p>}
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-deniz-500 hover:bg-deniz-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deniz-500"
      >
        Kayıt Ol
      </button>

      <div className="text-center mt-4">
        <a href="/" className="text-sm text-deniz-500 hover:text-deniz-700">
          Zaten hesabınız var mı? Giriş yapın
        </a>
      </div>
    </form>
  );
};

export default RegisterForm;
