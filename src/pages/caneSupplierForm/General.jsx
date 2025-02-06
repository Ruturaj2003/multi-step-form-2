const General = () => {
  return (
    <div className="max-h-[530px] flex flex-col justify-between bg-white pt-6 ">
      {/* Form Section */}
      <div className="w-full flex-1">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Personal Information
        </h2>

        {/* Form Grid Layout */}
        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="123-456-7890"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Save Button Section */}
      <div className="flex justify-end items-center p-4">
        <button className="h-[36px] px-5 text-white bg-teal-700 border-2 border-teal-700 rounded-md hover:bg-teal-600 transition">
          Save
        </button>
      </div>
    </div>
  );
};

export default General;
