import React, { useState, useEffect } from 'react';
import './Games.css';



const quizQuestions = [
  {
    question: 'Qual a especialidade da Rede Ancora?',
    options: [
      "Desenvolvimento de Software",
      "Peças Automotivas",
      "Serviços de Saúde",
      "Serviços Educacionais"
    ],
    answer: 'Peças Automotivas'
  },
  {
    question: 'Qual benefício é oferecido aos franqueados pela Rede ANCORA?',
    options: [
      'Acesso a negociações especiais com fabricantes',
      'Publicidade gratuita nas redes sociais',
      'Bônus anuais',
      'Seguro de saúde para funcionários'
    ],
    answer: 'Acesso a negociações especiais com fabricantes'
  },
  {
    question: 'Onde está localizada a sede da Rede ANCORA?',
    options: [
      'São Paulo',
      'Rio de Janeiro',
      'Salvador',
      'Fortaleza'
    ],
    answer: 'Salvador'
  },
];

const Games: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      handleNextQuestion();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswerOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setTimeLeft(10);
    setIsCorrect(null);
    setSelectedOption('');
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
  
   <div className="quiz-container bg-gray-200">
      <h1>Quiz sobre a Rede Ancora</h1>
      {showScore ? (
        <div className="score-section">
          Você acertou {score} de {quizQuestions.length}
        </div>
      ) : (
        <div className="quiz">
          <div className="question-section">
            <div className="question-count">
              <span>Questão{currentQuestion + 1}</span>/{quizQuestions.length}
            </div>
            <div className="question-text">{quizQuestions[currentQuestion].question}</div>
            <div className="timer">
              Tempo restante: {timeLeft < 10 ? `0${timeLeft}` : timeLeft}
            </div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedOption
                    ? option === quizQuestions[currentQuestion].answer
                      ? 'correct'
                      : option === selectedOption
                      ? 'incorrect'
                      : ''
                    : ''
                }`}
                onClick={() => handleAnswerOptionClick(option)}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <button onClick={handleNextQuestion} className="next-button">
              Próxima pergunta
            </button>
          )}
        </div>
      )}
    </div>
    
  );
};

export default Games;
