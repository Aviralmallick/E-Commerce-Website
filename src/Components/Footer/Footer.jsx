import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
Discover a world of style and convenience at our online emporium. We offer a curated selection of the latest trends, ensuring every click brings you closer to your fashion aspirations. With a seamless shopping experience and unparalleled customer service, we're dedicated to making your online shopping journey delightful. Welcome to your new destination for effortless elegance and unparalleled style. </p>
        </div>
        <div className="footer-section">
          <h2>Categories</h2>
          <ul>
            <li><a href="/">Laptops</a></li>
            <li><a href="/">Smartphones</a></li>
            <li><a href="/">Clothing</a></li>
            <li><a href="/">Electronics</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +123456789</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YourWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
