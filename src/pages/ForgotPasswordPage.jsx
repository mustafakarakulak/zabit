import React from 'react';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import heroImage from '../assets/images/zabitler-sinav.webp';

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sol taraf - Hero görsel */}
      <div className="hidden lg:flex w-1/2 bg-cover bg-center" 
           style={{backgroundImage: `url(${heroImage})`}}>
        <div className="w-full h-full bg-deniz-500 bg-opacity-10"></div>
      </div>

      {/* Sağ taraf - Şifre sıfırlama formu */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Şifremi Unuttum
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Şifrenizi sıfırlamak için e-posta adresinizi girin
            </p>
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage; 