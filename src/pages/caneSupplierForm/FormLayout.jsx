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
    <div className="bg-teal-50 w-screen min-h-screen flex justify-center items-start">
      <div className="bg-white rounded-3xl shadow-2xl min-w-[70vw] max-w-[80vw] max-h-[90vh] mt-10 p-6 overflow-y-auto">
        {/* Top Bar Container */}
        <div className="h-20 w-full bg-teal-700 rounded-t-3xl rounded-b-xl flex justify-between px-4 items-center relative">
          {/* Navigation Container */}
          <Navbar />

          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-md">
              <IoSearch className="text-teal-700 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 outline-none bg-transparent text-teal-700 placeholder-teal-400"
                value={searchTerm}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
              />
            </div>

            {/* Suggestions Dropdown with Fixed Height & Scroll */}
            {suggestions.length > 0 && (
              <ul className="absolute left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-10 max-h-40 overflow-y-auto">
                {suggestions.map((name, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 cursor-pointer ${
                      activeIndex === index
                        ? 'bg-teal-100'
                        : 'hover:bg-teal-100'
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(-1)}
                    onClick={() => {
                      setSearchTerm(name);
                      setSuggestions([]);
                      setActiveIndex(-1);
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Profile Picture */}
          <div className="w-16 h-16 bg-white cursor-pointer rounded-full flex items-center justify-center">
            <IoPersonCircle className="w-14 h-14 text-teal-700 rounded-full" />
          </div>
        </div>

        {/* Form Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default FormLayout;
