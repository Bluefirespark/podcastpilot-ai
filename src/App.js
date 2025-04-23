// PodcastPilot Enhanced Landing Page — Updated Design
// Save this as src/App.js

import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0f6fb] text-gray-800 font-sans">
      {/* HERO SECTION */}
      <header className="text-center px-4 pt-16 pb-10 bg-[#eaf4fc]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <img
              src="/logo.png"
              alt="PodcastPilot AI Logo"
              className="w-28 mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-4">
              Turn Your Podcast Episodes Into Viral Content — Effortlessly
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
              PodcastPilot AI automatically extracts key moments, writes click-worthy titles, and prepares clips for all platforms — no editing required.
            </p>
            <a
              href="#features"
              className="bg-[#1e3a8a] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#374bb2] transition"
            >
              See How It Works
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="/hero-podcast.png"
              alt="Podcasting in action"
              className="rounded-xl shadow-md mx-auto max-w-sm"
            />
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section id="features" className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#f0f6fb] p-6 rounded-lg shadow text-center">
            <img src="/icon-clip.png" alt="Clip" className="w-10 h-10 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Smart Clip Extraction</h3>
            <p className="text-sm text-gray-600">Automatically select the most captivating moments for shareable shorts.</p>
          </div>
          <div className="bg-[#f0f6fb] p-6 rounded-lg shadow text-center">
            <img src="/icon-title.png" alt="Title" className="w-10 h-10 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">AI-Optimized Titles</h3>
            <p className="text-sm text-gray-600">Receive title suggestions that boost visibility and click-through rates.</p>
          </div>
          <div className="bg-[#f0f6fb] p-6 rounded-lg shadow text-center">
            <img src="/icon-export.png" alt="Export" className="w-10 h-10 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Platform-Ready Exports</h3>
            <p className="text-sm text-gray-600">Clips and descriptions formatted for YouTube Shorts, TikTok, and Spotify.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 bg-[#f9fbfc]">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Creators Are Saying</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic text-gray-700 mb-4">“This tool saved me HOURS of editing. It’s like having a full-time assistant!”</p>
            <div className="flex items-center gap-4">
              <img src="/user-jamie.png" alt="Jamie R." className="w-12 h-12 rounded-full" />
              <p className="font-semibold text-sm">Jamie R. <span className="text-gray-500">Tech Podcaster</span></p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic text-gray-700 mb-4">“My podcast traffic doubled after using the AI clip suggestions!”</p>
            <div className="flex items-center gap-4">
              <img src="/user-maria.png" alt="Maria G." className="w-12 h-12 rounded-full" />
              <p className="font-semibold text-sm">Maria G. <span className="text-gray-500">Health & Wellness Host</span></p>
            </div>
