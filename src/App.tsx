/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Impact } from './components/Impact';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#1E252B] selection:bg-[#4A90A4]/20 selection:text-[#16323D]">
        {/* 1. Sticky Navigation */}
        <Navbar />

        <main>
          {/* 2. Hero Section */}
          <Hero />

          {/* 3. About Section */}
          <About />

          {/* 4. Services Section */}
          <Services />

          {/* 5. Impact / Portfolio Section */}
          <Impact />

          {/* 6. Tools Section */}
          <Tools />

          {/* 7. Contact / Get in Touch Section */}
          <Contact />
        </main>

        {/* 8. Footer */}
        <Footer />
      </div>
    </PhotoProvider>
  );
}
