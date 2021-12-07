import React from "react";
import { BsSearch } from 'react-icons/bs';

export const Header = () => {
  return (
    <header className="h-16 font-semibold  text-white bg-gray-800 flex flex-wrap justify-between items-center">
      <div className="pl-4 ">
        <a href={`/`} className="uppercase hover:text-red-500">
      
          ecommerce
        </a>
      </div>
      <div className="hidden md:flex  relative bg-yellow-500 w-5/12 h-3/6 rounded-md">
          <input type="search" className= "outline-none text-black text-lg pl-2 rounded-l-md w-11/12"></input>
          <BsSearch className="  text-black absolute right-1 top-1/4 text-lg "/>
      </div>
      <div className="p-5 uppercase ">
        <a href="#" className="pr-2 hover:text-red-500">Cart</a>

        <a href="#" className="hover:text-red-500">Sign In</a>
      </div>
    </header>
  );
};
