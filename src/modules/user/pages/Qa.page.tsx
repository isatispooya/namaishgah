import React from "react";
import RandomQuiz from "../features/Qa.feature";

const QaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-5">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-2xl transition-all transform rtl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">
          آزمون تصادفی
        </h1>
        <p className="text-right text-gray-500 mb-8">
          سوالات را انتخاب کنید و جواب درست یا غلط را بلافاصله مشاهده کنید
        </p>
        <RandomQuiz />
      </div>
    </div>
  );
};

export default QaPage;
