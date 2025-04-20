import White from "../assets/icons/White.png";
import Blue from "../assets/icons/Blue.png";
import GreenOk from "../assets/icons/GreenOk.png";
import Inactive from "../assets/icons/Inactive.png";
import RedStopBlock from "../assets/icons/RedStopBlock.png";
import YellowWarning from "../assets/icons/YellowWarning.png";
import SecondaryPlanning from "../assets/icons/SecondaryPlanning.png";
import { VariantType } from "../types";

export const icon = (variant: VariantType, readOnly: boolean = false) => {
  // Map variants to their corresponding icons based on text color in readOnly mode
  const iconMap = {
    primary: readOnly ? "Blue" : "White",
    active: readOnly ? "Blue" : "White",
    inactive: readOnly ? "Inactive" : "White",
    secondary: readOnly ? "SecondaryPlanning" : "White",
    planning: readOnly ? "SecondaryPlanning" : "White",
    released: readOnly ? "Blue" : "White",
    blue: readOnly ? "Blue" : "White",
    green: readOnly ? "GreenOk" : "White",
    ok: readOnly ? "GreenOk" : "White",
    red: readOnly ? "RedStopBlock" : "White",
    stop: readOnly ? "RedStopBlock" : "White",
    block: readOnly ? "RedStopBlock" : "White",
    yellow: readOnly ? "YellowWarning" : "YellowWarning",
    warning: readOnly ? "YellowWarning" : "YellowWarning",
    placeholder: readOnly ? "Blue" : "White",
    disabled: readOnly ? "Inactive" : "White",
  };

  // Map of icon names to their imported sources
  const iconSrcMap = {
    White,
    Blue,
    Inactive,
    SecondaryPlanning,
    GreenOk,
    RedStopBlock,
    YellowWarning,
  };

  const iconName = iconMap[variant];
  const iconSrc = iconSrcMap[iconName as keyof typeof iconSrcMap];

  return <img src={iconSrc} className={`w-4 h-4 ${variant}`} />;
};
