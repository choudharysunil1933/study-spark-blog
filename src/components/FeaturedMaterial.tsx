
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { FileText, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FeaturedMaterialProps {
  id: string;
  title: string;
  description: string;
  subject: string;
  subjectSlug: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  featured?: boolean;
  image?: string;
}

const FeaturedMaterial: React.FC<FeaturedMaterialProps> = ({
  id,
  title,
  description,
  subject,
  subjectSlug,
  author,
  publishedDate,
  readTime,
  featured = false,
  image,
}) => {
  return (
    <Link to={`/materials/${id}`}>
      <Card className={`overflow-hidden h-full transition-all duration-300 hover:shadow-md ${featured ? 'border-studyspark-200' : ''}`}>
        {image && (
          <div className="h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <Link to={`/subjects/${subjectSlug}`}>
              <Badge variant="outline" className="mb-2 hover:bg-studyspark-50">
                {subject}
              </Badge>
            </Link>
            {featured && (
              <Badge className="bg-studyspark-600">Featured</Badge>
            )}
          </div>
          <CardTitle className="text-xl font-poppins line-clamp-2">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              <span>{readTime} read</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{publishedDate}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <img src={author.avatar} alt={author.name} />
            </Avatar>
            <span className="text-sm font-medium">{author.name}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default FeaturedMaterial;
