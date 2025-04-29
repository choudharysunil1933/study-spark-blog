
import React from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface SemesterCardProps {
  semester: number;
  degreeLevel: 'BSc' | 'MSc';
  subjectCount: number;
  description: string;
  slug: string;
}

const SemesterCard: React.FC<SemesterCardProps> = ({
  semester,
  degreeLevel,
  subjectCount,
  description,
  slug,
}) => {
  return (
    <Link to={`/${degreeLevel.toLowerCase()}/${slug}`}>
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none">
        <div className={`h-2 ${degreeLevel === 'BSc' ? 'bg-studyspark-600' : 'bg-studyspark-800'}`}></div>
        <div className="p-6">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${degreeLevel === 'BSc' ? 'bg-studyspark-100 text-studyspark-700' : 'bg-studyspark-200 text-studyspark-800'}`}>
            <BookOpen className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-2 font-poppins">{degreeLevel} - Semester {semester}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{subjectCount} subjects</span>
            <span className="text-studyspark-600 text-sm font-medium">View Notes →</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SemesterCard;
