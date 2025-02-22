import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Overview from './pages/Overview';
import CoursePage from './pages/CoursePage';
import ResourcesPage from './pages/ResourcesPage';
import SettingsPage from './pages/SettingsPage';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/courses/:courseId/questions" element={<QuestionPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        {/* Diğer rotalar buraya eklenebilir */}
      </Routes>
    </Router>
  );
}

export default App;