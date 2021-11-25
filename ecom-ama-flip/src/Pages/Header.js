import React from "react";
import { BsSearch } from 'react-icons/bs';

export const Header = () => {
  return (
    <header className="h-16 font-semibold  text-white bg-gray-800 flex flex-wrap justify-between items-center">
      <div className="pl-4 ">
        <a href="#" className="uppercase hover:text-red-500">
          
          ecommerce
        </a>
      </div>
      <div className="hidden md:flex relative bg-yellow-500 w-5/12">
          <input type="search" className=" w-11/12"></input>
          <BsSearch className=" text-black absolute right-0 "/>
      </div>
      <div className="p-5 uppercase ">
        <a href="#" className="pr-2 hover:text-red-500">Cart</a>

        <a href="#" className="hover:text-red-500">Sign In</a>
      </div>
    </header>
  );
};
