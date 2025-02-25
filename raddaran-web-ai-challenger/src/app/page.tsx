"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faGlobe, faBook } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Initialize Font Awesome
config.autoAddCss = false;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold mb-6">
              Raddaran AI Challenger
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Join the ultimate AI competition platform. Build, battle, and benchmark your AI models against the best in the world.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Get Started
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Modes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Competition Modes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI Coding Challenge",
                description: "Create and fine-tune AI models for specific tasks like image classification, NLP, and reinforcement learning."
              },
              {
                title: "Red Team vs Blue Team",
                description: "Test AI security in real-world scenarios with attack and defense simulations."
              },
              {
                title: "AI Agent Battle",
                description: "Develop AI agents to compete in strategic environments and specialized problem-solving."
              },
              {
                title: "Fine-Tuning War",
                description: "Optimize pre-trained models to achieve the best performance under specific conditions."
              }
            ].map((mode, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-4">{mode.title}</h3>
                <p className="text-gray-600">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: faChartLine,
                title: "Real-time Leaderboard",
                description: "Track your performance and compete with participants worldwide in real-time."
              },
              {
                icon: faGlobe,
                title: "API Sandbox",
                description: "Test your models through our automated API testing environment."
              },
              {
                icon: faBook,
                title: "AI Knowledge Hub",
                description: "Access comprehensive resources, tutorials, and documentation."
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 text-indigo-600">
                  <FontAwesomeIcon icon={feature.icon} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Modes */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Special Challenges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Survival Mode",
                description: "Push your AI to its limits in continuous battles until defeat."
              },
              {
                title: "Boss Challenge",
                description: "Face off against expert-crafted AI models in ultimate showdowns."
              },
              {
                title: "Token Rewards",
                description: "Earn NFTs, prize money, and API credits for your achievements."
              }
            ].map((mode, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg">
                <h3 className="text-xl font-semibold mb-4">{mode.title}</h3>
                <p className="text-gray-200">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Challenge?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of AI enthusiasts and compete in the next generation of AI challenges.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Start Building Now
          </button>
        </div>
      </section>
    </main>
  );
}
