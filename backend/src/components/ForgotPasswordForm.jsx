import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('E-posta adresi gereklidir');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Geçerli bir e-posta adresi giriniz');
      return;
    }
    
    // Başarılı durumu simüle ediyoruz
    setSuccess(true);
    setError('');
    console.log('Şifre sıfırlama e-postası gönderildi:', email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-posta Adresi
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deniz-500 focus:ring-deniz-500"
          placeholder="ornek@email.com"
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>

      {success ? (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-deniz-500 hover:bg-deniz-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deniz-500"
        >
          Şifre Sıfırlama Bağlantısı Gönder
        </button>
      )}

      <div className="text-center">
        <a href="/" className="text-sm text-deniz-500 hover:text-deniz-700">
          Giriş sayfasına dön
        </a>
      </div>
    </form>
  );
};

export default ForgotPasswordForm; 