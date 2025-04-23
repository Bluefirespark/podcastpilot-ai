import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-100 text-gray-800 p-6 font-sans">
      <header className="text-center py-10">
      <img src="/logo.png" alt="PodcastPilot AI Logo" className="w-32 mx-auto mb-4" />
  <h1 className="text-5xl font-bold text-sky-700 mb-4">PodcastPilot AI</h1>
        <p className="text-xl">Turn your podcast episodes into viral content — effortlessly.</p>
        <div className="mt-6">
          <a href="#features" className="bg-sky-700 text-white px-6 py-3 rounded-full hover:bg-sky-800 transition">See How It Works</a>
        </div>
      </header>

      <section id="features" className="py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Smart Clip Extraction</h3>
            <p>Get the best podcast moments automatically selected for short-form platforms.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="font-semibold text-lg mb-2">AI-Optimized Titles</h3>
            <p>Receive title suggestions that boost visibility and click-through rate.</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Platform-Ready Exports</h3>
            <p>Clips and descriptions formatted for YouTube Shorts, TikTok, and Spotify.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Creators Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded shadow">
              <p>“This tool saved me HOURS of editing. It’s like having a full production team.”</p>
              <p className="mt-4 font-semibold">— Jamie R., Tech Podcaster</p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow">
              <p>“My podcast traffic doubled after using the AI clip suggestions!”</p>
              <p className="mt-4 font-semibold">— Maria G., Health & Wellness Host</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 text-center" id="pricing">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded shadow border">
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="mt-2">2 episodes/month</p>
            <p className="mt-2 font-bold text-lg">$0</p>
          </div>
          <div className="bg-white p-6 rounded shadow border border-sky-700">
            <h3 className="text-xl font-semibold text-sky-700">Pro</h3>
            <p className="mt-2">Unlimited episodes + AI exports</p>
            <p className="mt-2 font-bold text-lg">$49/month</p>
          </div>
          <div className="bg-white p-6 rounded shadow border">
            <h3 className="text-xl font-semibold">Agency</h3>
            <p className="mt-2">Team access + batch uploads</p>
            <p className="mt-2 font-bold text-lg">$199/month</p>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} PodcastPilot AI. All rights reserved.
      </footer>
    </div>
  );
}