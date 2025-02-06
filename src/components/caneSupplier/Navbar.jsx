import { Home, User } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-2/3 h-12 flex items-center justify-evenly bg-teal-100 rounded-lg p-1">
      <div
        data-value="general"
        className="flex-1 h-full flex items-center justify-center gap-2 cursor-pointer bg-white shadow-xl rounded-lg"
      >
        <User size={16} />
        <span>Personal</span>
      </div>
      <div
        data-value="address"
        className="flex-1 h-full flex items-center justify-center gap-2 cursor-pointer rounded-lg"
      >
        <Home size={16} />
        <span>Address</span>
      </div>
      <div
        data-value="billing"
        className="flex-1 h-full flex items-center justify-center gap-2 cursor-pointer rounded-lg"
      >
        <User size={16} />
        <span>Billing</span>
      </div>
    </div>
  );
};
export default Navbar;
