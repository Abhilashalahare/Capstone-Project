import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2025 Disney-Movies. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
