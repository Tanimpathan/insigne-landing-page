import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Subscribe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus("loading");
    try {
      // change URL to your Laravel endpoint
      await axios.post("https://your-laravel-backend.test/api/subscribe", {
        email: data.email,
      });
      setStatus("ok");
      reset();
    } catch (err) {
      setStatus("err");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-cyan-400 font-semibold text-xl">Subscribe!</h4>
          <p className="text-gray-400 mt-2">
            Join our newsletter to never miss any latest news.
          </p>
        </div>

        <form
          className="flex gap-2 p-1 items-center bg-[#ffffff0a] rounded-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            })}
            className="px-4 py-2 text-white focus:outline-none	"
            placeholder="Enter your e-mail address here"
          />
          <button className="cursor-pointer text-white text-sm bg-[#8080801f] shadow-xl shadow-[0_25px_50px_-12px_#000] px-4 py-2 rounded-full font-medium">
              Join us
          </button>
        </form>
      </div>

      <div className="mt-2">
        {status === "loading" && (
          <div className="text-gray-400">Sending...</div>
        )}
        {status === "ok" && <div className="text-green-400">Subscribed!</div>}
        {status === "err" && (
          <div className="text-red-400">Something went wrong.</div>
        )}
      </div>
    </section>
  );
}
