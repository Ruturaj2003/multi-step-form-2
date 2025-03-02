import React, { useState } from 'react';
import { BASE_URL } from '../../App';
import { toast } from 'react-toastify';

const InputField = ({ label, type, value, onChange }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full border border-teal-700 rounded p-1 text-sm"
    />
  </div>
);

const Section = ({ title, fields, sectionKey, handleChange }) => (
  <div className="border border-teal-700/40 bg-white rounded p-4 flex flex-col space-y-2">
    <h3 className="text-teal-700 font-semibold text-center text-base mb-2">
      {title}
    </h3>
    <div className="grid grid-cols-2 gap-3">
      {Object.entries(fields).map(([field, value]) => {
        let inputType = 'text';

        if (['Date'].includes(field)) {
          inputType = 'date';
        } else if (['TareWtDateTime'].includes(field)) {
          inputType = 'datetime-local';
        } else if (
          [
            'LoadWeight',
            'TareWeight',
            'BindingWeight',
            'NetWeight',
            'TonnageDeduction',
            'DeductionWeight',
            'Trips',
            'TotalMemberWeight',
            'TotalHarvestWeight',
            'TotalTransportWeight',
          ].includes(field)
        ) {
          inputType = 'number';
        }

        return (
          <InputField
            key={field}
            label={field.replace(/([A-Z])/g, ' $1').trim()}
            type={inputType}
            value={value}
            onChange={(e) => handleChange(sectionKey, field, e.target.value)}
          />
        );
      })}
    </div>
  </div>
);

export default function CaneForm() {
  const [formData, setFormData] = useState({
    BasicDetails: {
      SlipNo: '',
      Date: '',
      TokenNo: '',
      EntryNo: '',
      OrderNo: '',
      CaneSupplier: '',
      LastTokenNo: '',
    },
    CaneAndPlotInfo: {
      PlotNo: '',
      SurveyNo: '',
      PlantArea: '',
      CropType: '',
      CaneVariety: '',
      WaterSrc: '',
      Distance: '',
    },
    LocationAndVehicle: {
      CaneVillage: '',
      VehicleType: '',
      Harvestor: '',
      VehicleNo: '',
      Transporter: '',
      DriverName: '',
    },
    CaneWeight: {
      CaneType: '',
      LoadWeight: '',
      TareWeight: '',
      BindingWeight: '',
      NetWeight: '',
    },
    Deduction: {
      TonnageDeduction: '',
      DeductionWeight: '',
      DeductionSupplier: '',
      DeductionHarvestor: '',
      DeductionTransporter: '',
    },
    TripAndRemarks: {
      TareWtDateTime: '',
      Trips: '',
      Remarks: '',
      SecurityNo: '',
    },
    Output: {
      TotalMemberWeight: '',
      TotalHarvestWeight: '',
      TotalTransportWeight: '',
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

  const validateForm = () => {
    for (const [section, fields] of Object.entries(formData)) {
      for (const [field, value] of Object.entries(fields)) {
        if (!value) {
          toast.error(
            `${field.replace(/([A-Z])/g, ' $1').trim()} is required.`
          );
          return false;
        }
        if (
          [
            'LoadWeight',
            'TareWeight',
            'BindingWeight',
            'NetWeight',
            'TonnageDeduction',
            'DeductionWeight',
            'Trips',
            'TotalMemberWeight',
            'TotalHarvestWeight',
            'TotalTransportWeight',
          ].includes(field) &&
          (isNaN(value) || value < 0)
        ) {
          toast.error(
            `${field
              .replace(/([A-Z])/g, ' $1')
              .trim()} must be a positive number.`
          );
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch(BASE_URL + '/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      toast.success('Form submitted successfully!');
      console.log(formData);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to submit the form.');
    }
  };

  return (
    <div className="w-screen h-screen p-6 bg-teal-50 flex flex-col space-y-4 overflow-hidden">
      <h2 className="text-xl font-bold text-teal-700 text-center">Cane Form</h2>
      <div className="grid grid-cols-4 gap-4 flex-1">
        {Object.entries(formData).map(([section, fields]) => (
          <Section
            key={section}
            title={section.replace(/([A-Z])/g, ' $1').trim()}
            fields={fields}
            sectionKey={section}
            handleChange={handleChange}
          />
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-teal-700 hover:bg-teal-800 text-white py-2 px-6 rounded shadow-md text-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
