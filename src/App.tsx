import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseCategories from './components/CourseCategories';
import FeaturedCourses from './components/FeaturedCourses';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <CourseCategories />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;