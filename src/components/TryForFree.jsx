import { ArrowRight } from "lucide-react"

export default function TryForFree() {

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-cyan-400 font-semibold text-xl">Try for free!</h4>
          <p className="text-gray-400 mt-2">
            Get limited 1 week free try our feature
          </p>
        </div>

        <div className="flex items-center gap-2 ">
          <button className="self-auto cursor-pointer text-white text-sm bg-[#8080801f] shadow-xl shadow-[0_25px_50px_-12px_#000] px-4 py-2 rounded-full font-medium">
              Learn more
          </button>
          <button className="self-auto flex gap-2 cursor-pointer text-[#dd45dd] text-sm bg-[#8080801f] shadow-xl shadow-[0_25px_50px_-12px_#000] px-4 py-2 rounded-full font-medium">
              Request Demo
              <ArrowRight className="w-[16px] text-[#dd45dd]"/>
          </button>
        </div>
      </div>
    </section>
  );
}
