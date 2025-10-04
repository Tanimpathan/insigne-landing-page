import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { Pagination, Navigation } from "swiper/modules";
import FeatureCard from "./FeatureCard";

const FEATURES = [
  { title: "Search Data", text: "Dont worry if your data is very large. Insigne has a feature of search engine which is useful to making it easier to find data." },
  { title: "Print Out", text: "Dont worry if your data is very large. Insigne has a feature of search engine which is useful to making it easier to find data." },
  { title: "Security Code", text: "Dont worry if your data is very large. Insigne has a feature of search engine which is useful to making it easier to find data." },
  { title: "Search Data", text: "Dont worry if your data is very large. Insigne has a feature of search engine which is useful to making it easier to find data." },
  { title: "Print Out", text: "Dont worry if your data is very large. Insigne has a feature of search engine which is useful to making it easier to find data." },
  { title: "Security Code", text: "Dont worry if your data is very large. Insigne has a feature of search engine which is useful to making it easier to find data." },
];

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-10 py-12 bg-[#ffffff0a] shadow-inner rounded-2xl">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">Features</h2>

        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          className="py-4"
        >
          {FEATURES.map((f, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-gray-800 rounded-2xl p-6 h-full"
              >

                <FeatureCard item={f}/>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
}
