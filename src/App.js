// PodcastPilot Enhanced Landing Page (React + TailwindCSS)
// Save this as src/App.js

import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0f6fb] text-gray-800 font-sans">
      {/* HERO SECTION */}
      <header className="text-center px-4 pt-16 pb-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/logo.png"
              alt="PodcastPilot AI Logo"
              className="w-24 mx-auto mb-4"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-4">
              Turn Your Podcast Into Viral Content — Effortlessly
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
              PodcastPilot AI analyzes your episodes and generates smart clips, titles, and platform-ready exports in seconds.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#features" className="bg-[#1e3a8a] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#374bb2] transition">
                See How It Works
              </a>
              <a href="#waitlist" className="border border-[#1e3a8a] text-[#1e3a8a] font-semibold py-3 px-6 rounded-lg hover:bg-[#1e3a8a] hover:text-white transition">
                Join the Waitlist
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/hero-podcast.png"
              alt="Podcasting in action"
              className="rounded-xl shadow-lg mx-auto max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </header>

      {/* VALUE LINE */}
      <section className="text-center text-lg font-semibold text-[#1e3a8a] py-6">
        Built for creators. Powered by purpose.
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Features</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: '🎬',
              title: 'Smart Clip Extraction',
              text: 'Automatically extract the most captivating moments tailored for short-form platforms.'
            },
            {
              icon: '💡',
              title: 'AI-Optimized Titles',
              text: 'Receive title suggestions crafted to maximize views and attract new audiences.'
            },
            {
              icon: '📦',
              title: 'Platform-Ready Exports',
              text: 'Clips and descriptions formatted for YouTube Shorts, TikTok, and Spotify.'
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-[#f0f6fb] p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-12 px-4 bg-[#f9fafb]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Creators Are Saying</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: 'Jamie R.',
              role: 'Tech Podcaster',
              quote: 'This tool saved me HOURS of editing. It’s like having a full-time assistant!'
            },
            {
              name: 'Maria G.',
              role: 'Health & Wellness Host',
              quote: 'My podcast traffic doubled after using the AI clip suggestions!'
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">“{testimonial.quote}”</p>
              <p className="font-semibold">— {testimonial.name}, <span className="text-sm font-normal text-gray-500">{testimonial.role}</span></p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
