import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { quizQuestions, quizResults } from "../data/quiz";

function QuizResult({ result, onRestart }) {
  const IconComponent = result.icon;

  return (
    <div className="text-center py-10 px-6 sm:px-12">
      {/* Icon */}
      <div
        className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner"
        style={{ background: result.bgColor }}
      >
        <IconComponent color={result.strokeColor} size={42} />
      </div>

      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
        Sizga mos yo'nalish
      </p>
      <h3 className="text-3xl font-black mb-4" style={{ color: result.color }}>
        {result.direction}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto mb-6">
        {result.desc}
      </p>

      <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto mb-8">
        <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
          <p className="text-xs text-gray-400 mb-0.5">O'rtacha maosh</p>
          <p className="text-sm font-bold text-gray-800">{result.salary}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
          <p className="text-xs text-gray-400 mb-0.5">Kurs davri</p>
          <p className="text-sm font-bold text-gray-800">{result.duration}</p>
        </div>
      </div>

      <div className="flex gap-3 justify-center flex-wrap">
        <a
          href="#signup"
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3 rounded-xl transition-all text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200"
        >
          Kursga yozilish →
        </a>
        <button
          onClick={onRestart}
          className="bg-white border-2 border-gray-200 text-gray-700 font-bold px-7 py-3 rounded-xl hover:border-green-300 hover:text-green-600 transition-all text-sm"
        >
          Qayta urinish
        </button>
      </div>
    </div>
  );
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const isDone = step >= quizQuestions.length;

  function selectOption(value) {
    setAnswers((prev) => ({ ...prev, [step]: value }));
  }

  function goNext() {
    if (step < quizQuestions.length - 1) {
      setStep((s) => s + 1);
    } else {
      const counts = {};
      Object.values(answers).forEach((v) => {
        counts[v] = (counts[v] || 0) + 1;
      });
      const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
      setResult(quizResults[top?.[0]] || quizResults["frontend"]);
      setStep(quizQuestions.length);
    }
  }

  function goBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  function restart() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  const currentQ = quizQuestions[step];
  const progress = (step / quizQuestions.length) * 100;

  return (
    <section id="quiz" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          tag="O'zingizni sinab ko'ring"
          title="IT yo'nalishingizni toping"
          subtitle="8 ta savol orqali siz uchun eng mos IT kasb yo'nalishini aniqlaymiz"
        />

        <div className="max-w-2xl mx-auto mt-14">
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden">
            {/* Header progress */}
            {!isDone && (
              <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 p-7 text-white">
                <div className="flex gap-2 mb-5">
                  {quizQuestions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        i < step
                          ? "bg-white"
                          : i === step
                            ? "bg-white/80"
                            : "bg-white/25"
                      }`}
                    />
                  ))}
                </div>
                <div className="h-0.5 bg-white/20 rounded-full mb-5 overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">
                  Savol {step + 1} / {quizQuestions.length}
                </p>
                <p className="text-white text-xl font-bold leading-snug">
                  {currentQ.question}
                </p>
              </div>
            )}

            {/* Body */}
            {isDone ? (
              <QuizResult result={result} onRestart={restart} />
            ) : (
              <>
                <div className="p-7">
                  <div className="flex flex-col gap-3">
                    {currentQ.options.map((opt, i) => {
                      const isSelected = answers[step] === opt.value;
                      return (
                        <button
                          key={i}
                          onClick={() => selectOption(opt.value)}
                          className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                            isSelected
                              ? "border-green-500 bg-green-50 shadow-sm shadow-green-100"
                              : "border-gray-100 hover:border-green-200 hover:bg-green-50/50"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                              isSelected
                                ? "border-green-600 bg-green-600"
                                : "border-gray-300"
                            }`}
                          >
                            {isSelected && (
                              <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                          </div>
                          <span
                            className={`text-sm font-semibold ${
                              isSelected ? "text-green-800" : "text-gray-700"
                            }`}
                          >
                            {opt.text}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-7 py-5 border-t border-gray-50">
                  <button
                    onClick={goBack}
                    disabled={step === 0}
                    className={`text-sm font-bold px-5 py-2.5 rounded-xl border-2 transition-all ${
                      step === 0
                        ? "border-gray-100 text-gray-300 cursor-not-allowed"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800"
                    }`}
                  >
                    ← Orqaga
                  </button>
                  <span className="text-xs text-gray-300 font-medium">
                    {Object.keys(answers).length} / {quizQuestions.length}{" "}
                    javoblandi
                  </span>
                  <button
                    onClick={goNext}
                    disabled={answers[step] === undefined}
                    className={`text-sm font-bold px-6 py-2.5 rounded-xl transition-all ${
                      answers[step] !== undefined
                        ? "bg-green-600 text-white hover:bg-green-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200"
                        : "bg-gray-100 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    {step === quizQuestions.length - 1
                      ? "Natijani ko'rish"
                      : "Keyingi →"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
