import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
        <div className = "button">Button</div>
      {/* <div className = "button" onClick={() => setIsOpen(!isOpen)}> */}
        {/* {isOpen ? <X /> : <Menu />} */}
      {/* </div> */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-5 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="p-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          </li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2">
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;