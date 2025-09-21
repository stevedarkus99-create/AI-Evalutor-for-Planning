
import React from 'react';

const InputField: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex-1 min-w-[200px]">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary sm:text-sm"
    />
  </div>
);

export const Header: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <div className="space-y-4">
          <InputField label="Provider name:" />
          <InputField label="Name and Position of Responsible Officer:" />
        </div>
        <div className="space-y-4">
          <InputField label="Name of AI tool:" />
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Signed:" />
            <InputField label="Dated:" />
          </div>
        </div>
      </div>
    </div>
  );
};
