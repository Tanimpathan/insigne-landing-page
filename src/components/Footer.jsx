import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-16 text-gray-400">
      <div className="grid md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-2">
            <img src="/assets/round-logo.png" className="w-[50px] h-[50px]" />
            <div className="text-cyan-400 font-bold text-lg">Insignia</div>
          </div>
          <div className="mt-5 text-cyan-400">
            Insignia Society, 234
            <br />
            Dhaka Ave Street
          </div>
          <div className="mt-4 text-cyan-400">info@insignia.com</div>
        </div>
        <div>
          <h4 className="text-cyan-400 mb-2">About</h4>
          <ul className="space-y-1 text-cyan-400">
            <li>Profile</li>
            <li>Features</li>
          </ul>
        </div>
        <div>
          <h4 className="text-cyan-400 mb-2">Help</h4>
          <ul className="space-y-1 text-cyan-400">
            <li>Support</li>
            <li>Guide</li>
          </ul>
        </div>
        <div>
          <h4 className="text-cyan-400 mb-2">Social</h4>
          <div className="flex gap-3 text-cyan-400">
            Twitter · Facebook · Instagram
          </div>
        </div>
      </div>
    </footer>
  );
}
