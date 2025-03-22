import { useState } from "react";
import { Home, Settings, Menu, X } from "lucide-react";
import CustomButton from "./CustomButton";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Toggle Button */}
      <CustomButton
        onClick={() => setIsOpen(!isOpen)}
        className="m-4 absolute top-4 left-4 z-50"
      >
        {isOpen ? <X /> : <Menu />}
      </CustomButton>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-5 w-64 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="p-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">
            <Home size={20} /> Home
          </li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">
            <Settings size={20} /> Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
