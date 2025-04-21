import { useState } from "react";

import DropdownMenu from "./DropDownMenu";

const DropdownShowcase = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="p-4 flex flex-col items-center mb-10">
      <h2 className="text-2xl font-bold mb-6">Dropdown Usage</h2>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setIsMobile(false)}
          className={`px-4 py-2 rounded-md ${
            !isMobile ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Desktop Mode
        </button>
        <button
          onClick={() => setIsMobile(true)}
          className={`px-4 py-2 rounded-md ${
            isMobile ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Mobile Mode
        </button>
      </div>

      <div className="flex gap-4 p-4">
        <DropdownMenu
          options={[
            { value: "opt1", label: "Option 1" },
            { value: "opt2", label: "Option 2", disabled: true },
            { value: "opt3", label: "Option 3" },
          ]}
          onSelect={val => console.log(val)}
          buttonText="Choose"
          variant="text"
          isMobile={isMobile}
        />

        <DropdownMenu
          options={[
            { value: "1", label: "Active Option" },
            { value: "2", label: "Disabled Option", disabled: true },
            { value: "3", label: "Selected Option" },
          ]}
          selectedOption="3"
          onSelect={val => console.log(val)}
          variant="moodlet"
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

export default DropdownShowcase;
