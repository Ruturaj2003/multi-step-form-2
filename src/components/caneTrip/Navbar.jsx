import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  User,
  LayoutGrid,
  Truck,
  BarChart2,
  Percent,
  MessageSquare,
  CheckSquare,
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  // Define steps with labels, icons, and target paths
  const steps = [
    { label: 'Basic Details', icon: <User size={16} />, path: '/cane-trip' },
    {
      label: 'Cane & Plot Info',
      icon: <LayoutGrid size={16} />,
      path: '/cane-trip/caneAndPlotInfo',
    },
    {
      label: 'Location & Vehicle',
      icon: <Truck size={16} />,
      path: '/cane-trip/locationAndVehicle',
    },
    {
      label: 'Cane Weight',
      icon: <BarChart2 size={16} />,
      path: '/cane-trip/caneWeight',
    },
    {
      label: 'Deduction',
      icon: <Percent size={16} />,
      path: '/cane-trip/deduction',
    },
    {
      label: 'Trip & Remarks',
      icon: <MessageSquare size={16} />,
      path: '/cane-trip/tripAndRemarks',
    },
    {
      label: 'Output',
      icon: <CheckSquare size={16} />,
      path: '/cane-trip/output',
    },
  ];

  // Helper function to determine classes based on active route
  const getLinkClass = (path) => {
    return `flex items-center justify-center gap-2 cursor-pointer rounded-lg px-3 py-2 transition hover:bg-gray-100 ${
      location.pathname === path
        ? 'bg-white shadow-md text-teal-700'
        : 'bg-teal-100 text-gray-500'
    }`;
  };

  return (
    <div className="w-full">
      <div className="bg-teal-100 rounded-lg p-1 flex flex-wrap md:grid md:grid-cols-4 lg:flex lg:flex-nowrap gap-2">
        {steps.map((step, index) => (
          <Link key={index} to={step.path} className={getLinkClass(step.path)}>
            {step.icon}
            <span className="text-xs sm:text-sm md:text-base">
              {step.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
