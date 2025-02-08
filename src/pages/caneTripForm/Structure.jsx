import { Outlet } from 'react-router-dom';
import Navbar from '../../components/caneTrip/Navbar';

const Structure = () => {
  return (
    <div className="bg-teal-50 w-screen min-h-screen justify-evenly flex flex-col md:flex-row items-center md:items-start p-4">
      {/* Info Sidebar */}
      <div className="bg-teal-700 text-white  md:w-[18%] h-[450px] lg:h-[250px] rounded-3xl p-4 flex flex-col items-center shadow-lg">
        <h2 className="text-lg font-semibold mb-2">User Info</h2>
        <p className="text-lg">👤 User Name: John Doe</p>
        <p className="text-lg">⏳ Arrive Time: 10:30 AM</p>
        <p className="text-lg">⏰ Current Time: 11:15 AM</p>
        <p className="text-lg">🛠 Shift: Morning</p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-2xl w-full md:w-[75%] lg:w-[80%] max-h-[90vh] mt-4 md:mt-0 p-6 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Form Content */}
        <div className="w-full bg-cyan-400 h-[540px] rounded-lg mt-4 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Structure;
