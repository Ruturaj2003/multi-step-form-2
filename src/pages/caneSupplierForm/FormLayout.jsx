import { Home, User } from 'lucide-react';
import Navbar from '../../components/caneSupplier/Navbar';
import General from './General';
import Address from './Address';

const FormLayout = () => {
  return (
    <div className="bg-teal-50 w-screen min-h-screen flex justify-center items-start">
      <div className="bg-white rounded-3xl shadow-2xl min-w-[70vw] max-w-[80vw]  max-h-[90vh] mt-10 p-6 overflow-y-auto">
        {/* Top Bar Container */}
        <div className="h-20 w-full bg-teal-700 rounded-t-3xl rounded-b-xl flex justify-between px-4 items-center">
          {/* Navigation Container */}
          <Navbar></Navbar>
          {/* Profile Picture */}
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <div className="w-14 h-14 bg-teal-100 rounded-full"></div>
          </div>
        </div>
        {/* Form */}
        {/* <General></General> */}
        <Address></Address>
      </div>
    </div>
  );
};

export default FormLayout;
