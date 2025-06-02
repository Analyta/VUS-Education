import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Tiếng Anh giao tiếp cho người mới bắt đầu',
    instructor: 'TS. Nguyễn Văn A',
    image: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg',
    price: '1.200.000 VNĐ',
    originalPrice: '1.500.000 VNĐ',
    rating: 4.8,
    students: 1250,
    duration: '10 tuần'
  },
  {
    id: 2,
    title: 'Lập trình Web với React và Node.js',
    instructor: 'ThS. Trần Văn B',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    price: '1.800.000 VNĐ',
    originalPrice: '2.200.000 VNĐ',
    rating: 4.9,
    students: 850,
    duration: '12 tuần'
  },
  {
    id: 3,
    title: 'Marketing Online cho doanh nghiệp nhỏ',
    instructor: 'TS. Lê Thị C',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    price: '1.500.000 VNĐ',
    originalPrice: '1.900.000 VNĐ',
    rating: 4.7,
    students: 720,
    duration: '8 tuần'
  },
  {
    id: 4,
    title: 'Thiết kế đồ họa với Adobe Photoshop',
    instructor: 'ThS. Phạm Văn D',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    price: '1.400.000 VNĐ',
    originalPrice: '1.800.000 VNĐ',
    rating: 4.6,
    students: 950,
    duration: '10 tuần'
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Khóa học nổi bật</h2>
          <a href="#" className="text-blue-600 hover:underline font-medium">Xem tất cả</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  HOT
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.instructor}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Users className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-sm">{course.students}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-blue-700">{course.price}</span>
                    <span className="text-gray-500 text-sm line-through ml-2">{course.originalPrice}</span>
                  </div>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-md text-sm">
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;