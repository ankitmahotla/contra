export default function First({
  firstName,
  lastName,
  setFirstName,
  setLastName,
  nextStep,
}) {
  return (
    <div>
      <h2 className="text-2xl lg:text-4xl font-medium my-2 lg:my-4">
        What's your name?
      </h2>
      <div className="flex flex-col lg:flex-row gap-5 my-3">
        <div className="w-full lg:w-40 px-2 py-4 border border-slate-200 rounded-xl">
          <p className="text-xs text-slate-600 mb-1">First Name</p>
          <input
            className="focus:outline-none w-36"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="w-full lg:w-40 px-2 py-4 border border-slate-200 rounded-xl">
          <p className="text-xs text-slate-600 mb-1">Last Name</p>
          <input
            className="focus:outline-none w-36"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <button
          className={`bg-black text-white rounded-3xl p-3 mt-4 text-sm ${
            firstName.length > 0 && lastName.length > 0
              ? ""
              : "opacity-10 cursor-not-allowed"
          }`}
          disabled={firstName.length === 0 || lastName.length === 0}
          onClick={nextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
