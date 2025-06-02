import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Nâng cao kỹ năng của bạn với các khóa học chất lượng cao
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Khám phá hàng trăm khóa học từ các chuyên gia hàng đầu. Học bất cứ lúc nào, bất cứ nơi đâu và nâng cao sự nghiệp của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center justify-center">
                Khóa học của chúng tôi
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="border border-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-md font-medium transition-colors">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg" 
              alt="Students learning" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-blue-900 p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm font-medium">Khóa học trực tuyến</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
};

export default Hero;