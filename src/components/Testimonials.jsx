import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TESTS = [
  { name: "John Fang", role: "Web Designer", text: "Great product!" },
  { name: "Jenny Doe", role: "UI Designer", text: "Amazing UX." },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-3xl text-cyan-400 font-bold mb-6">Testimonials</h3>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation
      >
        {TESTS.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-800 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-cyan-400">{t.role}</div>
                </div>
              </div>
              <p className="text-gray-300 mt-4">{t.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
