import React, { Fragment } from "react";
function Navbar() {
  return (
    <Fragment>
      <nav className="antialiased bg-primary text-cream relative text-base tk-brandon-grotesque z-40 print:hidden">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="w-15 pr-4">
            <img
              src="https://cdn.redmenta.org/hotlink-ok/redmenta-logo.png"
              className="bg-contain bg-no-repeat h-10 w-15 block"
            ></img>
          </div>
          <div className="w-10 relative ml-4">
            <button
              className="h-10 w-10 font-bold rounded-full flex items-center justify-center
                                          border-primary-light border-solid border-2 cursor-pointer"
            ></button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
