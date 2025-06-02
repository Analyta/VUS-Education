import React, { useState } from 'react';
import { Search, Menu, X, Phone, Mail, User, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-blue-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span className="text-sm">(028) 7308 3333</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={16} />
              <span className="text-sm">info@vus.edu.vn</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm hover:underline">Đăng nhập</a>
            <a href="#" className="text-sm hover:underline">Đăng ký</a>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-700 mr-2">VUS</div>
            <div className="hidden md:block text-xl font-semibold">Education Center</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-medium hover:text-blue-700">Trang chủ</a>
            <a href="#" className="font-medium hover:text-blue-700">Khóa học</a>
            <a href="#" className="font-medium hover:text-blue-700">Giảng viên</a>
            <a href="#" className="font-medium hover:text-blue-700">Tin tức</a>
            <a href="#" className="font-medium hover:text-blue-700">Liên hệ</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart size={20} />
            </button>
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="py-2 hover:text-blue-700">Trang chủ</a>
              <a href="#" className="py-2 hover:text-blue-700">Khóa học</a>
              <a href="#" className="py-2 hover:text-blue-700">Giảng viên</a>
              <a href="#" className="py-2 hover:text-blue-700">Tin tức</a>
              <a href="#" className="py-2 hover:text-blue-700">Liên hệ</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;