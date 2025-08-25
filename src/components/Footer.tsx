import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/" },
  ];

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Books",
    "Sports",
    "Beauty",
  ];

  const socialIcons = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Ezaar</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted online marketplace for quality products at best
              prices. Shop with confidence and convenience.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-8 h-8 bg-gray-100 hover:bg-blue-50 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <h4 className="font-medium text-gray-700 mb-2">Support</h4>
              <div className="space-y-1">
                <Link
                  href="/contact"
                  className="block text-gray-600 hover:text-blue-600 text-sm"
                >
                  Help Center
                </Link>
                <Link
                  href="/product"
                  className="block text-gray-600 hover:text-blue-600 text-sm"
                >
                  Shipping Info
                </Link>
                <Link
                  href="/"
                  className="block text-gray-600 hover:text-blue-600 text-sm"
                >
                  Returns
                </Link>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
            <div className="grid grid-cols-2 gap-1">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={'/product'}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm py-1"
                >
                  {category}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <h4 className="font-medium text-gray-700 mb-2">Legal</h4>
              <div className="space-y-1">
                <Link
                  href="/contact"
                  className="block text-gray-600 hover:text-blue-600 text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/"
                  className="block text-gray-600 hover:text-blue-600 text-sm"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="text-sm text-gray-600">
              © 2024 Ezaar. All rights reserved.
            </div>
            <div className="text-sm text-gray-500">
              Made with ❤️ for better shopping experience
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
