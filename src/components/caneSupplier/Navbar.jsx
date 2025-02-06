import { Home, User } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-full sm:w-2/3 h-12 sm:h-14 flex flex-wrap sm:flex-nowrap items-center justify-center bg-teal-100 rounded-lg p-1 gap-2 sm:gap-0">
      {/* Personal Tab */}
      <div
        data-value="general"
        className="flex-1 h-full flex items-center justify-center gap-2 cursor-pointer bg-white shadow-md rounded-lg px-3 py-2 sm:py-0 transition hover:bg-gray-100"
      >
        <User size={16} />
        <span className="text-sm sm:text-base">Personal</span>
      </div>

      {/* Address Tab */}
      <div
        data-value="address"
        className="flex-1 h-full flex items-center justify-center gap-2 cursor-pointer rounded-lg px-3 py-2 sm:py-0 transition hover:bg-gray-100"
      >
        <Home size={16} />
        <span className="text-sm sm:text-base">Address</span>
      </div>

      {/* Billing Tab */}
      <div
        data-value="billing"
        className="flex-1 h-full flex items-center justify-center gap-2 cursor-pointer rounded-lg px-3 py-2 sm:py-0 transition hover:bg-gray-100"
      >
        <User size={16} />
        <span className="text-sm sm:text-base">Billing</span>
      </div>
    </div>
  );
};

export default Navbar;
