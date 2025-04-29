
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SubjectCard from '@/components/SubjectCard';
import FeaturedMaterial from '@/components/FeaturedMaterial';
import Footer from '@/components/Footer';
import { subjects } from '@/data/subjects';
import { materials } from '@/data/materials';
import { Button } from '@/components/ui/button';
import { BookOpen, Bookmark, Share2 } from 'lucide-react';

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

  const featuredMaterials = materials.filter(material => material.featured);
  const recentMaterials = materials.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Subjects Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold font-poppins mb-4">Explore Subjects</h2>
              <p className="text-gray-600">
                Find study materials organized by subject to help you master any topic from fundamentals to advanced concepts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.slice(0, 8).map((subject) => (
                <div key={subject.id} className="animate-on-scroll">
                  <SubjectCard
                    title={subject.title}
                    icon={<subject.icon className="h-6 w-6 text-gray-700" />}
                    description={subject.description}
                    color={subject.color}
                    materialCount={subject.materialCount}
                    slug={subject.slug}
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="outline" className="border-studyspark-500 text-studyspark-600 hover:bg-studyspark-50">
                View All Subjects
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Materials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-studyspark-600 font-medium mb-2 inline-block">FEATURED</span>
              <h2 className="text-3xl font-bold font-poppins mb-4">Top Study Materials</h2>
              <p className="text-gray-600">
                Discover our most popular and comprehensive study resources, selected to help you excel in your studies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredMaterials.map((material) => (
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold font-poppins mb-6">Why Choose StudySpark?</h2>
                <p className="text-gray-600 mb-6">
                  Our platform focuses on delivering high-quality study materials that are well-organized, 
                  easy to understand, and specifically designed to help students excel in their academic journey.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-studyspark-100 rounded-full p-2 mr-4">
                      <BookOpen className="h-5 w-5 text-studyspark-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Comprehensive Materials</h3>
                      <p className="text-gray-600">
                        Well-structured and detailed study guides covering all major subjects and topics.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-studyspark-100 rounded-full p-2 mr-4">
                      <Bookmark className="h-5 w-5 text-studyspark-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Expert-Created Content</h3>
                      <p className="text-gray-600">
                        All materials created and verified by subject matter experts and educators.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-studyspark-100 rounded-full p-2 mr-4">
                      <Share2 className="h-5 w-5 text-studyspark-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Easy Sharing</h3>
                      <p className="text-gray-600">
                        Share study materials with classmates and form study groups easily.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-8 bg-studyspark-600 hover:bg-studyspark-700">
                  Learn More About Us
                </Button>
              </div>
              
              <div className="relative animate-on-scroll">
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-studyspark-100 rounded-lg"></div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-studyspark-100 rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
                  alt="Student studying on computer"
                  className="rounded-lg shadow-xl relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Materials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <span className="text-studyspark-600 font-medium mb-2 inline-block">LATEST ADDITIONS</span>
                <h2 className="text-3xl font-bold font-poppins">Recently Added Materials</h2>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0 border-studyspark-500 text-studyspark-600 hover:bg-studyspark-50">
                View All Materials
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentMaterials.map((material) => (
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
        <section className="py-16 bg-gradient-to-br from-studyspark-700 via-studyspark-600 to-studyspark-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-6">Ready to Elevate Your Learning?</h2>
              <p className="text-lg mb-8 text-studyspark-100">
                Join thousands of students who are already benefiting from our comprehensive study materials.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-studyspark-700 hover:bg-gray-100">
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
    </div>
  );
};

export default Index;
