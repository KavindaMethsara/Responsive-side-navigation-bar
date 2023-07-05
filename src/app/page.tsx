import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-6 w-1/2 h-screen bg-black z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-white pb-4 w-full">
            Learn Programming
            </h1>
        <div className=" my-4 border-gray-100 pb-4">
        
          <a href="/new_1">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-white group-hover:text-white " />
              <h3 className={`text-base text-white group-hover:text-white font-semibold`}>
              Link 1{''}
            </h3>
            </div>
            </a>
          
          <a href="/new_2">
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-white group-hover:text-white " />
              <h3 className={`text-base text-white group-hover:text-white font-semibold`}>
                Link 2{''}
                </h3>
            </div>
            </a>
          
          <a href="/new_3">
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaRegComments className="text-2xl text-white group-hover:text-white " />
              <h3 className={`text-base text-white group-hover:text-white font-semibold`}>
                Link 3{''}
                </h3>
            </div>
            </a>
          
          <a href="/new_4">
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-white group-hover:text-white " />
              <h3 className={`text-base text-white group-hover:text-white font-semibold`}>
                Link 4{''}
                </h3>
            </div>
            </a>

          <a href="/new_5">
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BiMessageSquareDots className="text-2xl text-white group-hover:text-white " />
              <h3 className={`text-base text-white group-hover:text-white font-semibold`}>
                Link 5{''}
                </h3>
            </div>
            </a>

          <a href="/new_6">
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineIntegrationInstructions className="text-2xl text-white group-hover:text-white " />
              <h3 className={`text-base text-white group-hover:text-white font-semibold`}>
              Link 6{''}
              </h3>
            </div>
            </a>
          
        </div>

        {/* setting  */}
        <div className=" my-4 border-gray-100 pb-4">
        <a href="/Settings">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-white group-hover:text-white " />
              <h3 className={`text-base text-white group-hover:text-white font-semibold`}>
                  Settings{''}
                </h3>
            </div>
            </a>
          
            <a href="/More">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-white group-hover:text-white " />
              <h3 className={`text-base text-white group-hover:text-white font-semibold`}>
                  More{''}
                </h3>
            </div>
            </a>
        </div>
        
            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-white group-hover:text-white " />
            <h3 className={`text-base text-white group-hover:text-white font-semibold`}>
                  Logout{''}
                </h3>
          </div>
        </div>
      </div>
      </div>
      </main>
  )
}
