import React from 'react';
import { Award, BookOpen, Users, Clock } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Award className="w-10 h-10 text-blue-600" />,
    title: 'Giảng viên chất lượng cao',
    description: 'Đội ngũ giảng viên có trình độ cao, nhiều kinh nghiệm và đam mê giảng dạy.'
  },
  {
    id: 2,
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    title: 'Nội dung khóa học phong phú',
    description: 'Chương trình học được thiết kế khoa học, cập nhật và phù hợp với nhu cầu thực tế.'
  },
  {
    id: 3,
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: 'Cộng đồng học tập',
    description: 'Tham gia cộng đồng học tập sôi động, chia sẻ kiến thức và kinh nghiệm.'
  },
  {
    id: 4,
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: 'Học tập linh hoạt',
    description: 'Học mọi lúc, mọi nơi với nền tảng học tập trực tuyến tiên tiến.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tại sao chọn VUS?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm học tập tốt nhất với đội ngũ giảng viên chất lượng cao và nội dung khóa học phong phú.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-700 text-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Sẵn sàng bắt đầu hành trình học tập của bạn?</h3>
              <p className="mb-6 opacity-90">
                Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt và bắt đầu hành trình học tập của bạn với VUS Education Center.
              </p>
              <div>
                <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
                  Đăng ký ngay
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;