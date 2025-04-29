
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Book, GraduationCap, Briefcase, Bell, Video, BookOpen } from "lucide-react";
import SearchBar from './SearchBar';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "BSc Notes", href: "/bsc", icon: <BookOpen className="h-4 w-4 mr-1" /> },
    { title: "MSc Notes", href: "/msc", icon: <Book className="h-4 w-4 mr-1" /> },
    { title: "Exam Updates", href: "/exams", icon: <Bell className="h-4 w-4 mr-1" /> },
    { title: "Govt. Vacancies", href: "/vacancies", icon: <Briefcase className="h-4 w-4 mr-1" /> },
    { title: "JRF/SRF", href: "/jrf-srf", icon: <GraduationCap className="h-4 w-4 mr-1" /> },
    { title: "Course Videos", href: "/videos", icon: <Video className="h-4 w-4 mr-1" /> },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8 text-primary"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="ml-2 text-xl font-bold font-poppins text-primary">
              AGRIDOCTORS
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition duration-200 flex items-center"
              >
                {link.icon && link.icon}
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="ml-4 flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-700 hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Submit Notes
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(!searchOpen)}
            className="mr-2 text-gray-700"
          >
            <Search className="h-5 w-5" />
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon && link.icon}
                {link.title}
              </Link>
            ))}
            <Button variant="default" className="mt-2 w-full bg-primary hover:bg-primary/90">
              Submit Notes
            </Button>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white p-4 shadow-lg animate-fade-in">
          <SearchBar onClose={() => setSearchOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
