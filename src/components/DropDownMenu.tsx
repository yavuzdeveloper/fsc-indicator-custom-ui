import React, { useState, useRef, useEffect } from "react";

import Moodlet from "./Moodlet";

type DropdownOption = {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
};

type DropdownMenuProps = {
  options: DropdownOption[];
  onSelect: (option: string) => void;
  buttonText?: string;
  variant?: "text" | "moodlet" | "icon";
  selectedOption?: string | null;
  disabled?: boolean;
  isMobile?: boolean;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  onSelect,
  buttonText = "Select",
  variant = "text",
  selectedOption = null,
  disabled = false,
  isMobile = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    if (!options.find(o => o.value === option)?.disabled) {
      onSelect(option);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const mobileStyles = isMobile
    ? {
        button: "px-5 py-3 text-base",
        dropdown: "w-72",
        option: "px-4 py-3 text-base rounded-[10px]",
        icon: "w-5 h-5",
        gap: "gap-4",
        moodlet: "text-lg",
      }
    : {
        button: "px-4 py-2 text-sm",
        dropdown: "w-45",
        option: "px-3 py-1.5 text-sm rounded-[8px]",
        icon: "w-4 h-4",
        gap: "gap-3",
        moodlet: "text-base",
      };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          ${mobileStyles.button} rounded-md font-medium flex items-center ${
          mobileStyles.gap
        }
          ${
            disabled
              ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-60"
              : "bg-gray-100 hover:bg-[#E2DEED] text-gray-800"
          }
        `}
      >
        {buttonText}
        {!disabled && (
          <svg
            className={mobileStyles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {isOpen && !disabled && (
        <div
          className={`origin-top-right absolute right-0 mt-2 ${mobileStyles.dropdown} rounded-lg bg-[#F5F3FA] shadow-lg z-10 px-1`}
        >
          <div className="py-1">
            {options.map(option => {
              const isDisabled = option.disabled;
              return (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  disabled={isDisabled}
                  className={`
                    w-full text-left ${mobileStyles.option}
                    ${
                      isDisabled
                        ? "text-gray-400 cursor-not-allowed opacity-60"
                        : "text-[#6E5CA3] hover:bg-[#E2DEED]"
                    }
                    ${
                      selectedOption === option.value
                        ? "font-medium bg-[#E2DEED]"
                        : ""
                    }
                    transition-all duration-100
                  `}
                >
                  <div className={`flex items-center ${mobileStyles.gap}`}>
                    {variant === "moodlet" && (
                      <Moodlet
                        content="letter"
                        variant={isDisabled ? "inactive" : "primary"}
                        text={option.label.charAt(0)}
                        readOnly
                      />
                    )}
                    <span>{option.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
