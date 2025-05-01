import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#1F2937] text-neutral-content p-10">
        <aside>
          <h3 className="uppercase footer-title">Contact Us</h3>
          <p>
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon -
            Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <p>Join us on social media</p>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <FaFacebookF className="text-2xl"></FaFacebookF>
            </a>

            <a href="#">
              <FaInstagram className="text-2xl" />
            </a>

            <a href="#">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Restaurant Management
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
