import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const FeatureSection = ({ title, description, image, reverse, buttonText, buttonLink }) => (
  <section className={`w-full py-16 ${reverse ? 'bg-neutral-100 dark:bg-neutral-900' : 'bg-white dark:bg-neutral-950'}`}>
    <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 flex justify-center">
        <DotLottieReact
          src="https://lottie.host/a5829d0a-065f-4c1f-a455-98f57b6d652c/3xsoCZCRES.lottie"
          loop
          autoplay
          style={{ width: '256px', height: '256px' }}
        />
      </div>
      <div className="flex-1 flex flex-col items-start md:items-start">
        <span className="mb-3 inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 text-white text-xs font-bold uppercase tracking-widest shadow">
          Feature
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-neutral-900 dark:text-neutral-100 leading-tight">{title}</h3>
        <p className="text-lg mb-6 text-neutral-700 dark:text-neutral-300">{description}</p>
        {buttonText && (
          <a
            href={buttonLink}
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow hover:scale-105 transition"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  </section>
);

export default FeatureSection; 