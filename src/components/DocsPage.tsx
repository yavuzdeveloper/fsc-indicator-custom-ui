import DropdownShowcase from "./DropdownShowcase";
import { MoodletShowcase } from "./MoodletShowcase";

function DocsPage() {
  return (
    <div className="p-4 mt-15">
      <h1 className="text-2xl font-bold mb-6">UI Usage Guide</h1>
      <div className="p-4 flex flex-col gap-10">
        <MoodletShowcase />
        <DropdownShowcase />
      </div>
    </div>
  );
}

export default DocsPage;
