import React from "react";
import BlockhubLogo from "./navbar/blockhub-logo";
import useScrollBlur from "../hooks/useScrollBlur";

export default function Header() {
  const isScrolled = useScrollBlur(50);
  return (
    <header className={`z-[99999] fixed w-full bg-cover transition-all duration-300
    ${isScrolled ? "backdrop-blur-lg bg-orange-100/20 shadow-md" : "bg-orange-100/100 shadow-none"}`}> {/*shadow-[0px_10px_30px_rgba(0,0,0,0.8)] */}
          <div className="container justify-between items-center mx-auto flex z-50">
          
            {/* Logo */} 
              <a href="/" className="flex items-center">
                  <BlockhubLogo /> 
              </a>
            {/* Navigation Links */}   
              <nav className="hidden md:flex space-x-6">
              <div className="p-2 hover:scale-110 font-shadowsLight2 font-bold hover:shadow-lg transition-transform duration-300 rounded-lg text-neutral-700 sketchy sketchy-none">
               <a href="#home" className="text-4xl">
                   Home
               </a>
               </div>
               <div className="p-2 hover:scale-110 font-shadowsLight2 font-bold hover:shadow-lg transition-transform duration-300 rounded-lg text-neutral-700 sketchy sketchy-none">
               <a href="#projects" className="text-4xl">
                   Projects
               </a>
               </div>
               <div className="p-2 hover:scale-110 font-shadowsLight2 font-bold hover:shadow-lg transition-transform duration-300 rounded-lg text-neutral-700 sketchy sketchy-none">
               <a href="#about" className="text-4xl">
                   About
               </a>
               </div>
              <div className="p-2 hover:scale-110 hover:shadow-lg font-shadowsLight2 font-bold transition-transform duration-300 rounded-lg text-neutral-700 sketchy sketchy-none">
               <a href="#blog" className="text-4xl">
                   Blog
               </a>
               </div>
              </nav>
              {/* Actions */}
              <div className="flex space-x-6">
              <button className="bg-stone-400 p-2 sketchy sketchy-none rounded-full group hover:shadow-lg transition-transform duration-300 hover:scale-110">
                <div className=" rotate-180 transition-transform duration-300 group-hover:rotate-0">
                  🌓
                  </div>
              </button>
              <button className="bg-stone-400 p-2 group sketchy sketchy-none rounded-full hover:shadow-lg transition-transform duration-300 hover:scale-110">
                <div className="apply-bounce">
                  🚀
                  </div>
              </button>
              <div className="relative group">
            <button className="rotate-180 flex w-10 h-10 bg-[url(/assets/Profile.webp)] sketchy sketchy-none justify-center items-center bg-cover rounded-full hover:shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-0">
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-orange-100 rounded-3xl shadow-lg hidden group-hover:block border-2 border-neutral-700 overflow-hidden rounded-e-2xl">
              <a href="/profile" className="block px-4 py-2 text-neutral-700 hover:text-white hover:bg-neutral-700">
                Profile
              </a>
              <a href="/settings" className="block px-4 py-2 text-neutral-700 hover:text-white hover:bg-neutral-700">
                Settings
              </a>
              <a href="/logout" className="block px-4 py-2 text-neutral-700 hover:text-white hover:bg-neutral-700">
                Logout
              </a>
            </div>
              </div>
              </div>
        </div> {/*<div className="text-white border-2 border-neutral-700 sketchy"></div>*/}
    </header>
  );
}