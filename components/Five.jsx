import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { GrFormPrevious } from "react-icons/gr";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { GoPencil, GoCheck } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";

export default function Five({ prevStep, nextStep, links, setLinks }) {
  const [showInputForm, setShowInputForm] = useState(false);
  const [websiteLink, setWebsiteLink] = useState("");
  const [linkName, setLinkName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [suggestions, setSuggestions] = useState([
    "Linkedin",
    "Instagram",
    "Another Link",
  ]);

  const handleLinkButtonClick = (icon) => {
    setShowInputForm(true);
    setSelectedIcon(icon);
  };

  const handleCancelClick = () => {
    setShowInputForm(false);
    setWebsiteLink("");
    setLinkName("");
    setSelectedIcon(null);
    setEditingIndex(null);
  };

  const handleSaveClick = () => {
    if (editingIndex !== null) {
      // If editing an existing link
      const updatedLinks = [...links];
      updatedLinks[editingIndex] = {
        name: linkName,
        link: websiteLink,
        icon: selectedIcon.toLowerCase(),
      };
      setLinks(updatedLinks);
    } else {
      // If adding a new link
      setLinks([
        ...links,
        { name: linkName, link: websiteLink, icon: selectedIcon.toLowerCase() },
      ]);
      setSuggestions(
        suggestions.filter(
          (suggestion) =>
            suggestion.toLowerCase() !== selectedIcon.toLowerCase()
        )
      );
    }
    // Reset the form
    setWebsiteLink("");
    setLinkName("");
    setSelectedIcon(null);
    setEditingIndex(null);
    setShowInputForm(false);
  };

  const handleEditClick = (index) => {
    const linkToEdit = links[index];
    setWebsiteLink(linkToEdit.link);
    setLinkName(linkToEdit.name);
    setSelectedIcon(linkToEdit.icon);
    setEditingIndex(index);
    setShowInputForm(true);
  };

  const handleDeleteClick = (index) => {
    const deletedLink = links[index];
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);

    setSuggestions([...suggestions, deletedLink.name]);
  };

  const handleAddLinkClick = () => {
    setShowInputForm(true);
    setEditingIndex(null); // Reset editing index when adding a new link
  };

  return (
    <div>
      <h2 className="text-2xl lg:text-4xl font-medium my-2 lg:my-4">
        Almost Done!
      </h2>
      <p className="text-base text-slate-500 mb-2">
        Boost your credibility by adding one or more social links
      </p>
      {showInputForm ? (
        <>
          <div className="relative mb-4">
            <label
              htmlFor="websiteLink"
              className="absolute text-slate-400 left-2 top-2"
            >
              <p className="text-xs">URL</p>
            </label>
            <input
              type="text"
              id="websiteLink"
              value={websiteLink}
              onChange={(e) => setWebsiteLink(e.target.value)}
              placeholder="Paste your link here"
              className="border border-slate-200 rounded-lg pt-4 text-base px-2 text-slate-600 w-full h-16"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="linkName"
              className="absolute text-slate-400 left-2 top-2"
            >
              <p className="text-xs">Name your Link</p>
            </label>
            {selectedIcon === "instagram" ? (
              <FaInstagram className="absolute top-8 left-2" />
            ) : selectedIcon === "linkedin" ? (
              <FaLinkedin className="absolute top-8 left-2" />
            ) : (
              <CiLink className="absolute top-8 left-2" />
            )}
            <input
              type="text"
              id="linkName"
              value={linkName}
              onChange={(e) => setLinkName(e.target.value)}
              placeholder="Name"
              className="border border-slate-200 rounded-lg pt-4 text-base px-2 pl-7 text-slate-600 w-full h-16"
            />
          </div>
          <div className="flex gap-2">
            <button
              className="border border-slate-500 rounded-3xl p-2 mt-4 text-sm"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
            <button
              className="border border-slate-500 rounded-3xl p-2 mt-4 text-sm"
              onClick={handleSaveClick}
            >
              {editingIndex !== null ? " Update Link" : " Save Link"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="my-4 mt-10 mx-2">
            {links.length > 0 && (
              <p className="text-sm text-slate-600">{links.length}/7</p>
            )}
            {links.map((link, index) => (
              <a
                href={link.link}
                target="_blank"
                key={index}
                className="flex w-1/2 lg:w-full items-center justify-between text-slate-600 my-4"
              >
                <div className="flex items-center gap-4">
                  {link.icon === "instagram" ? (
                    <FaInstagram size={25} />
                  ) : link.icon === "linkedin" ? (
                    <FaLinkedin size={25} />
                  ) : (
                    <CiLink size={25} />
                  )}
                  <p className="text-lg">{link.name}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => handleEditClick(index)}>
                    <GoPencil size={25} />
                  </button>
                  <button onClick={() => handleDeleteClick(index)}>
                    <MdOutlineDelete size={25} />
                  </button>
                </div>
              </a>
            ))}
            {links.length > 0 && links.length < 7 && (
              <button
                className="flex items-center gap-4 text-lg font-semibold text-slate-600 my-6"
                onClick={handleAddLinkClick}
              >
                <IoMdAdd size={22} /> Add Link
              </button>
            )}
          </div>
          {links.length < 7 && (
            <>
              <h4 className="mt-4 text-sm text-slate-400 font-semibold">
                Suggestions:
              </h4>
              <div className="flex flex-wrap items-center text-slate-500 mt-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    className="flex items-center border border-slate-200 rounded-3xl py-2 px-4 text-sm m-2"
                    onClick={() =>
                      handleLinkButtonClick(suggestion.toLowerCase())
                    }
                  >
                    <IoMdAdd className="mr-2" />
                    {suggestion}
                  </button>
                ))}
              </div>
            </>
          )}
        </>
      )}

      <div className="flex flex-col lg:flex-row items-center gap-2">
        <button
          className="hidden lg:block border border-slate-400 rounded-full p-2 mt-4"
          onClick={prevStep}
        >
          <GrFormPrevious className="text-2xl" />
        </button>
        <div className="flex flex-col lg:flex-row w-full">
          <button
            className={`bg-black text-white rounded-3xl p-3 mt-4 text-sm ${
              showInputForm || links.length === 0
                ? "opacity-10 cursor-not-allowed"
                : ""
            }`}
            onClick={nextStep}
            disabled={showInputForm || links?.length === 0}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
