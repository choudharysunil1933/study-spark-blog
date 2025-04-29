
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Bell, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative text-white">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight">
            Agricultural Education & Career Resources
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-2xl mx-auto">
            Comprehensive notes, exam updates, and resources for BSc & MSc Agriculture students
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            <Link to="/bsc">
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition">
                <BookOpen className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">BSc Notes</span>
              </div>
            </Link>
            <Link to="/exams">
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition">
                <Bell className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">Exam Updates</span>
              </div>
            </Link>
            <Link to="/vacancies">
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition">
                <Briefcase className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">Govt. Jobs</span>
              </div>
            </Link>
            <Link to="/jrf-srf">
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition">
                <GraduationCap className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium">JRF/SRF</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full transform rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.44,118.92,163.28,88.65,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
