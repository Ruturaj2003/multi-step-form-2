const General = () => {
  return (
    <div className="h-[530px] flex flex-col justify-between">
      {/* Form Section */}
      <div className="bg-blue-300 w-full h-[470px] flex items-center justify-center">
        as
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
