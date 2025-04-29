import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SemesterCard from '@/components/SemesterCard';
import FeaturedMaterial from '@/components/FeaturedMaterial';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Bookmark, Share2 } from 'lucide-react';
import ScrollingNotifications from '@/components/ScrollingNotifications';
import GovernmentJobs from '@/components/GovernmentJobs';
import SemesterDetails from '@/components/SemesterDetails';

// Sample data for agricultural education
const bscSemesters = [
  {
    semester: 1,
    degreeLevel: 'BSc' as const,
    subjectCount: 5,
    description: 'Introduction to agricultural sciences, plant biology, soil science fundamentals.',
    slug: 'semester-1'
  },
  {
    semester: 2,
    degreeLevel: 'BSc' as const,
    subjectCount: 6,
    description: 'Crop production, agricultural economics, and farm management basics.',
    slug: 'semester-2'
  },
  {
    semester: 3,
    degreeLevel: 'BSc' as const,
    subjectCount: 5,
    description: 'Plant pathology, genetics, and biotechnology introduction.',
    slug: 'semester-3'
  },
  {
    semester: 4,
    degreeLevel: 'BSc' as const,
    subjectCount: 6,
    description: 'Entomology, pest management, and agricultural engineering.',
    slug: 'semester-4'
  },
  {
    semester: 5,
    degreeLevel: 'BSc' as const,
    subjectCount: 5,
    description: 'Horticultural sciences, post-harvest technology, and organic farming.',
    slug: 'semester-5'
  },
  {
    semester: 6,
    degreeLevel: 'BSc' as const,
    subjectCount: 6,
    description: 'Agricultural extension, rural sociology, and farming systems.',
    slug: 'semester-6'
  },
  {
    semester: 7,
    degreeLevel: 'BSc' as const,
    subjectCount: 4,
    description: 'Agronomy advanced topics, crop breeding, and experimental designs.',
    slug: 'semester-7'
  },
  {
    semester: 8,
    degreeLevel: 'BSc' as const,
    subjectCount: 5,
    description: 'Agricultural project management, internships, and thesis preparation.',
    slug: 'semester-8'
  }
];

const mscSemesters = [
  {
    semester: 1,
    degreeLevel: 'MSc' as const,
    subjectCount: 4,
    description: 'Advanced crop science, research methodology, and statistics.',
    slug: 'msc-semester-1'
  },
  {
    semester: 2,
    degreeLevel: 'MSc' as const,
    subjectCount: 4,
    description: 'Specialized study in plant breeding, molecular techniques, and advanced soil science.',
    slug: 'msc-semester-2'
  },
  {
    semester: 3,
    degreeLevel: 'MSc' as const,
    subjectCount: 3,
    description: 'Research work, dissertation planning, and advanced electives.',
    slug: 'msc-semester-3'
  },
  {
    semester: 4,
    degreeLevel: 'MSc' as const,
    subjectCount: 2,
    description: 'Thesis writing, research publication, and oral defense preparation.',
    slug: 'msc-semester-4'
  }
];

// Featured agricultural study materials
const featuredNotes = [
  {
    id: "note1",
    title: "Comprehensive Soil Science Study Guide",
    description: "Detailed notes covering soil composition, fertility, and management practices for agricultural productivity.",
    subject: "Soil Science",
    subjectSlug: "soil-science",
    author: {
      name: "Dr. Rajesh Kumar",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    publishedDate: "June 10, 2023",
    readTime: "25 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "note2",
    title: "Plant Pathology & Disease Management",
    description: "Complete guide to identifying and managing common crop diseases with practical prevention strategies.",
    subject: "Plant Pathology",
    subjectSlug: "plant-pathology",
    author: {
      name: "Dr. Priya Singh",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    publishedDate: "July 22, 2023",
    readTime: "32 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1574943320219-89283130920c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "note3",
    title: "Agricultural Economics Fundamentals",
    description: "Essential concepts in agricultural economics, market dynamics, and farm business management.",
    subject: "Agricultural Economics",
    subjectSlug: "agri-economics",
    author: {
      name: "Prof. Arun Joshi",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    publishedDate: "August 5, 2023",
    readTime: "28 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// Recent agricultural study materials
const recentNotes = [
  {
    id: "recent1",
    title: "Modern Irrigation Techniques",
    description: "Latest developments in precision irrigation systems for water conservation and optimal crop growth.",
    subject: "Agricultural Engineering",
    subjectSlug: "agri-engineering",
    author: {
      name: "Eng. Suresh Patel",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    publishedDate: "September 12, 2023",
    readTime: "20 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "recent2",
    title: "Organic Pest Management",
    description: "Sustainable approaches to managing agricultural pests without synthetic chemicals.",
    subject: "Entomology",
    subjectSlug: "entomology",
    author: {
      name: "Dr. Meena Sharma",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    publishedDate: "September 2, 2023",
    readTime: "18 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1625246333195-78d73c0ae829?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "recent3",
    title: "Sustainable Farming Practices",
    description: "Comprehensive guide to implementing environmentally responsible agriculture techniques.",
    subject: "Sustainable Agriculture",
    subjectSlug: "sustainable-agri",
    author: {
      name: "Dr. Vijay Narayan",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    publishedDate: "August 28, 2023",
    readTime: "22 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Index = () => {
  // Function to handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if (position.top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Notifications and Updates Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column: Government Jobs & Updates */}
              <div className="lg:col-span-2">
                <GovernmentJobs />
              </div>
              
              {/* Right column: Scrolling notifications */}
              <div>
                <h3 className="text-xl font-bold mb-4 font-poppins">Latest Updates</h3>
                <ScrollingNotifications />
              </div>
            </div>
          </div>
        </section>
        
        {/* Semester Details Section */}
        <SemesterDetails />
        
        {/* BSc Semesters Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold font-poppins mb-4">BSc Agriculture Notes</h2>
              <p className="text-gray-600">
                Comprehensive study materials for all 8 semesters of Bachelor of Science in Agriculture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bscSemesters.map((semester) => (
                <div key={semester.slug} className="animate-on-scroll">
                  <SemesterCard
                    semester={semester.semester}
                    degreeLevel={semester.degreeLevel}
                    subjectCount={semester.subjectCount}
                    description={semester.description}
                    slug={semester.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* MSc Semesters Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold font-poppins mb-4">MSc Agriculture Notes</h2>
              <p className="text-gray-600">
                Advanced study materials for all 4 semesters of Master of Science in Agriculture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mscSemesters.map((semester) => (
                <div key={semester.slug} className="animate-on-scroll">
                  <SemesterCard
                    semester={semester.semester}
                    degreeLevel={semester.degreeLevel}
                    subjectCount={semester.subjectCount}
                    description={semester.description}
                    slug={semester.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Materials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium mb-2 inline-block">FEATURED</span>
              <h2 className="text-3xl font-bold font-poppins mb-4">Top Agricultural Study Notes</h2>
              <p className="text-gray-600">
                Discover our most comprehensive agricultural study resources, selected to help you excel in your studies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredNotes.map((material) => (
                <div key={material.id} className="animate-on-scroll">
                  <FeaturedMaterial
                    id={material.id}
                    title={material.title}
                    description={material.description}
                    subject={material.subject}
                    subjectSlug={material.subjectSlug}
                    author={material.author}
                    publishedDate={material.publishedDate}
                    readTime={material.readTime}
                    featured={material.featured}
                    image={material.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold font-poppins mb-6">Why Choose AGRIDOCTORS?</h2>
                <p className="text-gray-600 mb-6">
                  Our platform focuses on delivering high-quality agricultural study materials that are well-organized, 
                  easy to understand, and specifically designed to help students excel in their academic journey.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Comprehensive Notes</h3>
                      <p className="text-gray-600">
                        Well-structured and detailed study guides covering all major agricultural topics and subjects.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4">
                      <Bookmark className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Expert-Created Content</h3>
                      <p className="text-gray-600">
                        All materials created and verified by agricultural professors and researchers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4">
                      <Share2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Easy Sharing</h3>
                      <p className="text-gray-600">
                        Share study materials with classmates and form study groups easily.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-8 bg-primary hover:bg-primary/90">
                  Learn More About Us
                </Button>
              </div>
              
              <div className="relative animate-on-scroll">
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary/10 rounded-lg"></div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-primary/10 rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80"
                  alt="Students studying agricultural science"
                  className="rounded-lg shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Materials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <span className="text-primary font-medium mb-2 inline-block">LATEST ADDITIONS</span>
                <h2 className="text-3xl font-bold font-poppins">Recently Added Notes</h2>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0 border-primary text-primary hover:bg-primary/5">
                View All Notes
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentNotes.map((material) => (
                <div key={material.id} className="animate-on-scroll">
                  <FeaturedMaterial
                    id={material.id}
                    title={material.title}
                    description={material.description}
                    subject={material.subject}
                    subjectSlug={material.subjectSlug}
                    author={material.author}
                    publishedDate={material.publishedDate}
                    readTime={material.readTime}
                    featured={false}
                    image={material.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-6">Ready to Excel in Agricultural Sciences?</h2>
              <p className="text-lg mb-8 text-white/90">
                Join thousands of agriculture students who are already benefiting from our comprehensive study notes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Editor Attribution */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            Edited by: <span className="font-semibold">Sunil Nodal</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
