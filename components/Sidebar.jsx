export default function Sidebar() {
  return (
    <div className="flex flex-col items-center bg-[#14171f] py-6">
      <img src="../logo-sidebar.svg" />
      <div className="mt-12">
        <div className="border-b border-violet-200 pb-4">
          <img
            src="../profile.png"
            alt=""
            className="bg-white w-8 h-8 rounded-full"
          />
        </div>
        <div className="border-b border-violet-200 py-4">
          <img
            src="../palette.webp"
            alt=""
            className=" w-6 h-6 ml-1 rounded-full "
          />
        </div>
      </div>
    </div>
  );
}
