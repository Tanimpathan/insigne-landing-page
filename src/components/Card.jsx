export default function Card({ children }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 h-[350px] bg-[#ffffff0a] shadow-inner rounded-2xl px-10 py-8 md:py-16">
      {children}
    </div>
  );
}
