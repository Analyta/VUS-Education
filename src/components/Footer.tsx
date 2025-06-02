import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">VUS Education Center</div>
            <p className="mb-4 text-blue-200">
              Trung tâm đào tạo hàng đầu với sứ mệnh mang đến kiến thức và kỹ năng cho mọi người.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Khóa học</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Ngoại ngữ</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Công nghệ thông tin</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Kinh doanh & Marketing</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Kỹ năng mềm</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Thiết kế đồ họa</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Về chúng tôi</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Đội ngũ giảng viên</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Tin tức & Sự kiện</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Hỗ trợ</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Chính sách bảo mật</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-blue-300" />
                <span className="text-blue-200">
                  Tòa nhà VUS, 123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-300" />
                <span className="text-blue-200">(028) 7308 3333</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-300" />
                <span className="text-blue-200">info@vus.edu.vn</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} VUS Education Center. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;