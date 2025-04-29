
export interface Material {
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
  featured: boolean;
  image?: string;
}

export const materials: Material[] = [
  {
    id: "m1",
    title: "Calculus Fundamentals: Understanding Derivatives and Integrals",
    description: "A comprehensive guide to mastering the basics of calculus, with clear examples and practice problems.",
    subject: "Mathematics",
    subjectSlug: "mathematics",
    author: {
      name: "Dr. Emma Wilson",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    publishedDate: "Apr 15, 2025",
    readTime: "12 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3",
  },
  {
    id: "m2",
    title: "Quantum Physics Explained: A Beginner's Guide",
    description: "Break down complex quantum concepts into understandable sections with visual explanations.",
    subject: "Physics",
    subjectSlug: "physics",
    author: {
      name: "Prof. Richard Chen",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    publishedDate: "Apr 12, 2025",
    readTime: "15 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3",
  },
  {
    id: "m3",
    title: "Organic Chemistry Reactions Cheat Sheet",
    description: "Quick reference guide for common organic chemistry reactions and mechanisms.",
    subject: "Chemistry",
    subjectSlug: "chemistry",
    author: {
      name: "Dr. Lauren Martinez",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    publishedDate: "Apr 10, 2025",
    readTime: "8 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-4.0.3",
  },
  {
    id: "m4",
    title: "Cell Biology: Structure and Function",
    description: "Detailed illustrations and notes on cell structures and their biological functions.",
    subject: "Biology",
    subjectSlug: "biology",
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    publishedDate: "Apr 8, 2025",
    readTime: "10 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1530973428-5bf2db2e4760?ixlib=rb-4.0.3",
  },
  {
    id: "m5",
    title: "World War II: Key Events and Timeline",
    description: "Chronological overview of major events and turning points during World War II.",
    subject: "History",
    subjectSlug: "history",
    author: {
      name: "Prof. Michael Brown",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    publishedDate: "Apr 5, 2025",
    readTime: "18 min",
    featured: false,
    image: "https://images.unsplash.com/photo-1544961371-516024f8e267?ixlib=rb-4.0.3",
  },
  {
    id: "m6",
    title: "Analyzing Shakespeare: Themes and Techniques",
    description: "Literary analysis of Shakespeare's major works, focusing on recurring themes and writing techniques.",
    subject: "Literature",
    subjectSlug: "literature",
    author: {
      name: "Prof. Elizabeth Taylor",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    publishedDate: "Apr 3, 2025",
    readTime: "14 min",
    featured: true,
    image: "https://images.unsplash.com/photo-1470091688026-38b776d2d303?ixlib=rb-4.0.3",
  }
];
