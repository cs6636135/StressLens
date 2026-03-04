function Navbar() {
return(
<div className="drawer">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar bg-[hsl(var(--card))] shadow-sm rounded-xl w-full">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-2" aria-label="open sidebar"  className="btn btn-square btn-ghost text-[hsl(var(--primary))]/60 hover:bg-[hsl(var(--card))] hover:border-none outline-none ring-0 hover:text-[hsl(var(--primary))] focus:outline-none focus:ring-0 focus-visible:outline-none border-none focus-visible:ring-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="lg:px-10 px-2 text-xl font-bold text-[hsl(var(--primary))]">StressLens</div>
      <div className="hidden lg:flex flex-1 items-center">
        <ul className="menu menu-horizontal gap-2 ">
          {/* Navbar menu content here */}
            <li><a>vent</a></li>
            <li><a>vent book</a></li>
            <li><a>dashboard</a></li>
        </ul>
        <ul className="menu menu-horizontal ml-auto px-3"><li><a>log in</a></li></ul>
      </div>
    </div>
    {/* Page content here */}
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <li><a>vent</a></li>
        <li><a>vent book</a></li>
        <li><a>dashboard</a></li>
        <li><a>log in</a></li>
    </ul>
  </div>
</div>
)
}

export default Navbar;