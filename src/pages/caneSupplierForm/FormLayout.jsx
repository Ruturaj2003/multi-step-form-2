import { useState } from 'react';
import Navbar from '../../components/caneSupplier/Navbar';
import { Outlet } from 'react-router-dom';
import { IoPersonCircle, IoSearch } from 'react-icons/io5';

const indianNames = [
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
];

const FormLayout = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredNames = indianNames.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredNames);
    } else {
      setSuggestions([]);
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
              />
            </div>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-10">
                {suggestions.map((name, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-teal-100"
                    onClick={() => {
                      setSearchTerm(name);
                      setSuggestions([]);
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
