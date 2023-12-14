export default function First({
  firstName,
  lastName,
  setFirstName,
  setLastName,
  nextStep,
}) {
  return (
    <div>
      <div className="flex items-center gap-2 my-2 mb-6 lg:my-4">
        <h2 className="text-2xl lg:text-3xl font-medium">What's your name?</h2>
        <img src="../hands.svg" />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 my-3 lg:mt-6">
        <div className="relative">
          <label className="absolute top-3 left-4 text-xs text-slate-600">
            First Name
          </label>
          <input
            className="w-full lg: border border-slate-200 rounded-lg pl-4 pt-7 pb-4 focus:outline-none focus:active:border-black"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="relative mt-4 lg:mt-0">
          <label className="absolute top-3 left-4 text-xs text-slate-600">
            Last Name
          </label>
          <input
            className="w-full lg: border border-slate-200 rounded-lg pl-4 pt-7 pb-4 focus:outline-none focus:active:border-black"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <button
          className={`bg-black text-white rounded-3xl font-medium p-3 lg:py-2 mt-4 ${
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
