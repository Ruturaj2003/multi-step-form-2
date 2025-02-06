import { Home, User, X } from 'lucide-react';

const FormLayout = () => {
  return (
    <div className="bg-teal-50 w-screen min-h-screen flex justify-center items-start">
      <div className="bg-white rounded-3xl shadow-2xl w-[80vw] min-h-[80vh] max-h-[90vh] mt-10 p-6 overflow-y-auto">
        <div className="h-20 w-full bg-teal-700 rounded-t-3xl rounded-b-xl flex justify-between px-4 items-center">
          {/* Navigation Container */}
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
          {/* Profile Picture */}
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <div className="w-14 h-14 bg-teal-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
