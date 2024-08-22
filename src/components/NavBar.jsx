const NavBar = () => {
  return (
    <>
      <nav className=" h-24 w-full px-32 py-6 bg-dominant hidden md:flex justify-between items-center font-josefin_sans">
        <h3 className="text-2xl w-40 text-muted ">James.</h3>
        <ul className="hidden md:flex justify-evenly items-center gap-8">
          <li className="font-bold text-accent">
            <a href="/">Portfolio</a>
          </li>
          <li className="font-bold text-muted hover:text-accent transition-all">
            <a href="/">Blog</a>
          </li>
          <li className="font-bold text-muted hover:text-accent transition-all">
            <a href="/">Client reviews</a>
          </li>
          <li className="font-bold text-muted hover:text-accent transition-all">
            <a href="/">Contact me</a>
          </li>
        </ul>
        <a
          href="/"
          className="hidden md:inline-block bg-muted font-bold text-center w-40 py-3 rounded-sm filter hover:bg-accent hover:text-muted transition-all"
        >
          Schedule a call
        </a>
      </nav>

      {/* Mobile Nav */}
      <nav className="relative flex md:hidden justify-between h-24 px-16 py-6 bg-dominant items-center font-josefin_sans">
        <h3 className="text-2xl text-muted ">James.</h3>
        <input
          className="w-12 h-full absolute right-12 top-1/2 -translate-y-1/2 pointer-events-auto opacity-0 peer"
          type="checkbox"
        />
        <div className="relative h-full w-12 flex flex-col justify-evenly items-end pointer-events-none">
          <div className="h-1 w-full bg-muted rounded-md"></div>
          <div className="h-1 w-3/4 bg-muted rounded-md"></div>
          <div className="h-1 w-1/2 bg-muted rounded-md  peer-checked:w-full"></div>
        </div>

        <ul className="z-10 absolute top-full left-0 w-full h-[calc(100vh-96px)] bg-dominant transition-all origin-top scale-y-0 peer-checked:scale-y-100 flex flex-col justify-center items-center gap-12">
          <li className="font-bold text-accent">
            <a href="/">Portfolio</a>
          </li>
          <li className="font-bold text-muted hover:text-accent transition-all">
            <a href="/">Blog</a>
          </li>
          <li className="font-bold text-muted hover:text-accent transition-all">
            <a href="/">Client reviews</a>
          </li>
          <li className="font-bold text-muted hover:text-accent transition-all">
            <a href="/">Contact me</a>
          </li>
          <a
            href="/"
            className="bg-muted font-bold text-center w-40 py-3 rounded-sm filter hover:bg-accent hover:text-muted transition-all"
          >
            Schedule a call
          </a>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
