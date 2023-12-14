import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { GrFormPrevious } from "react-icons/gr";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { GoPencil, GoCheck } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";

const DraggableLink = ({
  link,
  index,
  moveLink,
  handleEditClick,
  handleDeleteClick,
  hoveredLink,
  setHoveredLink,
}) => {
  const [, ref] = useDrag({
    type: "LINK",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "LINK",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveLink(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} key={index}>
      <div
        key={index}
        className="relative"
        onMouseEnter={() => setHoveredLink(index)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        <a
          href={link.link}
          target="_blank"
          key={index}
          className="flex w-5/6 sm:w-1/2 lg:w-full items-center justify-between text-slate-600 hover:bg-slate-100 py-4 px-1 rounded-lg"
        >
          <div className="flex items-center gap-4">
            <img src="../hold.svg" />
            {link.icon === "instagram" ? (
              <FaInstagram size={20} />
            ) : link.icon === "linkedin" ? (
              <FaLinkedin size={20} />
            ) : (
              <CiLink size={20} />
            )}
            <p className="text-base text-black font-medium">{link.name}</p>
          </div>
          <div className="flex items-center gap-4 mr-2">
            <GoPencil
              size={30}
              onClick={(e) => handleEditClick(e, index)}
              className="hover:text-yellow-400"
            />

            <MdOutlineDelete
              size={30}
              onClick={(e) => handleDeleteClick(e, index)}
              className="hover:text-yellow-400"
            />
          </div>
        </a>
        {hoveredLink === index && (
          <div className="absolute bg-black text-sm text-white p-2 rounded-lg top-full left-1/4 transform -translate-x-1/4 mt-2 z-10 transition-all duration-500 ease-in-out">
            {link.link}
          </div>
        )}
      </div>
    </div>
  );
};

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
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleLinkButtonClick = (icon) => {
    setShowInputForm(true);
    setSelectedIcon(icon);
    setLinkName(icon.charAt(0).toUpperCase() + icon.slice(1));
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

  const handleEditClick = (event, index) => {
    event.preventDefault(); // Prevent the default behavior of the anchor element
    const linkToEdit = links[index];
    setWebsiteLink(linkToEdit.link);
    setLinkName(linkToEdit.name);
    setSelectedIcon(linkToEdit.icon);
    setEditingIndex(index);
    setShowInputForm(true);
  };

  const handleDeleteClick = (event, index) => {
    event.preventDefault(); // Prevent the default behavior of the anchor element
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const handleAddLinkClick = () => {
    setShowInputForm(true);
    setEditingIndex(null); // Reset editing index when adding a new link
  };

  const moveLink = (fromIndex, toIndex) => {
    const updatedLinks = [...links];
    const [movedLink] = updatedLinks.splice(fromIndex, 1);
    updatedLinks.splice(toIndex, 0, movedLink);
    setLinks(updatedLinks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h2 className="flex items-center gap-2 text-2xl lg:text-4xl font-medium my-2 lg:my-4">
          Almost Done! <img src="../check.svg" />
        </h2>
        <p className="text-base text-slate-500">
          Boost your credibility by adding one or more social links
        </p>
        {showInputForm ? (
          <div className="mt-6 mb-2">
            <div className="relative mb-4">
              <label
                htmlFor="websiteLink"
                className="absolute text-slate-400 left-4 top-2"
              >
                <p className="text-xs">URL</p>
              </label>
              <input
                type="text"
                id="websiteLink"
                value={websiteLink}
                onChange={(e) => {
                  setWebsiteLink(e.target.value);
                  if (e.target.value.includes("instagram.com")) {
                    setSelectedIcon("instagram");
                  } else if (e.target.value.includes("linkedin.com")) {
                    setSelectedIcon("linkedin");
                  } else {
                    setSelectedIcon("another link");
                  }
                }}
                placeholder="Paste your link here"
                className="border border-slate-200 rounded-lg pt-4 text-base px-4 text-slate-600 w-full h-16 focus:outline-none focus:active:border-black placeholder:text-slate-500"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="linkName"
                className="absolute text-slate-400 left-4 top-2"
              >
                <p className="text-xs">Name your Link</p>
              </label>
              {selectedIcon === "instagram" ? (
                <FaInstagram className="absolute top-8 left-4" size={20} />
              ) : selectedIcon === "linkedin" ? (
                <FaLinkedin className="absolute top-8 left-4" size={20} />
              ) : (
                <CiLink className="absolute top-8 left-4" size={20} />
              )}
              <input
                type="text"
                id="linkName"
                value={linkName}
                onChange={(e) => setLinkName(e.target.value)}
                placeholder="Name"
                className="border border-slate-200 rounded-lg pt-4 text-base pl-10 text-slate-600 w-full h-16 focus:outline-none focus:active:border-black placeholder:text-slate-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                className="border border-slate-200 rounded-3xl px-3 py-1 mt-4 text-sm"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button
                className="border border-slate-500 rounded-3xl px-3 py-1 mt-4 text-sm"
                onClick={handleSaveClick}
              >
                {editingIndex !== null ? " Update Link" : " Save Link"}
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="my-2 mt-10 mx-2">
              {links.length > 0 && (
                <p className="text-sm text-slate-800 mb-">{links.length}/7</p>
              )}
              {links.map((link, index) => (
                <DraggableLink
                  key={index}
                  link={link}
                  index={index}
                  moveLink={moveLink}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                  hoveredLink={hoveredLink}
                  setHoveredLink={setHoveredLink}
                />
              ))}
              {links.length > 0 && links.length < 7 && (
                <button
                  className="flex items-center gap-4 text-lg font-semibold text-slate-600 my-6"
                  onClick={handleAddLinkClick}
                >
                  <IoMdAdd className="shadow-sm rounded-full p-1" size={32} />{" "}
                  Add Link
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
                      className="flex items-center border border-slate-100 rounded-3xl py-2 px-4 text-sm m-2"
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
            className="hidden lg:block border border-slate-200 rounded-full p-2 mt-3"
            onClick={prevStep}
          >
            <GrFormPrevious className="text-xl" />
          </button>
          <div className="flex flex-col lg:flex-row w-full">
            <button
              className={`bg-black text-white rounded-3xl p-3 mt-3 text-sm ${
                showInputForm || links.length === 0 || links.length > 7
                  ? "opacity-10 cursor-not-allowed"
                  : ""
              }`}
              disabled={
                showInputForm || links?.length === 0 || links.length > 7
              }
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
