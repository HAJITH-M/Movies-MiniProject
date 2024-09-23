  import React from 'react';
  import { FaHome, FaVideo, FaStar, FaBars } from 'react-icons/fa';
  import { Link, useLocation } from 'react-router-dom';

  const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const isActive = (path) => {
      return location.pathname === path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white';
    };

    const navItems = [
      { path: '/', icon: FaHome, text: 'Home' },
      { path: '/movies', icon: FaVideo, text: 'Movies' },
      { path: '/ratings', icon: FaStar, text: 'Ratings' }
    ];

    return (
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-bold text-xl">MovieHub</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive(item.path)}`}
                  >
                    <item.icon className="mr-2" />
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <FaBars className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} />
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${isActive(item.path)}`}
              >
                <item.icon className="mr-2" />
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;