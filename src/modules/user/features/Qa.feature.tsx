import React, { useState, useEffect } from "react";
import { Qa } from "../types";
import { Qas } from "../data/Qa.data";
import { motion } from "framer-motion"; // برای انیمیشن Framer Motion
import { FaQuestionCircle, FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // آیکن سوال و آیکن‌های تیک و ضربدر

const RandomQuiz: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<Qa[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [results, setResults] = useState<{ [key: number]: boolean }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false); // کنترل نمایش دکمه "سوال بعدی"

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
    setShowNextButton(true); // بعد از انتخاب جواب، دکمه سوال بعدی نمایش داده شود
  };

  const handleNextQuestion = () => {
    setShowNextButton(false); // دکمه سوال بعدی را مخفی کن
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // سوال بعدی
  };

  return (
    <div className="quiz-container rtl">
      {selectedQuestions.length > 0 &&
        currentQuestionIndex < selectedQuestions.length && (
          <motion.div
            key={currentQuestionIndex}
            className={`question-block relative mb-8 p-6 rounded-lg shadow-lg transition-all duration-500 text-right ${
              results[currentQuestionIndex] !== undefined
                ? results[currentQuestionIndex]
                  ? "bg-green-50 border-green-300"
                  : "bg-red-50 border-red-300"
                : "bg-white"
            }`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* بخش سوال همراه با آیکن */}
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

            <div className="answer-options flex justify-between gap-x-3">
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
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#2563EB",
                        color: "#fff",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-md text-sm flex-1 shadow-sm flex items-center justify-between transition-all duration-300 ease-in-out ${
                        selectedAnswers[currentQuestionIndex] !== undefined
                          ? isSelected
                            ? isCorrect
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-blue-500 text-white hover:bg-blue-600"
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

            {/* دکمه سوال بعدی */}
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
