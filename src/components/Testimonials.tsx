import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Thị Minh',
    role: 'Sinh viên',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    content: 'Tôi đã hoàn thành khóa học tiếng Anh tại VUS và thực sự ấn tượng với chất lượng giảng dạy. Giảng viên rất nhiệt tình và chuyên nghiệp.',
    rating: 5
  },
  {
    id: 2,
    name: 'Trần Văn Hùng',
    role: 'Nhân viên văn phòng',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    content: 'Khóa học lập trình web đã giúp tôi có được công việc mơ ước. Nội dung khóa học rất thực tế và dễ hiểu, phù hợp với người mới bắt đầu.',
    rating: 5
  },
  {
    id: 3,
    name: 'Lê Thị Hương',
    role: 'Doanh nhân',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    content: 'Tôi đã tham gia khóa học Marketing Online và đã áp dụng thành công vào doanh nghiệp của mình. Cảm ơn VUS đã mang đến khóa học chất lượng.',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Học viên nói gì về chúng tôi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hàng ngàn học viên đã tin tưởng và lựa chọn VUS Education Center. Hãy xem họ nói gì về trải nghiệm học tập của mình.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;