import React from "react";

import "./App.css";
import DocsPage from "./components/DocsPage";
import FSCStatusIndicator from "./components/FSCStatusIndicator";
import MoodletTest from "./components/MoodletTest";
import Footer from "./components/Footer";

/**
 * The main application component.
 *
 * This component renders the three main parts of the application:
 * - The FSC Status Indicator, which displays the current status of the
 *   fuelling, servicing, and cleaning processes.
 * - The Docs Page, which contains a showcase of the components and their
 *   usage.
 * - The Moodlet Test component, which is a test component for the Moodlet
 *   component.
 */

const App: React.FC = () => {
  return (
    <>
      <FSCStatusIndicator />
      <DocsPage />
      <MoodletTest />
      <Footer />
    </>
  );
};

export default App;
