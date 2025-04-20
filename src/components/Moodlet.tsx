import React from "react";

import { ContentType, VariantType } from "../types";

interface MoodletProps {
  content: ContentType;
  variant: VariantType;
  text?: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  readOnly?: boolean;
}

// Default and hover styles
const variantStyles: Record<VariantType, string> = {
  primary: "bg-[#824DFF] hover:bg-[#6D0EF1] text-white",
  active: "bg-[#824DFF] hover:bg-[#6D0EF1] text-white",
  inactive: "bg-[#998DBF] hover:bg-[#6E5CA3] text-white",
  secondary: "bg-[#09A7AA] hover:bg-[#007780] text-white",
  planning: "bg-[#09A7AA] hover:bg-[#007780] text-white",
  released: "bg-[#0B94D8] hover:bg-[#005580] text-white",
  blue: "bg-[#0B94D8] hover:bg-[#005580] text-white",
  green: "bg-[#319B31] hover:bg-[#247524] text-white",
  ok: "bg-[#319B31] hover:bg-[#247524] text-white",
  red: "bg-[#D22D5C] hover:bg-[#A82443] text-white",
  stop: "bg-[#D22D5C] hover:bg-[#A82443] text-white",
  block: "bg-[#D22D5C] hover:bg-[#A82443] text-white",
  yellow: "bg-[#FFD116] hover:bg-[#C39100] text-black",
  warning: "bg-[#FFD116] hover:bg-[#C39100] text-black",
  placeholder: "bg-gray-400 border border-dashed border-gray-300 text-white",
  disabled: "bg-gray-400 cursor-not-allowed text-white",
};

// ReadOnly styles with borders and matching text colors
const readOnlyStyles: Record<VariantType, string> = {
  primary: "border-[1px] border-[#824DFF] text-[#824DFF] bg-[#E8DDFF]",
  active: "border-[1px] border-[#824DFF] text-[#824DFF] bg-[#E8DDFF]",
  inactive: "border-[1px] border-[#808080] text-[#808080] bg-[#F0F0F0]",
  secondary: "border-[1px] border-[#09A7AA] text-[#09A7AA] bg-[#D6F5F5]",
  planning: "border-[1px] border-[#09A7AA] text-[#09A7AA] bg-[#D6F5F5]",
  released: "border-[1px] border-[#0B94D8] text-[#0B94D8] bg-[#D6EDF7]",
  blue: "border-[1px] border-[#0B94D8] text-[#0B94D8] bg-[#D6EDF7]",
  green: "border-[1px] border-[#319B31] text-[#319B31] bg-[#DFF0DF]",
  ok: "border-[1px] border-[#319B31] text-[#319B31] bg-[#DFF0DF]",
  red: "border-[1px] border-[#D22D5C] text-[#D22D5C] bg-[#F8D6DF]",
  stop: "border-[1px] border-[#D22D5C] text-[#D22D5C] bg-[#F8D6DF]",
  block: "border-[1px] border-[#D22D5C] text-[#D22D5C] bg-[#F8D6DF]",
  yellow: "border-[1px] border-[#C39100] text-[#C39100] bg-[#FFECB3]",
  warning: "border-[1px] border-[#C39100] text-[#C39100] bg-[#FFECB3]",
  placeholder: "border-[1px] border-[#824DFF] text-[#824DFF] bg-[#F5F0FF]",
  disabled: "border-[1px] border-[#998DBF] text-[#998DBF] bg-[#F0EDF7]",
};

const Moodlet: React.FC<MoodletProps> = ({
  content = "word",
  variant,
  text = "",
  icon,
  onClick,
  readOnly = false,
}) => {
  // Determine if we need perfect circle styling
  const isCircle =
    content === "letter" || content === "icon" || content === "ellipsis";
  const isTextual =
    content === "word" || content === "iconL" || content === "iconR";

  const baseStyles = `
  font-sans font-bold text-xs leading-[14px] tracking-normal
  inline-flex items-center justify-center
  ${
    isCircle
      ? "w-[24px] h-[24px] p-0"
      : isTextual
      ? "px-[8px] py-[3px] min-h-[20px]"
      : ""
  }
  rounded-full transition-colors duration-200
  ${variant !== "disabled" ? "cursor-pointer" : ""}
`;

  const getVariantStyle = () => {
    return readOnly ? readOnlyStyles[variant] : variantStyles[variant];
  };

  const renderContent = () => {
    const iconColor = readOnly
      ? "currentColor"
      : variant === "yellow" || variant === "warning"
      ? "text-black"
      : "text-white";

    switch (content) {
      case "letter":
        return (
          <span className="flex items-center justify-center w-full h-full">
            {text?.charAt(0).toUpperCase()}
          </span>
        );
      case "ellipsis":
        return (
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-none pb-[6px]">
            &hellip;
          </span>
        );
      case "icon":
        return (
          icon &&
          React.cloneElement(
            icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
            {
              className: `${iconColor} w-4 h-4`,
            }
          )
        );
      case "word":
        return <span className="truncate px-1">{text}</span>;
      case "iconL":
        return (
          <>
            {icon &&
              React.cloneElement(
                icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
                {
                  className: `${iconColor} w-3 h-3`,
                }
              )}
            {text && <span className="ml-[3px]">{text}</span>}
          </>
        );
      case "iconR":
        return (
          <>
            {text && <span className="mr-[3px]">{text}</span>}
            {icon &&
              React.cloneElement(
                icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
                {
                  className: `${iconColor} w-3 h-3`,
                }
              )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`${baseStyles} ${getVariantStyle()} relative`} // Added relative here
      onClick={variant !== "disabled" && !readOnly ? onClick : undefined}
    >
      {renderContent()}
    </div>
  );
};

export default Moodlet;
