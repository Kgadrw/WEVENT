import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     <div className="bg-gray-900 text-white py-2 px-4 text-sm fixed top-0 left-0 w-full z-50">
        <p className="whitespace-nowrap text-center">
          For booking and reservations, please contact us at:{" "}
          <strong>+250 786 7890</strong> or email us at{" "}
          <strong>info@wevent.com</strong>. It would be a great honor to work
          with you!
        </p>
      </div>
</div>

</div>
      <nav className="bg-black text-white py-4 px-6 md:px-12 shadow-md border-b border-gray-700 w-full mt-8">
        <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
          <h1 className="text-xl font-semibold tracking-tight">WEVENT</h1>

          <div className="hidden md:flex space-x-8 text-gray-300 text-sm font-medium">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex ml-4">
            <button className="text-sm bg-transparent text-white border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              Catering
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col mt-4 space-y-4 bg-gray-900 p-6 rounded-lg shadow-2xl backdrop-blur-md max-w-full mx-auto">
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              Programs
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              Catering
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
