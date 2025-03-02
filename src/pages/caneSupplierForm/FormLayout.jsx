import { useState } from 'react';
import Navbar from '../../components/caneSupplier/Navbar';
import { Outlet } from 'react-router-dom';
import { IoPersonCircle, IoSearch } from 'react-icons/io5';

const names = [
  'Aarav',
  'Aditi',
  'Bhavesh',
  'Charan',
  'Devika',
  'Eshan',
  'Farhan',
  'Gauri',
  'Harsh',
  'Ishaan',
  'Jhanvi',
  'Kunal',
  'Lakshmi',
  'Meera',
  'Neha',
  'Omkar',
  'Pranav',
  'Riya',
  'Siddharth',
  'Tanvi',
  'Umesh',
  'Vikram',
  'Yash',
];

const FormLayout = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setActiveIndex(-1);

    if (value) {
      const filteredNames = names.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredNames);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && activeIndex !== -1) {
      setSearchTerm(suggestions[activeIndex]);
      setSuggestions([]);
      setActiveIndex(-1);
    }
  };

  return (
    <div className="bg-teal-50 min-h-screen flex justify-center items-start p-4 lg:p-8">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl overflow-hidden">
        {/* Top Bar Container */}
        <div className="bg-teal-700 px-6 py-4 flex items-center justify-between gap-4">
          {/* Navigation Container */}
          <Navbar />

          {/* Search Bar */}
          <div className="flex-1 max-w-xl relative">
            <div className="flex items-center bg-white px-4 py-3 rounded-full shadow-md transition-all duration-200 focus-within:shadow-lg focus-within:ring-2 ring-teal-200">
              <IoSearch className="text-teal-700 w-5 h-5 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-3 w-full outline-none bg-transparent text-teal-900 placeholder-teal-500 text-sm font-medium"
                value={searchTerm}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                aria-label="Search contacts"
              />
            </div>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 mt-2 bg-white border border-teal-100 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-teal-200">
                {suggestions.map((name, index) => (
                  <li
                    key={index}
                    className={`px-4 py-3 cursor-pointer transition-colors duration-150 ${
                      activeIndex === index
                        ? 'bg-teal-50 text-teal-900'
                        : 'hover:bg-teal-50 text-teal-800'
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(-1)}
                    onClick={() => {
                      setSearchTerm(name);
                      setSuggestions([]);
                      setActiveIndex(-1);
                    }}
                  >
                    <span className="block text-sm font-medium">{name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Profile Picture */}
          <button className="flex-shrink-0 hover:opacity-80 transition-opacity duration-200">
            <span className="sr-only">User profile</span>
            <IoPersonCircle className="w-12 h-12 text-teal-100" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 lg:p-8 overflow-y-auto max-h-[75vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
