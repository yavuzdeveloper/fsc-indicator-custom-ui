import Moodlet from "./Moodlet";
import { icon } from "../utils";
import { VariantType } from "../types";

// Shows all possible content types and variants
const MoodletTest = () => {
  return (
    <>
      <div className="flex flex-col gap-8 p-4">
        <h2 className="text-2xl font-bold mb-6">Moodlet All Variants</h2>
        {/* Text Content - All Variants */}
        <div className="flex flex-wrap gap-4 items-center">
          <span className="w-32 font-medium">Text Variants:</span>
          {(
            [
              "primary",
              "active",
              "inactive",
              "secondary",
              "planning",
              "released",
              "blue",
              "green",
              "ok",
              "red",
              "stop",
              "block",
              "yellow",
              "warning",
            ] as VariantType[]
          ).map(variant => (
            <div key={variant} className="flex gap-2">
              <Moodlet content="word" variant={variant} text={variant} />
              <Moodlet
                content="word"
                variant={variant}
                text={variant}
                readOnly
              />
            </div>
          ))}
        </div>

        {/* Icon Content - All Variants */}
        <div className="flex flex-wrap gap-4 items-center">
          <span className="w-32 font-medium">Icon Variants:</span>
          {(
            [
              "primary",
              "active",
              "inactive",
              "secondary",
              "planning",
              "released",
              "blue",
              "green",
              "ok",
              "red",
              "stop",
              "block",
              "yellow",
              "warning",
            ] as VariantType[]
          ).map(variant => (
            <div key={variant} className="flex gap-2">
              <Moodlet content="icon" variant={variant} icon={icon(variant)} />
              <Moodlet
                content="icon"
                variant={variant}
                icon={icon(variant, true)}
                readOnly
              />
            </div>
          ))}
        </div>

        {/* IconL Content - All Variants */}
        <div className="flex flex-wrap gap-4 items-center">
          <span className="w-32 font-medium">Icon Left:</span>
          {(
            [
              "primary",
              "active",
              "inactive",
              "secondary",
              "planning",
              "released",
              "blue",
              "green",
              "ok",
              "red",
              "stop",
              "block",
              "yellow",
              "warning",
            ] as VariantType[]
          ).map(variant => (
            <div key={variant} className="flex gap-2">
              <Moodlet
                content="iconL"
                variant={variant}
                text={variant}
                icon={icon(variant)}
              />
              <Moodlet
                content="iconL"
                variant={variant}
                text={variant}
                icon={icon(variant, true)}
                readOnly
              />
            </div>
          ))}
        </div>

        {/* IconR Content - All Variants */}
        <div className="flex flex-wrap gap-4 items-center">
          <span className="w-32 font-medium">Icon Right:</span>
          {(
            [
              "primary",
              "active",
              "inactive",
              "secondary",
              "planning",
              "released",
              "blue",
              "green",
              "ok",
              "red",
              "stop",
              "block",
              "yellow",
              "warning",
            ] as VariantType[]
          ).map(variant => (
            <div key={variant} className="flex gap-2">
              <Moodlet
                content="iconR"
                variant={variant}
                text={variant}
                icon={icon(variant)}
              />
              <Moodlet
                content="iconR"
                variant={variant}
                text={variant}
                icon={icon(variant, true)}
                readOnly
              />
            </div>
          ))}
        </div>

        {/* Letter & Ellipsis */}
        <div className="flex flex-wrap gap-4 items-center">
          <span className="w-32 font-medium">Letter/Ellipsis:</span>
          <Moodlet content="letter" variant="primary" text="F" />
          <Moodlet content="letter" variant="green" text="C" readOnly />
          <Moodlet content="ellipsis" variant="yellow" />
          <Moodlet content="ellipsis" variant="red" readOnly />
        </div>
      </div>
    </>
  );
};

export default MoodletTest;
