import Navbar from '../../components/caneSupplier/Navbar';
import { Outlet } from 'react-router-dom';
import { IoPersonCircle } from 'react-icons/io5';

const FormLayout = () => {
  return (
    <div className="bg-teal-50 w-screen min-h-screen flex justify-center items-start">
      <div className="bg-white rounded-3xl shadow-2xl min-w-[70vw] max-w-[80vw]  max-h-[90vh] mt-10 p-6 overflow-y-auto">
        {/* Top Bar Container */}
        <div className="h-20 w-full bg-teal-700 rounded-t-3xl rounded-b-xl flex justify-between px-4 items-center">
          {/* Navigation Container */}
          <Navbar></Navbar>
          {/* Profile Picture */}
          <div className="w-16 h-16 bg-white cursor-pointer rounded-full flex items-center justify-center">
            <IoPersonCircle className="w-14 h-14 text-teal-700 rounded-full"></IoPersonCircle>
          </div>
        </div>
        {/* Form */}
        {/* <General></General> */}
        {/* <Address></Address> */}
        {/* <Billing></Billing> */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default FormLayout;
