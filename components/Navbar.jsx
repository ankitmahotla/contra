export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-2 lg:py-4 px-8 border border-b-slate-200">
      <h1 className="hidden lg:block text-xl font-semibold">Dashboard</h1>
      <button className="block lg:hidden">
        <img src="../hamburger.svg" className="w-6" />
      </button>
      <img
        src="../logo.svg"
        className="flex lg:hidden w-40 hover:bg-slate-200 rounded-lg cursor-pointer p-1"
      />
      <div className="flex items-center gap-4">
        <button className="hidden lg:flex items-center gap-2 text-sm font-medium border border-slate-300 rounded-full px-3 py-2">
          <img src="../pro.svg" />
          Contra Pro
        </button>
        <button className="hidden lg:flex items-center text-sm gap-2 border border-slate-300 rounded-full px-3 py-2">
          <img src="../share.svg" /> Share Profile
        </button>
        <button className="hidden lg:block">
          <img src="../notification.svg" />
        </button>
        <button className="block lg:hidden">
          <img src="../share.svg" className="w-6" />
        </button>
        <button>
          <img src="../bell.svg" className="sm:w-6 lg:w-5" />
        </button>
        <button className="hidden lg:block w-8 h-8 p-1 rounded-full ring-1">
          <img src="../profile.png" alt="" />
        </button>
      </div>
    </div>
  );
}
