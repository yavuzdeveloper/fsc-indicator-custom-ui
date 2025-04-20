import { VariantType } from "../types";
import Moodlet from "./Moodlet";
import { icon } from "../utils";

export const MoodletShowcase = () => {
  // Sample variants for demonstration
  const sampleVariants: VariantType[] = [
    "primary",
    "secondary",
    "green",
    "red",
    "yellow",
    "inactive",
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Moodlet</h2>

      {/* Basic Usage Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-left">Basic Variants</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          {sampleVariants.map(variant => (
            <div key={variant} className="flex flex-col items-center gap-2">
              <Moodlet content="word" variant={variant} text={variant} />
              <span className="text-sm text-gray-600">{variant}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ReadOnly States */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-left">
          ReadOnly States
        </h2>
        <p className="text-gray-600 mb-3 text-left">
          Shows bordered version with matching icon colors
        </p>
        <div className="flex flex-wrap gap-4">
          {sampleVariants.map(variant => (
            <div key={variant} className="flex flex-col items-center gap-2">
              <Moodlet
                content="word"
                variant={variant}
                text={variant}
                readOnly
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
      </section>

      {/* Icon Positions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-left">
          Icon Positioning
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-medium text-left">Left Icon</h3>
            {(["primary", "green", "yellow"] as VariantType[]).map(variant => (
              <div key={variant} className="flex gap-3 items-center">
                <Moodlet
                  content="iconL"
                  variant={variant}
                  text={variant}
                  icon={icon(variant)}
                />
                <span className="text-sm text-gray-600">{variant}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-left">Right Icon</h3>
            {(["secondary", "red", "inactive"] as VariantType[]).map(
              variant => (
                <div key={variant} className="flex gap-3 items-center">
                  <Moodlet
                    content="iconR"
                    variant={variant}
                    text={variant}
                    icon={icon(variant)}
                  />
                  <span className="text-sm text-gray-600">{variant}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Special Cases */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-left">
          Special Content Types
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-2">
            <Moodlet content="letter" variant="primary" text="F" />
            <span className="text-sm text-gray-600">Letter badge</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Moodlet content="ellipsis" variant="yellow" />
            <span className="text-sm text-gray-600">Ellipsis action</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Moodlet content="icon" variant="red" icon={icon("red")} />
            <span className="text-sm text-gray-600">Icon only</span>
          </div>
        </div>
      </section>
    </div>
  );
};
