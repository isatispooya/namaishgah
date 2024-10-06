import React, { useState, useEffect } from "react";
import { Qa } from "../types";
import { Qas } from "../data/Qa.data";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const RandomQuiz: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<Qa[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [results, setResults] = useState<{ [key: number]: boolean }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [particlesType, setParticlesType] = useState<
    "correct" | "incorrect" | null
  >(null);

  useEffect(() => {
    const randomQuestions = Qas.sort(() => 0.5 - Math.random()).slice(0, 2);
    setSelectedQuestions(randomQuestions);
  }, []);

  const handleSelect = (questionIndex: number, answerIndex: number) => {
    const isCorrect =
      selectedQuestions[questionIndex].answer[answerIndex].correct;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]:
        selectedQuestions[questionIndex].answer[answerIndex].content,
    }));
    setResults((prev) => ({ ...prev, [questionIndex]: isCorrect }));
    setShowNextButton(true);

    // تنظیم افکت ذرات براساس درست یا غلط بودن پاسخ
    if (isCorrect) {
      setParticlesType("correct");
    } else {
      setParticlesType("incorrect");
    }
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 2000); // بعد از 2 ثانیه افکت را حذف کن
  };

  const handleNextQuestion = () => {
    setShowNextButton(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setParticlesType(null); // بازنشانی ذرات
  };

  // انیمیشن ذرات برای پاسخ صحیح
  const correctParticlesAnimation = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: [1, 0],
      y: [-20, -150],
      transition: { duration: 2, ease: "easeOut", repeat: 0 },
    },
  };

  // انیمیشن ذرات برای پاسخ غلط
  const incorrectParticlesAnimation = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: [1, 0],
      y: [0, 150],
      transition: { duration: 2, ease: "easeInOut", repeat: 0 },
    },
  };

  return (
    <div className="quiz-container rtl relative">
      {/* افکت برای پاسخ صحیح */}
      {showParticles && particlesType === "correct" && (
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={correctParticlesAnimation}
        >
          {/* ذرات برای پاسخ درست */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="w-8 h-8 bg-green-500 rounded-full"
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [1, 0],
                scale: [0.5, 1],
                transition: {
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                },
              }}
            />
          ))}
        </motion.div>
      )}

      {/* افکت برای پاسخ غلط */}
      {showParticles && particlesType === "incorrect" && (
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={incorrectParticlesAnimation}
        >
          {/* ذرات برای پاسخ غلط */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="w-8 h-8 bg-red-500 rounded-full"
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [1, 0],
                scale: [0.5, 1],
                transition: {
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                },
              }}
            />
          ))}
        </motion.div>
      )}

      {selectedQuestions.length > 0 &&
        currentQuestionIndex < selectedQuestions.length && (
          <motion.div
            key={currentQuestionIndex}
            className={`question-block relative mb-8 p-6 rounded-lg shadow-lg transition-all duration-500 text-right bg-white`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="flex flex-row-reverse items-center mb-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <FaQuestionCircle className="text-2xl text-blue-500 ml-2" />
              <h2 className="text-lg font-medium text-gray-700">
                {selectedQuestions[currentQuestionIndex].question}
              </h2>
            </motion.div>

            <div className="answer-options flex flex-col justify-center gap-y-3">
              {selectedQuestions[currentQuestionIndex].answer.map(
                (answer, answerIndex) => {
                  const isCorrect =
                    selectedQuestions[currentQuestionIndex].answer[answerIndex]
                      .correct;
                  const isSelected =
                    selectedAnswers[currentQuestionIndex] === answer.content;

                  return (
                    <motion.button
                      key={answerIndex}
                      className={`px-4 py-2 rounded-md text-sm flex-1 shadow-sm flex items-center justify-center text-center transition-all duration-300 ease-in-out ${
                        isSelected
                          ? isCorrect
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                          : "bg-blue-500 text-white hover:bg-blue-600"
                      } ${
                        selectedAnswers[currentQuestionIndex] !== undefined &&
                        !isSelected
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={
                        selectedAnswers[currentQuestionIndex] !== undefined
                      }
                      onClick={() =>
                        handleSelect(currentQuestionIndex, answerIndex)
                      }
                    >
                      <span>{answer.content}</span>
                      {isSelected && (
                        <span className="ml-2">
                          {isCorrect ? (
                            <FaCheckCircle className="text-white" />
                          ) : (
                            <FaTimesCircle className="text-white" />
                          )}
                        </span>
                      )}
                    </motion.button>
                  );
                }
              )}
            </div>

            {results[currentQuestionIndex] !== undefined && (
              <motion.p
                className={`mt-4 text-md font-medium ${
                  results[currentQuestionIndex]
                    ? "text-green-700"
                    : "text-red-700"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {results[currentQuestionIndex]
                  ? "پاسخ صحیح است"
                  : "پاسخ غلط است"}
              </motion.p>
            )}

            {showNextButton &&
              currentQuestionIndex < selectedQuestions.length - 1 && (
                <motion.button
                  className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
                  onClick={handleNextQuestion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  سوال بعدی
                </motion.button>
              )}
          </motion.div>
        )}
    </div>
  );
};

export default RandomQuiz;
