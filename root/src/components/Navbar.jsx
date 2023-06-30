import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { GrNotification } from "react-icons/gr";
import { firbaseauth } from "../utils/Firebase";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { TfiPencil, TfiUser, TfiHelpAlt, TfiInfoAlt } from "react-icons/tfi";
export default function Navbar() {
  const [error, setError] = useState("");
  const [log, setLog] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const settings = [
    {
      name: "Manage Profiles",
      links: "/profile",
      icons: <TfiPencil></TfiPencil>,
    },
    {
      name: "Account",
      links: "/profile",
      icons: <TfiUser />,
    },
    {
      name: "Help",
      links: "/profile",
      icons: <TfiHelpAlt></TfiHelpAlt>,
    },
    {
      name: "T&C",
      links: "/profile",
      icons: <TfiInfoAlt></TfiInfoAlt>,
    },
  ];
  const handleLogout = async (event) => {
    setLog(true);
    event.preventDefault();
    try {
      await signOut(firbaseauth);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  return (
    <nav
      navbar-main=""
      className="w-full flex flex-wrap items-center justify-between px-0 py-2 m-0 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
      navbar-scroll="true"
    >
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
          <h6 className="mb-0  text-2xl font-bold text-white capitalize">
            Dashboard
          </h6>
        </nav>

        <div
          className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
          id="navbar"
        >
          <div className="flex items-center md:ml-auto md:pr-4">
            <div className="flex items-center md:space-x-4">
              <div className="relative hidden md:block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    title="Search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="black"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 dark:text-gray-900"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-900 focus:dark:bg-gray-200"
                />
              </div>
            </div>
          </div>
          <ul className="flex flex-row justify-end gap-5 pl-0 mb-0 list-none md-max:w-full">
            <li className="flex items-center">
              <a className="block px-0 py-2 text-sm font-semibold text-white transition-all ease-nav-brand">
                <GrNotification size={"20"} aria-hidden="true"></GrNotification>
              </a>
            </li>
            <li
              className="flex items-center mr-4"
              onClick={() => setIsActive(!isActive)}
            >
              <div className="block px-0 py-2 text-sm font-semibold cursor-pointer text-white transition-all ease-nav-brand">
                <img
                  alt=""
                  className="w-8 h-8 rounded-full ri ri dark:bg-gray-500 ri ri"
                  src="https://source.unsplash.com/40x40/?portrait?1"
                />
              </div>
            </li>
          </ul>
          {isActive === true ? (
            <ul className="links flex mw">
              <div className="group-link">
                {settings.map(({ name, links, icons }) => {
                  return (
                    <li key={name}>
                      <Link to={links}>
                        {icons}
                        <span>{name}</span>{" "}
                      </Link>
                    </li>
                  );
                })}
                <li onClick={handleLogout} className="lgout">
                  {log ? (
                    <div class="custom-loader"></div>
                  ) : (
                    <a>
                      <AiOutlineLogout></AiOutlineLogout>
                      <span>Log Out</span>
                    </a>
                  )}
                </li>
              </div>
            </ul>
          ) : (
            <div className="d-none"></div>
          )}
        </div>
      </div>
    </nav>
  );
}
