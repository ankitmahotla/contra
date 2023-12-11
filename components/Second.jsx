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

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) &&
        !selectedItems.some((selectedItem) => selectedItem.id === item.id)
    );

    setFilteredResults(filtered);
  };

  const handleItemClick = (item) => {
    // Check if the number of selected items is less than 3
    if (selectedItems.length < 3) {
      setSelectedItems([...selectedItems, item]);
      setSkills([...skills, item.title]);
      setInputValue("");
      setFilteredResults([]);
    }
  };

  const handleRemoveItem = (itemToRemove) => {
    // Remove the selected item from the list of selected items
    const updatedItems = selectedItems.filter((item) => item !== itemToRemove);
    setSelectedItems(updatedItems);
    setSkills(updatedItems.map((item) => item.title));
  };

  return (
    <div className="lg:mr-10">
      <h2 className="text-2xl lg:text-4xl font-medium my-2 lg:my-6">
        What do you do?
      </h2>
      <div className="relative">
        <input
          className={`border w-full border-slate-400 rounded-lg p-2 ${
            selectedItems.length > 2 ? "h-36" : "h-28"
          } `}
          value={inputValue}
          onChange={handleInputChange}
        />

        <div className="absolute top-4 lg:top-8 flex flex-wrap mt-2">
          {selectedItems.map((item) => (
            <div
              key={item.id}
              className="border border-slate-200 rounded-full p-2 m-1 flex items-center px-3"
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
        </div>

        {inputValue && (
          <div className="absolute bg-white w-full border border-slate-400 rounded-lg p-2 z-10 overflow-y-auto max-h-40">
            {filteredResults.map((item) => (
              <div
                key={item.id}
                className="my-2 text-base cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                onClick={() => handleItemClick(item)}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
        <label className="absolute text-slate-600 text-xs mt-2 top-0 left-2">
          Add up to three skills
        </label>
        <div className="flex text-xs justify-between text-slate-500 mt-1">
          <p>Brand Designer, Copywriter, Project Manager, etc.</p>
          <p>{selectedItems.length}/3</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-2">
        <button className="hidden lg:block border border-slate-400 rounded-full p-2 mt-4">
          <GrFormPrevious className="text-2xl" onClick={prevStep} />
        </button>
        <div className="flex flex-col lg:flex-row w-full">
          <button
            className={`bg-black text-white rounded-3xl p-3 mt-4 text-sm ${
              selectedItems.length !== 3 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={nextStep}
            disabled={selectedItems.length !== 3}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
