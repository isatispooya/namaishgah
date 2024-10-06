import React from "react";
import RandomQuiz from "../features/Qa.feature";

const QaPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 relative overflow-hidden">
      {/* استایل‌ها */}
      <style>{`
        @keyframes moveIcons {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-50px) rotate(20deg) scale(1.1);
          }
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        .icon {
          position: absolute;
          font-size: 80px;
          opacity: 0.1;
          animation: moveIcons 6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
          filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
        }

        /* موقعیت دادن به آیکون‌ها دور تا دور صفحه */
        .top-left {
          top: 10%;
          left: 5%;
        }

        .top-right {
          top: 10%;
          right: 5%;
        }

        .bottom-left {
          bottom: 10%;
          left: 5%;
        }

        .bottom-right {
          bottom: 10%;
          right: 5%;
        }

        .middle-left {
          top: 50%;
          left: 2%;
          transform: translateY(-50%);
        }

        .middle-right {
          top: 50%;
          right: 2%;
          transform: translateY(-50%);
        }

        .top-middle {
          top: 2%;
          left: 50%;
          transform: translateX(-50%);
        }

        .bottom-middle {
          bottom: 2%;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>

      {/* آیکون‌های متحرک در اطراف صفحه */}
      <div className="icon top-left">❓</div> {/* علامت سوال */}
      <div className="icon top-right">✔️</div> {/* علامت تیک */}
      <div className="icon bottom-left">❌</div> {/* علامت ضربدر */}
      <div className="icon bottom-right">❓</div> {/* علامت سوال */}
      <div className="icon middle-left">✔️</div> {/* علامت تیک */}
      <div className="icon middle-right">❌</div> {/* علامت ضربدر */}
      <div className="icon top-middle">❓</div> {/* علامت سوال */}
      <div className="icon bottom-middle">✔️</div> {/* علامت تیک */}

      {/* باکس آزمون */}
      <div className="relative bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transition-all transform rtl z-10">
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
