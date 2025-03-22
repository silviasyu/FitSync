import { useState, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Menu, X, User } from "lucide-react"; // Importing icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const startTouchX = useRef(0); // Reference to track the initial touch position

  // Function to toggle the sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Handle touch start event to capture the initial touch position
  const handleTouchStart = (e) => {
    startTouchX.current = e.touches[0].clientX; // Save the touch start position
  };

  // Handle touch move event to detect swipe direction
  const handleTouchMove = (e) => {
    const moveTouchX = e.touches[0].clientX;
    // If swipe is right to left, open the sidebar
    if (startTouchX.current - moveTouchX > 50 && !isOpen) {
      setIsOpen(true); // Open sidebar
    }
    // If swipe is left to right, close the sidebar
    if (moveTouchX - startTouchX.current > 50 && isOpen) {
      setIsOpen(false); // Close sidebar
    }
  };

  // Handle touch end event to reset touch tracking
  const handleTouchEnd = () => {
    startTouchX.current = 0; // Reset the touch position
  };

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart} // Detect touch start
      onTouchMove={handleTouchMove}  // Detect touch move
      onTouchEnd={handleTouchEnd}    // Reset touch tracking
    >
      {/* Menu button to toggle sidebar */}
      <div className="absolute top-4 left-4 z-50 flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="bg-transparent p-2 border-none cursor-pointer"
        >
          {isOpen ? (
            <X size={24} className="text-black" />
          ) : (
            <Menu size={24} className="text-black" />
          )}
        </button>

        <button className="bg-transparent p-2 border-none cursor-pointer">
          <User size={24} className="text-black" />
        </button>
      </div>

      {/* Sidebar container with animation */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-5 w-64 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`} // Conditional class for open/close effect
      >
        <h2 className="text-xl font-bold mb-4 text-black text-right">Sidebar</h2>
        <ul className="text-right">
          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/" className="text-black" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/settings" className="text-black" onClick={toggleSidebar}>
              Settings
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/calendar" className="text-black" onClick={toggleSidebar}>
              Calendar View
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/monthly-report" className="text-black" onClick={toggleSidebar}>
              Monthly Report
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;




