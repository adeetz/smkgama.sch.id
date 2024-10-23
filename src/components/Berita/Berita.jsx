import React from 'react';
import { Calendar, Clock, BookOpen, Share2 } from 'lucide-react';

const MaterialNewsCard = ({ 
  title, 
  description, 
  date, 
  readTime, 
  category, 
  author, 
  link 
}) => {
  return (
    <div className="group relative w-full max-w-sm bg-white rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl">
      {/* Featured Image with gradient overlay */}
      <div className="relative h-56 overflow-hidden">
        <img
          src="/api/placeholder/400/300"
          alt="News thumbnail"
          className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute z-10 top-4 left-4">
          <span className="px-4 py-1 text-sm font-medium text-gray-800 rounded-full shadow-sm bg-white/90 backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Share Button */}
        <button className="absolute p-2 transition-colors rounded-full shadow-sm top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white">
          <Share2 className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title with Link */}
        <a 
          href={link}
          className="block mb-3 transition-colors hover:text-blue-600"
        >
          <h3 className="text-xl font-semibold leading-tight text-gray-900 line-clamp-2">
            {title}
          </h3>
        </a>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {description}
        </p>

        {/* Footer Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-600">
            By {author}
          </span>

          <a 
            href={link}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full shadow-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:shadow-md"
          >
            <BookOpen className="w-4 h-4" />
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

const NewsSection = () => {
  const newsData = [
    {
      title: "Perkembangan Teknologi AI di Indonesia Tahun 2024",
      description: "Melihat bagaimana perkembangan teknologi AI telah mengubah landscape digital di Indonesia, dari startup hingga enterprise.",
      date: "22 Oct 2024",
      readTime: "5 min read",
      category: "Technology",
      author: "Budi Santoso",
      link: "/news/ai-development"
    },
    {
      title: "Startup Indonesia Memasuki Babak Baru di Era Digital",
      description: "Bagaimana startup Indonesia beradaptasi dengan perubahan teknologi dan kebutuhan pasar di era digital.",
      date: "21 Oct 2024",
      readTime: "4 min read",
      category: "Business",
      author: "Siti Rahma",
      link: "/news/startup-era"
    },
    {
      title: "Transformasi Digital di Sektor Pendidikan",
      description: "Mengulas dampak digitalisasi terhadap metode pembelajaran dan sistem pendidikan di Indonesia.",
      date: "20 Oct 2024",
      readTime: "6 min read",
      category: "Education",
      author: "Ahmad Rizki",
      link: "/news/education-digital"
    }
  ];

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Berita Terkini
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news, index) => (
            <MaterialNewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;