// this is next js work

"use client";
import LogoSVG from "../assets/LogoSVG";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import Modal from "../assets/Modal.svg";
import Image from "next/image";
// import Drawer from "react-modern-drawer";
const Drawer = dynamic(() => import("react-modern-drawer"), {
  ssr: false,
});
import "react-modern-drawer/dist/index.css";
const Navbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const toggleNavbar = useCallback(() => {
    setMobileNavbar((prevState) => !prevState);
  }, [mobileNavbar]);

  const tabs = [
    {
      name: "What we offer",
      link: "#",
    },
    {
      name: "Connect with us",
      link: "#",
    },
    {
      name: "About us",
      link: "/aboutUs",
    },
    {
      name: "Teams",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
    {
      name: "Login",
      link: "#",
      modal: true,
    },
  ];

  return (
    <>
      <nav className="relative px-4 py-5 flex justify-between items-center w-11/12  lg:w-4/5  mb-auto">
        <Link href="#">
          <LogoSVG />
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3 "
            onClick={toggleNavbar}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden ml-auto mr-5 lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {tabs.map((tab) => (
            <li key={tab.name}>
              {tab?.modal ? (
                <label
                  htmlFor="my-modal-6"
                  className="text-sm text-gray-900 hover:text-blue-500 font-medium"
                >
                  {tab.name}
                </label>
              ) : (
                <Link
                  className="text-sm text-gray-900 hover:text-blue-500 font-medium"
                  href={`${tab?.link}`}
                >
                  {tab.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <label
          htmlFor="my-modal-3"
          id="signup"
          className="hidden lg:inline-block py-2 px-6 text-sm text-white font-bold rounded-full btnGrad transition duration-200"
        >
          Sign up
        </label>
      </nav>
      <Drawer
        open={mobileNavbar}
        onClose={toggleNavbar}
        direction="right"
        id={1}
      >
        <div className="flex flex-col w-full h-full bg-base-200 py-4">
          <label
            htmlFor="my-modal-3"
            id="signup"
            className="py-4 px-5 text-sm mb-5 text-white font-bold btnGrad transition duration-200"
          >
            Sign up
          </label>
          {tabs.map((tab) => (
            <React.Fragment key={tab?.name}>
              {tab?.modal ? (
                <label
                  key={tab.name}
                  htmlFor="my-modal-6"
                  id="login"
                  className="text-sm text-gray-900 hover:text-blue-500 font-medium p-5"
                >
                  {tab?.name}
                </label>
              ) : (
                <Link
                  key={tab?.name}
                  className="text-sm text-gray-900 hover:text-blue-500 font-medium p-5"
                  href={`${tab?.link}`}
                >
                  {tab?.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </Drawer>

      {/* login popup */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative pt-16 px-6 pb-10">
          <label
            htmlFor="my-modal-6"
            className="btn absolute top-3 right-4 bg-transparent border-none hover:bg-transparent "
          >
            <Image alt="popup" src={Modal} />
          </label>
          <h3 className="text-center text-xl font-bold text-gray-800 mb-5">
            Login as
          </h3>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://lender.azurewebsites.net/"
              className="btn btn-outline w-full"
            >
              Lender
            </a>
            <a className="btn w-full">Borrower</a>
          </div>
        </div>
      </div>

      {/* signup modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative pt-12 px-6">
          <label
            htmlFor="my-modal-3"
            className="btn absolute top-3 right-4 bg-transparent border-none hover:bg-transparent "
          >
            <Image alt="popup" src={Modal} />
          </label>

          <div className="flex py-8 px-8 justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#000072]">
                Sign up as a Lender
              </h3>
              <p className="py-4 text-base font-medium text-gray-900">
                Increase your reach with
                <br />
                ibankey by Connecting with multiple lenders
              </p>
              <Link
                href="/signupLender"
                className="py-2 px-5 text-sm text-white font-bold bg-[#000072] transition duration-200 rounded-lg"
              >
                Sign Up
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#000072]">
                Sign up as a Borrower
              </h3>
              <p className="pt-4 pb-10 text-base font-medium text-gray-900">
                Full Stack institutional debt raising platform
              </p>
              <Link
                href="/signupBorrower"
                className="py-2 px-5 text-sm  text-white font-bold bg-[#000072] transition duration-200 rounded-lg"
              >
                Sign Up
              </Link>
            </div>
          </div>
          {/* PARTNER */}
          {/* <div className="px-8 pt-4">
            <h3 className="text-lg font-bold text-[#000072]">
              Sign up as a Partner
            </h3>
            <p className="py-4 text-base font-medium text-gray-900">
              You selected subscription to use Wikipedia for free
            </p>
            <button className="py-2 px-5 text-sm mb-5 text-white font-bold bg-[#000072] transition duration-200 rounded-lg">
              Sign Up
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
