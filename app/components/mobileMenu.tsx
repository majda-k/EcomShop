"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import SideBar from "./SideBar";
import SocialMedia from "./socialMedia";


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="absolute top-5 left-5 z-50 sm:hidden">
            <button onClick={toggleMenu} className="md:hidden">
                <Menu size={24} className="text-black" />
            </button>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={toggleMenu}
                />


            )}
            {isOpen && (
                <>
                    <div className={`w-96 h-screen bg-black fixed top-0 left-0 z-50 shadow-lg p-4 md:hidden text-white flex flex-row justify-between transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                        <h1 className="text-white text-xl font-bold">Ecom <span className="text-green-500">Shop</span></h1>
                        <X size={24} className="text-white" onClick={toggleMenu} />

                    </div>

                    <div>
                        <SideBar className="sm:flex sm:flex-col space-y-4 text-white z-50 fixed top-20 left-5 font-semibold text-sm" />
                        <SocialMedia className="flex flex-row mt-50 mr-6 text-white z-50 gap-5 z-50"/> 
                    </div>
                </>

            )}


        </div>

    )
}