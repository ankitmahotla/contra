import Link from "next/link";
import { MdOutlineAddLocation } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { PiTelegramLogoDuotone } from "react-icons/pi";

export default function InfoCard({ firstName, lastName, skills, links }) {
  const name = firstName.length > 0 ? `${firstName} ${lastName}` : "Name";

  return (
    <div className="hidden lg:block shadow-lg p-10 rounded-xl">
      <div className="flex items-center justify-center mb-4">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
          className="rounded-full w-56 h-56"
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-400"
            style={{ display: "inline-block" }}
          >
            {name}
          </span>
        </h2>
        <Link href="/signup" className="w-full flex flex-col">
          <button
            style={{ background: "#FFBE65" }}
            className="rounded-full py-3 px-10 my-3 text-black-800 font-semibold flex justify-center gap-2 items-center"
          >
            <PiTelegramLogoDuotone size={20} />
            Get in Touch
          </button>
        </Link>
        <p className="text-sm text-slate-500 font-semibold mb-2">
          {name} is <span className="text-black">accepting new clients</span>
        </p>
      </div>
      <hr className="my-6" />
      <p className="text-sm">SKILLS</p>
      {skills.length > 0 ? (
        <div className="flex w-80 flex-wrap gap-3 my-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-3xl py-2 px-6 text-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex gap-3 my-6">
          <div className="border border-black border-dashed rounded-3xl py-2 px-6 text-sm">
            Skill
          </div>
          <div className="border border-black border-dashed rounded-3xl py-2 px-6 text-sm">
            Skill
          </div>
        </div>
      )}
      <hr className="my-6" />
      <p className="text-sm">LOCATION</p>
      <MdOutlineAddLocation className="text-xl my-6 text-slate-700" />
      <hr className="my-6" />
      <p className="text-sm">LINKS</p>
      {links.length > 0 ? (
        <div className="flex gap-3 my-6">
          {links.map((link, index) =>
            link.icon === "instagram" ? (
              <a href={link.link} target="_blank">
                <FaInstagram key={index} size={25} color="gray" />
              </a>
            ) : link.icon === "linkedin" ? (
              <a href={link.link} target="_blank">
                <FaLinkedin key={index} size={25} color="gray" />
              </a>
            ) : (
              <a href={link.link} target="_blank">
                <CiLink key={index} size={25} color="gray" />
              </a>
            )
          )}
        </div>
      ) : (
        <div className="flex gap-3 my-6">
          <FaInstagram size={25} color="gray" />
          <FaLinkedin size={25} color="gray" />
          <CiLink size={25} color="gray" />
        </div>
      )}
    </div>
  );
}
