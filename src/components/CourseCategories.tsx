import React from 'react';
import { BookOpen, Code, Globe, Briefcase, PenTool, Music } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'Ngoại ngữ',
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    count: 120,
    color: 'bg-blue-100'
  },
  {
    id: 2,
    title: 'Lập trình',
    icon: <Code className="w-8 h-8 text-green-600" />,
    count: 85,
    color: 'bg-green-100'
  },
  {
    id: 3,
    title: 'Kinh doanh',
    icon: <Briefcase className="w-8 h-8 text-purple-600" />,
    count: 65,
    color: 'bg-purple-100'
  },
  {
    id: 4,
    title: 'Thiết kế',
    icon: <PenTool className="w-8 h-8 text-orange-600" />,
    count: 40,
    color: 'bg-orange-100'
  },
  {
    id: 5,
    title: 'Âm nhạc',
    icon: <Music className="w-8 h-8 text-red-600" />,
    count: 30,
    color: 'bg-red-100'
  },
  {
    id: 6,
    title: 'Học thuật',
    icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
    count: 95,
    color: 'bg-indigo-100'
  }
];

const CourseCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Khám phá danh mục khóa học</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp nhiều loại khóa học khác nhau để đáp ứng nhu cầu học tập của bạn. Hãy khám phá danh mục khóa học phong phú của chúng tôi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`${category.color} rounded-xl p-6 transition-transform hover:scale-105 cursor-pointer`}
            >
              <div className="flex items-start">
                <div className="mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.count} khóa học</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;