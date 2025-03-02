import React, { useState } from 'react';

export default function CaneForm() {
  const [formData, setFormData] = useState({
    basicDetails: {
      slipNo: '',
      date: '',
      tokenNo: '',
      entryNo: '',
      orderNo: '',
      caneSupplier: '',
      lastTokenNo: '',
    },
    caneAndPlotInfo: {
      plotNo: '',
      surveyNo: '',
      plantArea: '',
      cropType: '',
      caneVariety: '',
      waterSrc: '',
      distance: '',
    },
    locationAndVehicle: {
      caneVillage: '',
      vehicleType: '',
      harvestor: '',
      vehicleNo: '',
      transporter: '',
      driverName: '',
    },
    caneWeight: {
      caneType: '',
      loadWeight: '',
      tareWeight: '',
      bindingWeight: '',
      netWeight: '',
    },
    deduction: {
      tonnageDeduction: '',
      deductionWeight: '',
      deductionSupplier: '',
      deductionHarvestor: '',
      deductionTransporter: '',
    },
    tripAndRemarks: {
      tareWtDateTime: '',
      trips: '',
      remarks: '',
      securityNo: '',
    },
    output: {
      totalMemberWeight: '',
      totalHarvestWeight: '',
      totalTransportWeight: '',
    },
  });

  const handleChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  return (
    <div className="w-screen h-screen p-6 bg-teal-50 flex flex-col overflow-hidden">
      <h2 className="text-lg font-bold text-teal-700 text-center mb-2">
        Cane Form
      </h2>
      <div className="flex-1  grid grid-cols-4 gap-2 overflow-auto">
        {Object.entries(formData).map(([section, fields]) => (
          <div
            key={section}
            className="border border-teal-700/40 bg-white rounded p-2 flex flex-col"
          >
            <h3 className="text-teal-700 font-semibold text-center text-xs mb-1">
              {section.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="grid grid-cols-2 gap-2 flex-1">
              {Object.entries(fields).map(([field, value]) => (
                <div key={field}>
                  <label className="block text-[0.7rem] font-medium text-gray-700">
                    {field.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      handleChange(section, field, e.target.value)
                    }
                    className="w-full border border-teal-700 rounded p-1 text-[0.7rem]"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="text-left ml-14  mt-16">
          <button className="bg-teal-700 h-10 w-16 hover:bg-teal-800 text-white py-1 px-3 rounded shadow text-xs">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
