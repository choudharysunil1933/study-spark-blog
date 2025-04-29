
import React from 'react';
import { Card } from '@/components/ui/card';
import { Bell, ExternalLink, Calendar, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface NotificationCardProps {
  title: string;
  date: string;
  institution: string;
  description: string;
  link: string;
  type: 'exam' | 'vacancy' | 'update';
  deadline?: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  date,
  institution,
  description,
  link,
  type,
  deadline,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'exam':
        return <Bell className="h-5 w-5 text-amber-600" />;
      case 'vacancy':
        return <Briefcase className="h-5 w-5 text-blue-600" />;
      case 'update':
        return <Bell className="h-5 w-5 text-green-600" />;
      default:
        return <Bell className="h-5 w-5 text-primary" />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'exam':
        return <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded">Exam</span>;
      case 'vacancy':
        return <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Vacancy</span>;
      case 'update':
        return <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Update</span>;
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-l-4 border-l-primary">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <span className="p-2 rounded-full bg-primary/10 mr-3">
              {getIcon()}
            </span>
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-gray-500">{institution}</p>
            </div>
          </div>
          {getTypeLabel()}
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap items-center text-xs text-gray-500 gap-4 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Published: {date}</span>
          </div>
          
          {deadline && (
            <div className="flex items-center text-red-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Deadline: {deadline}</span>
            </div>
          )}
        </div>
        
        <Button variant="outline" asChild size="sm" className="w-full mt-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            View Details
            <ExternalLink className="h-3.5 w-3.5 ml-2" />
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default NotificationCard;
