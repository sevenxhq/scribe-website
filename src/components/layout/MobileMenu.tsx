import { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import AutographaLogo from "@public/logos/Logo.svg";
// import { classNames } from '@utils/functions'

const solutions = [
  {
    name: "Features",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#features",
    icon: ChartBarIcon,
  },
  {
    name: "Docs",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "https://docs.scribe.bible/",
    icon: CursorArrowRaysIcon,
  },
];

const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

export default function MobileMenu() {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pb-6 pt-5">
            <div className="flex items-center justify-between">
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <AutographaLogo className="h-10 stroke-primary" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                  >
                    {/* <item.icon className="shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" /> */}
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="space-y-6 px-5 py-6">
            <div>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}
