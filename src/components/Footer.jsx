import React from "react";
const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-12 px-6 md:px-16 font-poppins">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Brand Logo & Info */}
        <div>
          <img src="/swiggy.webp" alt="Your Logo Here" className="h-12 mb-3" />
          <p className="text-sm leading-relaxed opacity-80">
            Delivering happiness to your doorstep. Order your favorite food now!
          </p>
          <p className="text-sm mt-4 opacity-70">© 2025 Your Company</p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-3 text-white">Company</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="hover:text-orange-400 cursor-pointer">About Us</li>
              <li className="hover:text-orange-400 cursor-pointer">Careers</li>
              <li className="hover:text-orange-400 cursor-pointer">Team</li>
              <li className="hover:text-orange-400 cursor-pointer">Services</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3 text-white">Support</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="hover:text-orange-400 cursor-pointer">Help & Support</li>
              <li className="hover:text-orange-400 cursor-pointer">Partner With Us</li>
              <li className="hover:text-orange-400 cursor-pointer">Work With Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3 text-white">Legal</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="hover:text-orange-400 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-orange-400 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-orange-400 cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* Social Media & App Downloads */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-white">Follow Us</h3>
          <div className="flex space-x-3">
            <span className="w-10 h-10   flex justify-center items-center  transition">
              <img src="/facebook.png" alt="Facebook Icon" className="h-8" />
            </span>
            <span className="w-10 h-10   flex justify-center items-center transition">
              <img src="/insta.png" alt="Instagram Icon" className="h-8" />
            </span>
            <span className="w-10 h-10  flex justify-center items-center  transition">
              <img src="/x.png" alt="Twitter Icon" className="h-8" />
            </span>
          </div>

          <h3 className="font-semibold text-lg mt-6 text-white">Get the App</h3>
          <div className="flex space-x-4 mt-2">
            <img src="/googleplay.png" alt="Google Play" className="h-12" />
            <img src="/app.png" alt="App Store" className="h-12 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 pt-6 text-center">
        <p className="text-sm opacity-80">
          Made with ❤️ by <span className="text-orange-400 font-semibold">Arjun Agarwal</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
