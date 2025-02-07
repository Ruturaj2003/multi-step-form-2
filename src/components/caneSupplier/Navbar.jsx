import { Home, List, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Helper Function to identify the active link

  const getLinkClass = (path) => {
    return `flex-1 h-full flex items-center justify-center gap-2 cursor-pointer rounded-lg px-3 py-2 sm:py-0 transition hover:bg-gray-100  ${
      location.pathname === path ? ' bg-white shadow-md' : ''
    } `;
  };

  return (
    <div className="w-full sm:w-2/3 h-12 sm:h-14 flex flex-wrap sm:flex-nowrap items-center justify-center bg-teal-100 rounded-lg p-1 gap-2 sm:gap-0">
      {/* Personal Tab */}
      <Link to={'/cane-supplier'} className={getLinkClass('/cane-supplier')}>
        <User size={16} />
        <span className="text-sm sm:text-base">Personal</span>
      </Link>

      {/* Address Tab */}
      <Link
        to={'/cane-supplier/address'}
        className={getLinkClass('/cane-supplier/address')}
      >
        <Home size={16} />
        <span className="text-sm sm:text-base">Address</span>
      </Link>

      {/* Billing Tab */}
      <Link
        to={'/cane-supplier/billing'}
        className={getLinkClass('/cane-supplier/billing')}
      >
        <List size={16} />
        <span className="text-sm sm:text-base">Billing</span>
      </Link>
    </div>
  );
};

export default Navbar;
