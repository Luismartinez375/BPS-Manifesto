export default function Navbar() {
  return (
    <nav className=" z-10 sticky top-0 bg-navbar w-screen h-auto py-2 flex flex-col ">
      <button className=" relative top-8 left-8 h-8 w-8 cursor-pointer">
        <div className=" h-0.5 w-6 rounded-none bg-white before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:rounded before:bg-white before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:rounded after:bg-white after:content-['']"></div>
      </button>
      <h1 className=" font-oldStandardTT text-3xl text-orange-300 sm:relative sm:left-24 max-sm:text-center">
        M
      </h1>
      <p className=" font-openSans text-white sm:relative sm:left-20 max-sm:text-center text-xs">
        Manifesto
      </p>
    </nav>
  );
}
