"use client";

import FeatureSection from "@components/home/FeatureList";
import SlidesGroup from "@components/home/Slides";
import Footer from "@components/layout/Footer";
import Menu from "@components/layout/Menu";
import WebTab from "@components/Tab";
import { allSlideLists, allHeros } from "contentlayer/generated";
import { allFeatureLists } from "contentlayer/generated";

console.log(allFeatureLists)

export default function Page() {

  return (
    <>
      <Menu />

      <WebTab/>

      <SlidesGroup hero={allHeros[0]} slides={allSlideLists} />

      <FeatureSection features={allFeatureLists[0].features} />

      <Footer />
    </>
  );
}
