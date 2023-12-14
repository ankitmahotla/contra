"use client";
import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";

const data = [
  { id: 1, title: "Gamer" },
  { id: 2, title: "Developer" },
  { id: 3, title: "Designer" },
  { id: 4, title: "Artist" },
  { id: 5, title: "Writer" },
  { id: 6, title: "Musician" },
  { id: 7, title: "Photographer" },
  { id: 8, title: "Filmmaker" },
  { id: 9, title: "Chef" },
  { id: 10, title: "Athlete" },
];

export default function Second({ prevStep, nextStep, skills, setSkills }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) &&
        !selectedItems.some((selectedItem) => selectedItem.id === item.id)
    );

    setFilteredResults(filtered);
    setShowDropDown(true);
    if (value === "") setShowDropDown(false);
  };

  const handleItemClick = (item) => {
    setSelectedItems([...selectedItems, item]);
    setSkills([...skills, item.title]);
    setInputValue("");
    setFilteredResults([]);
    setShowDropDown(false);
  };

  const handleRemoveItem = (itemToRemove) => {
    const updatedItems = selectedItems.filter((item) => item !== itemToRemove);
    setSelectedItems(updatedItems);
    setSkills(updatedItems.map((item) => item.title));
  };

  return (
    <div>
      <h2 className="flex gap-2 text-2xl lg:text-4xl font-medium mt-2 lg:mt-4 mb-6">
        What do you do? <img src="../eyes.svg" alt="eyes" />
      </h2>
      <div className="relative">
        <div className="border border-slate-300 rounded-xl overflow-hidden py-1">
          <p className="text-xs text-slate-500 pt-2 pl-4">
            Add up to three skills
          </p>
          <div className="flex flex-wrap pl-2 py-3 lg:py-3">
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="border border-slate-200 text-xs rounded-full m-1 flex items-center px-3 py-2"
              >
                {item.title}
                <button
                  className="ml-2 text-slate-500"
                  onClick={() => handleRemoveItem(item)}
                >
                  X
                </button>
              </div>
            ))}
            <input
              type="text"
              className="focus:outline-none ml-2"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="absolute w-full z-10">
          {showDropDown && (
            <div className="shadow-md rounded-xl overflow-y-auto max-h-32">
              {filteredResults.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer bg-white text-base px-3 py-2 hover:bg-slate-100"
                  onClick={() => handleItemClick(item)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
          {selectedItems.length <= 3 ? (
            <p>Brand Designer, Copywriter, Project Manager, etc.</p>
          ) : (
            <p className="text-red-600">You can have a maximum of 3 skills.</p>
          )}
          <p className={selectedItems.length > 3 && "text-red-600"}>
            {selectedItems.length}/3
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-2">
        <button className="hidden lg:block border border-slate-200 rounded-full p-2 mt-4">
          <GrFormPrevious className="text-xl" onClick={prevStep} />
        </button>
        <div className="flex flex-col lg:flex-row w-full">
          <button
            className={`bg-black text-white rounded-3xl p-3 mt-4 text-sm ${
              selectedItems.length < 1 || selectedItems.length > 3
                ? "opacity-10 cursor-not-allowed"
                : ""
            }`}
            onClick={nextStep}
            disabled={selectedItems.length < 1 || selectedItems.length > 3}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
