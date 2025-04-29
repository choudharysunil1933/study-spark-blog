
import React, { useEffect, useRef } from 'react';
import { Bell, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample notifications data
const notifications = [
  {
    id: 1,
    title: "ICAR JRF Exam Registration Open",
    date: "April 15, 2025",
    type: "exam",
    link: "/exams/icar-jrf-2025"
  },
  {
    id: 2,
    title: "Agriculture Officer Vacancies in Punjab State",
    date: "April 10, 2025",
    type: "vacancy",
    link: "/vacancies/punjab-ao-2025"
  },
  {
    id: 3,
    title: "IARI PhD Admissions 2025",
    date: "April 5, 2025",
    type: "update",
    link: "/updates/iari-phd-2025"
  },
  {
    id: 4,
    title: "Agriculture Research Service Applications Open",
    date: "April 2, 2025",
    type: "vacancy",
    link: "/vacancies/ars-2025"
  },
  {
    id: 5,
    title: "National Conference on Sustainable Agriculture",
    date: "March 28, 2025",
    type: "update",
    link: "/updates/sustainable-agri-conference"
  }
];

const ScrollingNotifications = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    
    const scrollHeight = scrollElement.scrollHeight;
    const clientHeight = scrollElement.clientHeight;
    
    let scrollPosition = 0;
    
    const scroll = () => {
      if (!scrollElement) return;
      
      scrollPosition += 1;
      
      // Reset when reaching the end
      if (scrollPosition >= scrollHeight / 2) {
        scrollPosition = 0;
      }
      
      scrollElement.style.transform = `translateY(-${scrollPosition}px)`;
    };
    
    const interval = setInterval(scroll, 50);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
      <div className="flex items-center justify-between bg-primary text-white p-3">
        <div className="flex items-center">
          <Bell className="h-5 w-5 mr-2" />
          <h3 className="font-medium text-sm">Important Notifications</h3>
        </div>
        <Link to="/updates" className="text-xs underline hover:text-white/80">
          View All
        </Link>
      </div>
      
      <div className="h-[300px] overflow-hidden relative">
        <div className="absolute w-full" ref={scrollRef}>
          {/* Double the notifications to create a seamless loop */}
          {[...notifications, ...notifications].map((notification, index) => (
            <Link
              key={`${notification.id}-${index}`}
              to={notification.link}
              className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <span className="p-1.5 rounded-full mr-3 flex-shrink-0">
                {notification.type === 'vacancy' ? (
                  <Briefcase className="h-4 w-4 text-blue-600" />
                ) : (
                  <Bell className="h-4 w-4 text-amber-600" />
                )}
              </span>
              <div>
                <p className="text-sm font-medium text-gray-800">{notification.title}</p>
                <p className="text-xs text-gray-500">{notification.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingNotifications;
