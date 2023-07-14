import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaRegComments } from 'react-icons/fa';
import { BiMessageSquareDots } from 'react-icons/bi';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex">
      <div className="p-6 w-120">
        <h1 className="text-xl sm:text-3xl text-left cursor-pointer font-bold text-white pb-4">
          Learn Programming
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <a href="/new_1" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                <MdOutlineSpaceDashboard className="text-2xl text-white group-hover:text-white" />
                <h3 className="text-sm sm:text-base text-white font-semibold">Link 1</h3>
              </div>
            </a>
            <a href="/new_2" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                <CgProfile className="text-2xl text-white group-hover:text-white" />
                <h3 className="text-sm sm:text-base text-white font-semibold">Link 2</h3>
              </div>
            </a>
            <a href="/new_3" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                <FaRegComments className="text-2xl text-white group-hover:text-white" />
                <h3 className="text-sm sm:text-base text-white font-semibold">Link 3</h3>
              </div>
            </a>
            <a href="/new_4" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                <MdOutlineAnalytics className="text-2xl text-white group-hover:text-white" />
                <h3 className="text-sm sm:text-base text-white font-semibold">Link 4</h3>
              </div>
            </a>
            <a href="/new_5" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                <BiMessageSquareDots className="text-2xl text-white group-hover:text-white" />
                <h3 className="text-sm sm:text-base text-white font-semibold">Link 5</h3>
              </div>
            </a>
            <a href="/new_6" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                <MdOutlineIntegrationInstructions className="text-2xl text-white group-hover:text-white" />
                <h3 className="text-sm sm:text-base text-white font-semibold">Link 6</h3>
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="/Settings" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                <MdOutlineSettings className="text-2xl text-white group-hover:text-white" />
                <h3 className="text-sm sm:text-base text-white font-semibold">Settings</h3>
              </div>
            </a>
            <a href="/More" className="link">
              <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
                <MdOutlineMoreHoriz className="text-2xl text-white group-hover:text-white" />
                <h3 className="text-sm sm:text-base text-white font-semibold">More</h3>
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 hover:bg-gray-900 p-2 rounded-md cursor-pointer">
              <MdOutlineLogout className="text-2xl text-white group-hover:text-white" />
              <h3 className="text-sm sm:text-base text-white font-semibold">Logout</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
