import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Örnek soru verisi - tüm kurslar için aynı sorular
const mockQuestions = [
  {
    id: 2898,
    text: "Can filikasında bulunan radar reflektörü ne işe yarar?",
    imageSrc: "",
    courseId: 5,
    subjectId: 10,
    questionType: 2,
    answers: [
      {
        answerText: "Gemi radarına filikamızın adını reflekte eder",
        isCorrect: false,
        label: "A"
      },
      {
        answerText: "Filikanın gemilerin radarında algılanmasını sağlar",
        isCorrect: true,
        label: "B"
      },
      {
        answerText: "Gemi radarlarına özel işaret vermeye yarar",
        isCorrect: false,
        label: "C"
      },
      {
        answerText: "Filika radarını çalıştırmaya yarar",
        isCorrect: false,
        label: "D"
      },
      {
        answerText: "Hiçbiri",
        isCorrect: false,
        label: "E"
      }
    ]
  },
  {
    id: 2899,
    text: "EPIRB cihazı hangi frekansta çalışır?",
    imageSrc: "",
    courseId: 5,
    subjectId: 10,
    questionType: 2,
    answers: [
      {
        answerText: "121.5 MHz",
        isCorrect: false,
        label: "A"
      },
      {
        answerText: "156.8 MHz",
        isCorrect: false,
        label: "B"
      },
      {
        answerText: "406 MHz",
        isCorrect: true,
        label: "C"
      },
      {
        answerText: "2182 kHz",
        isCorrect: false,
        label: "D"
      },
      {
        answerText: "Hiçbiri",
        isCorrect: false,
        label: "E"
      }
    ]
  }
];

const QuestionArea = ({ courseId }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Her kurs için aynı soruları kullan
    setQuestions(mockQuestions);
  }, [courseId]);

  const currentQuestion = questions[currentQuestionIndex];

  // Cevap seçme işlemi
  const handleAnswerSelect = (questionId, selectedAnswer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer
    }));
    setShowFeedback(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  // Sonraki soruya geçiş
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  // Önceki soruya dönüş
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Cevap seçeneği bileşeni
  const AnswerOption = ({ answer, questionId, isSelected, showFeedback }) => {
    const isCorrect = answer.isCorrect;
    const isSelectedAndCorrect = isSelected && isCorrect;
    const isSelectedAndIncorrect = isSelected && !isCorrect;

    return (
      <div 
        className={`
          relative p-4 mb-3 rounded-lg border transition-all cursor-pointer
          ${isSelectedAndCorrect ? 'border-green-500 bg-green-50' : ''}
          ${isSelectedAndIncorrect ? 'border-red-500 bg-red-50' : ''}
          ${!isSelected ? 'border-gray-200 hover:border-deniz-500 hover:bg-deniz-50' : ''}
        `}
        onClick={() => handleAnswerSelect(questionId, answer.label)}
      >
        <div className="flex items-center space-x-3">
          {/* Radio button */}
          <div className={`
            w-5 h-5 rounded-full border-2 flex items-center justify-center
            ${isSelectedAndCorrect ? 'border-green-500' : ''}
            ${isSelectedAndIncorrect ? 'border-red-500' : ''}
            ${!isSelected ? 'border-gray-300' : ''}
          `}>
            {isSelected && (
              <div className={`
                w-3 h-3 rounded-full
                ${isCorrect ? 'bg-green-500' : 'bg-red-500'}
              `} />
            )}
          </div>

          {/* Cevap etiketi ve metni */}
          <div className="flex-1">
            <span className="font-medium mr-2">{answer.label})</span>
            <span>{answer.answerText}</span>
          </div>

          {/* Doğru/Yanlış ikonu */}
          {showFeedback && isSelected && (
            isCorrect ? (
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
            ) : (
              <XCircleIcon className="w-6 h-6 text-red-500" />
            )
          )}
        </div>
      </div>
    );
  };

  if (!currentQuestion) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <p className="text-gray-500">Bu kurs için henüz soru bulunmamaktadır.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Soru kartı */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        {/* Soru başlığı ve numarası */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Soru {currentQuestionIndex + 1}
          </h2>
          <span className="text-sm text-gray-500">
            {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>

        {/* Soru metni */}
        <p className="text-gray-800 mb-6">{currentQuestion.text}</p>

        {/* Soru görseli (varsa) */}
        {currentQuestion.imageSrc && (
          <img 
            src={currentQuestion.imageSrc} 
            alt="Soru görseli"
            className="w-full rounded-lg mb-6"
          />
        )}

        {/* Cevap seçenekleri */}
        <div className="space-y-3">
          {currentQuestion.answers.map((answer) => (
            <AnswerOption
              key={answer.label}
              answer={answer}
              questionId={currentQuestion.id}
              isSelected={selectedAnswers[currentQuestion.id] === answer.label}
              showFeedback={showFeedback[currentQuestion.id]}
            />
          ))}
        </div>
      </div>

      {/* Navigasyon butonları */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
          className={`
            flex items-center px-4 py-2 rounded-lg text-sm font-medium
            ${currentQuestionIndex === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-deniz-50 text-deniz-600 hover:bg-deniz-100'}
          `}
        >
          <ChevronLeftIcon className="w-5 h-5 mr-1" />
          Önceki Soru
        </button>

        <button
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
          className={`
            flex items-center px-4 py-2 rounded-lg text-sm font-medium
            ${currentQuestionIndex === questions.length - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-deniz-50 text-deniz-600 hover:bg-deniz-100'}
          `}
        >
          Sonraki Soru
          <ChevronRightIcon className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default QuestionArea; 