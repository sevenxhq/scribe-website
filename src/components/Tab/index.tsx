"use client";

import React, { Fragment, useState, useEffect } from "react";

import { Tab } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { OsTypes, isWindows, isMacOs } from "react-device-detect";

import Releases from "@components/Releases";
import { classNames } from "@utils/functions";

interface category {
  title: string;
  image: string;
  isComingSoon?: boolean;
}

interface DataProps {
  data?: any;
}

export default function WebTab({ data }: DataProps) {
  const filtered = data?.repository?.releases?.nodes?.filter(
    (a: any) => a?.isPrerelease === false
  );

  const relAssets = filtered![0]?.releaseAssets?.edges;
  const version = filtered![0]?.tagName;

  const categoriesItems: category[] = [
    {
      title: "Translation mode",
      image: "/images/editor.png",
      isComingSoon: false,
    },
    {
      title: "OBS Mode",
      image: "/images/editor-obs.png",
    },
    {
      title: "Audio Mode",
      image: "/images/editor-audio.png",
      isComingSoon: false,
    },
    // {
    //   title: "Machine Translation",
    //   image: "/images/editor.png",
    //   isComingSoon: true,
    // },
  ];

  const [categories] = useState(categoriesItems);

  const [downloadUrl, setDownloadUrl] = useState("#");

  useEffect(() => {
    relAssets?.map((element: any) => {
      if (element?.node?.name.endsWith(".exe") && isWindows) {
        setDownloadUrl(element?.node?.downloadUrl);
      } else if (element?.node?.name.endsWith(".dmg") && isMacOs) {
        setDownloadUrl(element?.node?.downloadUrl);
      } else if (
        element?.node?.name.endsWith(".deb") &&
        !isMacOs &&
        !isWindows
      ) {
        setDownloadUrl(element?.node?.downloadUrl);
      }
    });
  }, [relAssets]);
  return (
    <Tab.Group as={Fragment}>
      <div className="bg-primary bg-gradient-to-tr from-primary to-highlight pb-52">
        <div className="container mx-auto">
          {/* <Menu /> */}
          <div className="py-20 text-center xl:py-40">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1, y: 0 },
                hidden: { opacity: 0, scale: 0.95, y: 20 },
              }}
            >
              <h1 className="text-shadow-xl my-5 text-4xl font-bold uppercase tracking-wider text-white xl:text-8xl">
                Scribe
              </h1>
              <p className="mx-auto w-1/2 text-base font-semibold xl:w-auto xl:text-xl xl:leading-8">
                Scripture editing made simple
              </p>
            </motion.div>

            <div className="mx-auto my-24 justify-center md:flex xl:w-2/5">
              <div className="mx-4 mb-10 flex flex-col items-center md:mb-0 md:w-1/2 xl:mx-10">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="block items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-white 
                                p-2 px-4 text-base font-bold 
                                text-secondary shadow-sm hover:bg-secondary hover:text-white xl:px-8 xl:py-4 xl:text-2xl"
                >
                  Try Demo online
                </motion.a>
              </div>
              <div className="mx-4 flex flex-col items-center md:w-1/2 xl:mx-10">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={downloadUrl}
                  className="block items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-primary 
                                p-2 px-4 text-base font-bold 
                                text-white shadow-sm hover:bg-white hover:text-secondary xl:px-8 xl:py-4 xl:text-2xl"
                >
                  Download {version}
                </motion.a>
                <div className="my-5 flex gap-5">
                  <Releases repo={data} />
                </div>
              </div>
            </div>

            <Tab.List className="mx-4 flex space-x-1 border-b border-secondary/30 xl:mx-auto xl:w-2/3">
              {categories.map((category, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      "relative w-full rounded-t-xl py-2 text-xxs font-semibold uppercase hover:bg-white/[0.12] md:text-sm xl:py-5 xl:text-base xl:leading-5",
                      selected
                        ? "border-b-2 border-white text-white outline-none"
                        : "text-secondary hover:text-white"
                    )
                  }
                >
                  {category.title}
                  {!!category.isComingSoon && (
                    <span className="absolute left-0 right-0 mx-auto -mt-10 w-16 rounded-full bg-highlight p-1 text-xxxs font-bold text-white md:w-20 xl:w-24 xl:px-2 xl:text-xxs">
                      coming soon
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>
        </div>
      </div>

      <Tab.Panels as={Fragment}>
        {categories.map((posts, idx) => (
          <Tab.Panel key={idx} className="container mx-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mx-4 -mt-64 rounded-3xl bg-white/5 p-5 xl:mx-auto xl:-mt-80 xl:w-2/3">
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 20 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="rounded-3xl bg-white/5 p-5">
                        <motion.div
                          animate={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: 20 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="rounded-3xl bg-white/5 p-5">
                            <motion.div
                              animate={{ opacity: 1, y: 0 }}
                              initial={{ opacity: 0, y: 20 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 1 }}
                            >
                              <img
                                className="rounded-xl shadow-lg"
                                src={posts.image}
                                alt="Editor"
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
