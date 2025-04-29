
import { BookText, FileText, Search, Share, Layout, CalendarDays, Image, Edit, Link } from 'lucide-react';

export interface Subject {
  id: string;
  title: string;
  slug: string;
  icon: React.ElementType;
  description: string;
  color: string;
  materialCount: number;
}

export const subjects: Subject[] = [
  {
    id: "math",
    title: "Mathematics",
    slug: "mathematics",
    icon: FileText,
    description: "Algebra, calculus, geometry, and other mathematical concepts explained clearly.",
    color: "bg-blue-500",
    materialCount: 34,
  },
  {
    id: "physics",
    title: "Physics",
    slug: "physics",
    icon: BookText,
    description: "Study mechanics, electricity, magnetism, and other physics fundamentals.",
    color: "bg-green-500",
    materialCount: 28,
  },
  {
    id: "chemistry",
    title: "Chemistry",
    slug: "chemistry",
    icon: Search,
    description: "Explore organic compounds, chemical reactions, and periodic table elements.",
    color: "bg-red-500",
    materialCount: 22,
  },
  {
    id: "biology",
    title: "Biology",
    slug: "biology",
    icon: Layout,
    description: "Learn about cells, genetics, evolution, and biological systems.",
    color: "bg-yellow-500",
    materialCount: 19,
  },
  {
    id: "history",
    title: "History",
    slug: "history",
    icon: CalendarDays,
    description: "Discover world history, civilizations, and important historical events.",
    color: "bg-purple-500",
    materialCount: 25,
  },
  {
    id: "literature",
    title: "Literature",
    slug: "literature",
    icon: Edit,
    description: "Explore classic and contemporary literary works, analysis, and literary theory.",
    color: "bg-indigo-500",
    materialCount: 27,
  },
  {
    id: "compsci",
    title: "Computer Science",
    slug: "computer-science",
    icon: Link,
    description: "Programming, algorithms, data structures, and software development.",
    color: "bg-cyan-500",
    materialCount: 31,
  },
  {
    id: "geography",
    title: "Geography",
    slug: "geography",
    icon: Image,
    description: "Maps, climate, topography, and geographical regions of the world.",
    color: "bg-emerald-500",
    materialCount: 16,
  }
];
