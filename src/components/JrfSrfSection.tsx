
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExamInfo {
  id: string;
  title: string;
  date: string;
  registrationDeadline: string;
  eligibility: string;
  link: string;
}

const JrfSrfSection = () => {
  // Sample JRF/SRF exam data
  const examData: ExamInfo[] = [
    {
      id: 'icar-jrf-2023',
      title: 'ICAR JRF/SRF Exam 2023',
      date: 'April 15, 2023',
      registrationDeadline: 'March 1, 2023',
      eligibility: 'Masters degree in relevant agricultural science discipline with 60% marks.',
      link: '#'
    },
    {
      id: 'icar-srf-2024',
      title: 'ICAR SRF Entrance Exam 2024',
      date: 'January 10, 2024',
      registrationDeadline: 'November 30, 2023',
      eligibility: 'Masters degree with overall grade point average of 6.5/10.0.',
      link: '#'
    },
    {
      id: 'jrf-agri-phd',
      title: 'JRF for PhD Admission in Agriculture',
      date: 'June 22, 2023',
      registrationDeadline: 'May 15, 2023',
      eligibility: 'MSc in Agriculture with OGPA of 7.0/10.0.',
      link: '#'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <GraduationCap className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold">JRF/SRF Exam Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examData.map(exam => (
            <Card key={exam.id} className="overflow-hidden transition-all duration-300 hover:shadow-md border-t-4 border-t-primary">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">{exam.title}</h3>
                
                <div className="flex flex-col space-y-3 mb-5 text-sm">
                  <div className="flex items-start">
                    <Calendar className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                    <div>
                      <span className="text-gray-600">Exam Date:</span>
                      <p className="font-medium">{exam.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-4 w-4 mr-2 mt-0.5 text-red-500" />
                    <div>
                      <span className="text-gray-600">Registration Deadline:</span>
                      <p className="font-medium text-red-500">{exam.registrationDeadline}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileText className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                    <div>
                      <span className="text-gray-600">Eligibility:</span>
                      <p className="font-medium">{exam.eligibility}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button variant="default" asChild size="sm" className="w-full">
                    <a href={exam.link} className="flex items-center justify-center">
                      Apply Now
                      <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild size="sm">
                    <a href={`/jrf-srf/${exam.id}`} className="flex items-center justify-center">
                      Study Notes
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View All JRF/SRF Exams
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JrfSrfSection;
