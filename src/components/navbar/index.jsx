import React from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { MdHome } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import avatar from "assets/img/avatars/avatar4.png";

const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;

  return (
    <nav className="sticky top-0 z-40 flex h-14 flex-row items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-navy-700 dark:bg-navy-800">
      {/* Left side - Breadcrumb */}
      <div className="flex items-center gap-2">
        <MdHome className="h-5 w-5 text-gray-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-white">
          {brandText}
        </span>
      </div>

      {/* Right side - User info */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>

        {/* Notification */}
        <button className="relative flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-navy-700">
          <IoMdNotificationsOutline className="h-5 w-5 text-gray-600 dark:text-white" />
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        {/* Profile Dropdown */}
        <Dropdown
          button={
            <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-navy-700">
              <span className="text-sm font-medium text-gray-700 dark:text-white">
                Hakkam
              </span>
              <IoChevronDown className="h-4 w-4 text-gray-500" />
              <img
                className="h-8 w-8 rounded-full object-cover"
                src={avatar}
                alt="User"
              />
            </div>
          }
          children={
            <div className="flex w-48 flex-col justify-start rounded-xl bg-white py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <a
                href=" "
                className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-navy-600"
              >
                Profile Settings
              </a>
              <a
                href=" "
                className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-navy-600"
              >
                Account Settings
              </a>
              <div className="my-1 h-px w-full bg-gray-200 dark:bg-white/20" />
              <a
                href=" "
                className="px-4 py-2 text-sm font-medium text-red-500 hover:bg-gray-100 dark:hover:bg-navy-600"
              >
                Log Out
              </a>
            </div>
          }
          classNames={"py-2 top-10 -left-[120px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
