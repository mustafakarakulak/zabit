import React from 'react';
import RegisterForm from '../components/RegisterForm';
import heroImage from '../assets/images/zabitler-sinav.webp';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sol taraf - Hero görsel */}
      <div className="hidden lg:flex w-1/2 bg-cover bg-center" 
           style={{backgroundImage: `url(${heroImage})`}}>
        <div className="w-full h-full bg-deniz-500 bg-opacity-10"></div>
      </div>

      {/* Sağ taraf - Kayıt formu */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Yeni Hesap Oluştur
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Denizcilik Eğitim Platformuna hoş geldiniz
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 