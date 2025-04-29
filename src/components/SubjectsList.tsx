
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ArrowRight } from 'lucide-react';

interface Subject {
  name: string;
  slug: string;
}

interface SubjectsListProps {
  semester: number;
  subjects: Subject[];
  degreeType: 'BSc' | 'MSc';
  departmentName?: string;
}

const SubjectsList: React.FC<SubjectsListProps> = ({
  semester,
  subjects,
  degreeType,
  departmentName
}) => {
  const bgColor = degreeType === 'BSc' ? 'bg-primary/10' : 'bg-primary/20';
  const textColor = 'text-primary';
  
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          {degreeType} Agriculture {departmentName ? `- ${departmentName} ` : ''}
          Semester {semester}
        </h3>
        <div className="h-1 w-20 bg-primary mt-2"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <Link key={subject.slug} to={`/${degreeType.toLowerCase()}/semester-${semester}/${subject.slug}`}>
            <Card className="transition-all hover:shadow-md hover:-translate-y-1 duration-300 h-full overflow-hidden border-none">
              <div className="h-1 bg-primary"></div>
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded ${bgColor} ${textColor}`}>
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{subject.name}</h4>
                    <div className="flex justify-between items-center mt-4">
                      <span className={`text-xs font-medium ${textColor}`}>View Notes</span>
                      <ArrowRight className={`h-4 w-4 ${textColor}`} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubjectsList;
