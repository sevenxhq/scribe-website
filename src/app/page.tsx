import FeatureSection from "@components/home/FeatureList";
import SlidesGroup from "@components/home/Slides";
import Footer from "@components/layout/Footer";
import Menu from "@components/layout/Menu";
import WebTab from "@components/Tab";
import { GetDownloadUrlDocument } from "@graphql/graphql";
import { allSlideLists, allHeros } from "contentlayer/generated";
import { allFeatureLists } from "contentlayer/generated";
import { client } from "src/client/graphql";


async function getDownloadUrlQuery() {
  const data = await client.request(GetDownloadUrlDocument);
  return data;
}

export default async function Page() {
  const downloadUrlQuery = await getDownloadUrlQuery();

  return (
    <>
      <Menu />

      <WebTab data={downloadUrlQuery} />

      <SlidesGroup hero={allHeros[0]} slides={allSlideLists} />

      <FeatureSection features={allFeatureLists[0].features} />

      <Footer />
    </>
  );
}
