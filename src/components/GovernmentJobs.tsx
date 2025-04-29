
import React from 'react';
import { Briefcase, ArrowRight, Share2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NotificationCard from './NotificationCard';
import { Whatsapp, Telegram } from 'lucide-react';

// Sample job vacancies
const jobVacancies = [
  {
    id: "job1",
    title: "Agriculture Officer",
    date: "April 15, 2025",
    institution: "Punjab Agriculture Department",
    description: "Applications are invited for the post of Agriculture Officer. Candidates with M.Sc. in Agriculture are eligible to apply.",
    link: "/vacancies/punjab-ao-2025",
    type: "vacancy" as const,  // Type assertion to make TypeScript aware this is a literal type
    deadline: "May 15, 2025"
  },
  {
    id: "job2",
    title: "Junior Research Fellow",
    date: "April 10, 2025",
    institution: "ICAR-Indian Agricultural Research Institute",
    description: "Applications are invited for JRF positions in the Division of Agronomy under the research project.",
    link: "/vacancies/iari-jrf-2025",
    type: "vacancy" as const,  // Type assertion to make TypeScript aware this is a literal type
    deadline: "May 5, 2025"
  },
  {
    id: "job3",
    title: "Subject Matter Specialist",
    date: "April 5, 2025",
    institution: "KVK-Rajasthan",
    description: "Applications are invited for Subject Matter Specialist in Soil Science, Agronomy and Plant Protection.",
    link: "/vacancies/kvk-sms-2025",
    type: "vacancy" as const,  // Type assertion to make TypeScript aware this is a literal type
    deadline: "April 30, 2025"
  }
];

const GovernmentJobs = () => {
  // Function to share via WhatsApp
  const shareViaWhatsApp = (title, link) => {
    const text = `Check out this job vacancy: ${title} - ${window.location.origin}${link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Function to share via Telegram
  const shareViaTelegram = (title, link) => {
    const text = `Check out this job vacancy: ${title} - ${window.location.origin}${link}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.origin + link)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Briefcase className="h-6 w-6 text-primary mr-3" />
            <h2 className="text-2xl font-bold font-poppins">Government Vacancies</h2>
          </div>
          <Button variant="outline" asChild className="text-primary border-primary hover:bg-primary/5">
            <Link to="/vacancies" className="flex items-center">
              View All Vacancies
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobVacancies.map(vacancy => (
            <div key={vacancy.id} className="animate-on-scroll">
              <NotificationCard 
                title={vacancy.title}
                date={vacancy.date}
                institution={vacancy.institution}
                description={vacancy.description}
                link={vacancy.link}
                type={vacancy.type}
                deadline={vacancy.deadline}
              />
              <div className="mt-2 flex justify-end space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-green-600 hover:text-green-700 hover:bg-green-50"
                  onClick={() => shareViaWhatsApp(vacancy.title, vacancy.link)}
                >
                  <Whatsapp className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                  onClick={() => shareViaTelegram(vacancy.title, vacancy.link)}
                >
                  <Telegram className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernmentJobs;
