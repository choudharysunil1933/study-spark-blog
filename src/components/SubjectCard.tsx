
import React from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface SubjectCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  materialCount: number;
  slug: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  title,
  icon,
  description,
  color,
  materialCount,
  slug,
}) => {
  return (
    <Link to={`/subjects/${slug}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none">
        <div className={`h-2 ${color}`}></div>
        <div className="p-6">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${color} bg-opacity-20`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 font-poppins">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{materialCount} materials</span>
            <span className="text-studyspark-600 text-sm font-medium">Explore →</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SubjectCard;
