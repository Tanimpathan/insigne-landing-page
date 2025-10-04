import { ArrowRight, Album } from "lucide-react"

export default function FeatureCard({item}) {

  return (
    <section className="h-[300px]">
      <div className="mb-4">
        <div className="flex justify-center">
            <Album className="w-[80px] h-[100px]"/>
        </div>
        </div>
        <h3 className="text-cyan-400 font-semibold">{item.title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{item.text}</p>
        <button className="hidden md:flex gap-2 cursor-pointer text-cyan-400 font-medium mt-[50px]">
            Request Demo
            <ArrowRight className="w-[16px] text-[#dd45dd]"/>
        </button>
    </section>
  );
}