
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen } from 'lucide-react';

interface SubjectItem {
  name: string;
  slug: string;
}

interface SemesterData {
  semester: number;
  subjects: SubjectItem[];
}

const bscSemesterData: SemesterData[] = [
  {
    semester: 1,
    subjects: [
      { name: "Agriculture Heritage", slug: "agriculture-heritage" },
      { name: "Fundamentals Of Agricultural Economics", slug: "agricultural-economics" },
      { name: "Fundamentals Of Agronomy", slug: "fundamentals-agronomy" },
      { name: "Fundamentals Of Plant Biochemistry and Biotechnology", slug: "plant-biochemistry" },
      { name: "Fundamentals Of Soil Science", slug: "soil-science" },
      { name: "Human Values and Ethics", slug: "human-values" },
      { name: "Introduction To Forestry", slug: "intro-forestry" }
    ]
  },
  {
    semester: 2,
    subjects: [
      { name: "Agricultural Microbiology", slug: "agricultural-microbiology" },
      { name: "Fundamentals Of Crop Physiology", slug: "crop-physiology" },
      { name: "Fundamentals Of Entomology", slug: "fundamentals-entomology" },
      { name: "Fundamentals Of Genetics", slug: "fundamentals-genetics" },
      { name: "Fundamentals Of Horticulture", slug: "fundamentals-horticulture" },
      { name: "Soil And Water Conservation Engineering", slug: "soil-water-conservation" },
      { name: "Statistical Methods", slug: "statistical-methods" }
    ]
  },
  {
    semester: 3,
    subjects: [
      { name: "Agricultural Finance and Cooperation", slug: "agri-finance" },
      { name: "Agriculture Informatics", slug: "agri-informatics" },
      { name: "Crop Production Technology-I", slug: "crop-production-1" },
      { name: "Environmental Studies and Disaster Management", slug: "environmental-studies" },
      { name: "Farm Machinery and Power", slug: "farm-machinery" },
      { name: "Livestock And Poultry Management", slug: "livestock-management" },
      { name: "Fundamentals Of Plant Pathology", slug: "plant-pathology" }
    ]
  },
  {
    semester: 4,
    subjects: [
      { name: "Agricultural Marketing Trade and Prices", slug: "agri-marketing" },
      { name: "Elective 1", slug: "elective-1" },
      { name: "Crop Production Technology-II", slug: "crop-production-2" },
      { name: "Farming System and Sustainable Agriculture", slug: "sustainable-agriculture" },
      { name: "Principles Of Seed Technology", slug: "seed-technology" },
      { name: "Problematic Soils and Their Management", slug: "problematic-soils" },
      { name: "Practical Aspects of Physical Education", slug: "physical-education" }
    ]
  },
  {
    semester: 5,
    subjects: [
      { name: "Elective 2", slug: "elective-2" },
      { name: "Crop Improvement", slug: "crop-improvement-5" },
      { name: "Educational Tour", slug: "educational-tour" },
      { name: "Entrepreneurship Development and Business Communication", slug: "entrepreneurship" },
      { name: "Geoinformatics And Nanotechnology for Precision Farming", slug: "geoinformatics" },
      { name: "Intellectual Property Rights", slug: "ipr" },
      { name: "Renewable Energy and Green Technology", slug: "renewable-energy" }
    ]
  },
  {
    semester: 6,
    subjects: [
      { name: "Elective 3", slug: "elective-3" },
      { name: "Crop Improvement", slug: "crop-improvement-6" },
      { name: "Management Of Beneficial Insects", slug: "beneficial-insects" }
    ]
  },
  {
    semester: 7,
    subjects: [
      { name: "Agro-industrial Attachment", slug: "agro-industrial-7" },
      { name: "Plant Clinic Attachment", slug: "plant-clinic-7" },
      { name: "Student Project", slug: "student-project-7" },
      { name: "Unit Attachment", slug: "unit-attachment-7" },
      { name: "Village Attachment", slug: "village-attachment-7" },
      { name: "Diseases Of Field and Horticultural Crops And Their Management", slug: "diseases-management" },
      { name: "Principles Of Food Science and Nutrition", slug: "food-science" },
      { name: "Principles Of Organic Farming", slug: "organic-farming" },
      { name: "Rainfed Agriculture and Watershed Management", slug: "rainfed-agriculture" }
    ]
  },
  {
    semester: 8,
    subjects: [
      { name: "Agro-industrial Attachment", slug: "agro-industrial-8" },
      { name: "Plant Clinic Attachment", slug: "plant-clinic-8" },
      { name: "Student Project", slug: "student-project-8" },
      { name: "Unit Attachment", slug: "unit-attachment-8" },
      { name: "Village Attachment", slug: "village-attachment-8" }
    ]
  }
];

const SemesterDetails = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-poppins mb-4">BSc Agriculture Course Details</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive curriculum covering all aspects of agricultural sciences, from soil science to crop management.
          </p>
        </div>
        
        <Tabs defaultValue="1" className="w-full">
          <TabsList className="grid grid-cols-4 md:grid-cols-8 w-full mb-8">
            {bscSemesterData.map((semester) => (
              <TabsTrigger 
                key={semester.semester}
                value={semester.semester.toString()}
                className="font-medium"
              >
                Sem {semester.semester}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {bscSemesterData.map((semesterData) => (
            <TabsContent 
              key={semesterData.semester}
              value={semesterData.semester.toString()}
              className="pt-4"
            >
              <Card className="border-none shadow-md">
                <CardHeader className="bg-primary/10">
                  <CardTitle className="text-xl flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Semester {semesterData.semester} Subjects
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {semesterData.subjects.map((subject) => (
                      <div 
                        key={subject.slug}
                        className="p-4 border border-gray-100 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          <h3 className="font-medium">{subject.name}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default SemesterDetails;
