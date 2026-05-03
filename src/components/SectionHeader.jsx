export default function SectionHeader({ tag, title, subtitle, center = true }) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="inline-block bg-green-50 text-[#0B6644] border border-green-200 text-xm font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide">
        {tag}
      </span>
      <h2 className={`text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4 ${center ? "mx-auto" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base text-gray-500 leading-relaxed ${center ? "max-w-lg mx-auto" : "max-w-lg"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
