import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const steps = [
  {
    title: 'UPLOAD DESIGN',
    description: 'Using drag and drop, your image or vector art magically appears in 3D.',
    icon: '1',
  },
  {
    title: 'ADJUSTMENTS',
    description: 'Adjust material, move/scale and access controls.',
    icon: '2',
  },
  {
    title: 'EXPORT',
    description: 'Export as an image, video, or 3D model. Safely embed anywhere.',
    icon: '3',
  },
];

const ProductOverviewSection = () => (
  <section className="py-20 px-2 bg-white dark:bg-neutral-950">
    <div className="max-w-3xl mx-auto text-center mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 text-xs font-semibold mb-4 shadow">
        <img src="https://img.icons8.com/color/48/000000/medal.png" alt="badge" className="w-6 h-6" />
        Trusted by 1000s+ people to create amazing 3D Logos for their brands.
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-neutral-900 dark:text-neutral-100">Simple, Fast & Intuitive Design Tool</h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">2D to 3D in one click. No waiting around or learning complex programs.</p>
    </div>
    <div className="flex justify-center mb-10">
      <DotLottieReact
        src="https://lottie.host/2d88e965-82ab-4307-9b05-d3e3bf810858/6azOHuixpH.lottie"
        loop
        autoplay
        style={{ width: '100%', maxWidth: 480, minHeight: 320, height: 'auto' }}
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
      {steps.map((step, i) => (
        <div key={i} className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow p-6 flex flex-col items-start">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white font-bold text-lg mb-4 shadow">
            {step.icon}
          </div>
          <h4 className="font-bold text-neutral-900 dark:text-neutral-100 mb-2 text-base uppercase tracking-wide">{step.title}</h4>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">{step.description}</p>
        </div>
      ))}
    </div>
    <div className="text-center">
      <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
        Get Started
      </button>
    </div>
  </section>
);

export default ProductOverviewSection; 