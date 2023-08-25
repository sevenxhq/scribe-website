"use client";

import { Popover } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/24/outline";

import MobileMenu from "@components/layout/MobileMenu";
import AutographaLogo from "@public/logos/autographa.svg";

export default function Menu() {
  return (
    <Popover className="sticky top-0 z-50 bg-primary ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b border-white border-opacity-20 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <AutographaLogo className="h-8 w-8 text-white" />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars4Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <nav className="hidden space-x-10 md:flex">
            <a
              href="#features"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="https://docs.scribe.bible/docs/"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              Docs
            </a>
            {/* <a href="#" className="text-base font-medium text-white hover:text-gray-900">
              Success Stories
            </a> */}
          </nav>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {/* <a href="#" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-900">
              Try It
            </a> */}
            <a
              href="https://github.com/friendsofagape/autographa/releases"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#DC2626] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-white hover:text-secondary"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <MobileMenu />
    </Popover>
  );
}
