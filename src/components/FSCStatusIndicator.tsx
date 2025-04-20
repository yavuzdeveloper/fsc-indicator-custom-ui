import React, { useState } from "react";

import Moodlet from "./Moodlet";
import { VariantType } from "../types";

type FSCState = "required" | "not-required" | "current" | "completed";
type FSCType = "fuel" | "service" | "clean";

const FSCIndicator = () => {
  const [displayAsLetters, setDisplayAsLetters] = useState(true);
  const [states, setStates] = useState<Record<FSCType, FSCState>>({
    fuel: "required",
    service: "required",
    clean: "required",
  });

  const handleRightClick = (type: FSCType, e: React.MouseEvent) => {
    e.preventDefault();
    setStates(prev => ({
      ...prev,
      [type]: prev[type] === "not-required" ? "required" : "not-required",
    }));
  };

  const handleLeftClick = (type: FSCType) => {
    if (states[type] === "not-required") return;

    setStates(prev => {
      switch (prev[type]) {
        case "required":
          return { ...prev, [type]: "current" };
        case "current":
          return { ...prev, [type]: "completed" };
        case "completed":
          return { ...prev, [type]: "current" };
        default:
          return prev;
      }
    });
  };

  const getVariant = (state: FSCState): VariantType => {
    switch (state) {
      case "required":
        return "inactive";
      case "not-required":
        return "disabled";
      case "current":
        return "stop";
      case "completed":
        return "ok";
      default:
        return "inactive";
    }
  };

  const getLabel = (type: FSCType) =>
    displayAsLetters
      ? type === "fuel"
        ? "F"
        : type === "service"
        ? "S"
        : "C"
      : type === "fuel"
      ? "Fuelling"
      : type === "service"
      ? "Servicing"
      : "Cleaning";

  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">FSC Status Indicator</h2>
        <button
          onClick={() => setDisplayAsLetters(!displayAsLetters)}
          className="px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-200"
        >
          {displayAsLetters ? "Show Words" : "Show Letters"}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {(["fuel", "service", "clean"] as FSCType[]).map(type => (
          <div key={type} className="text-center">
            <div
              onClick={() => handleLeftClick(type)}
              onContextMenu={e => handleRightClick(type, e)}
              className="cursor-pointer inline-block"
            >
              <Moodlet
                content={displayAsLetters ? "letter" : "word"}
                variant={getVariant(states[type])}
                text={getLabel(type)}
                readOnly={states[type] === "not-required"}
              />
            </div>
            <div className="mt-2 text-xs font-medium text-gray-500 capitalize">
              {states[type].replace("-", " ")}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-50 rounded-md text-left">
        <h3 className="font-medium mb-2 text-left">How to use:</h3>{" "}
        <ul className="text-sm space-y-1 pl-5">
          <li className="text-left">
            • <strong>Left-click</strong>: Cycle through states
          </li>
          <li className="text-left">
            • <strong>Right-click</strong>: Toggle required/not required
          </li>
          <li className="text-left">
            • States:
            <span className="ml-2 text-[#998DBF]">Required</span>{" "}
            <span className="ml-2 text-[#D22D5C]">Current</span>
            <span className="ml-2 text-[#319B31]">Completed</span>
            <span className="ml-2 text-gray-500">Not required</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FSCIndicator;
