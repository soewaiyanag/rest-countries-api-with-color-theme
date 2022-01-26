import React from "react";

const Nav = () => {
  return (
    <nav
      className="
        px-8
        py-6
        shadow-sm
        bg-white
        dark:bg-dark-blue-100
        flex
        justify-between
      "
    >
      <h1 className="font-bold">Where in the world?</h1>
      <h1
        id="darkmode-toggle"
        className="font-medium cursor-pointer select-none"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="moon"
          className="h-5 inline-block transition-all"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
        </svg>
        Dark Mode
      </h1>
    </nav>
  );
};

export default Nav;
