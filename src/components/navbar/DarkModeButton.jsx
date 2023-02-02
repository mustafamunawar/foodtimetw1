import { useState, useEffect } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="">
      <button
        onClick={handleDarkModeClick}
        className="text-xl px-3 py-2 flex items-center leading-snug hover:opacity-75"
      >
        {darkMode ? (
          <BsMoonStars className="text-xl inline" />
        ) : (
          <BsSun className="text-xl inline" />
        )}
      </button>
    </div>
  );
}
