import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import * as prismic from "@prismicio/client";

// import { createClient } from "../prismicio";
import { components } from "../slices";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import sm from "../sm.json";
import { findPageByUids, getUidFromParams } from "../utils";

const Page = ({
  page,
  navigation,
  settings,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export default Page;

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const client = prismic.createClient(sm.apiEndpoint);
  // const [first, second] = getUidFromParams(params);
  const uids = getUidFromParams(params);
  const [pages] = await Promise.all([
    // client.getSingle("menu"),
    client.getAllByType("page"),
  ]);

  // console.log(" menu", menu);

  // const pages = await client.getAllByType("page"); // заменить на getByType с условием в запросе
  // console.log("getStaticProps", pages, uids);

  const currentPage = findPageByUids(pages, uids);

  return {
    props: {
      page: currentPage,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // export async function getStaticPaths() {
  // const client = createClient();
  const client = prismic.createClient(sm.apiEndpoint);
  const pages = await client.getAllByType("page");
  const test = pages.map((page) => prismicH.asLink(page));
  // console.log("test", test);

  const urls = pages.map((page) => {
    const ert = [];
    if (page.data.url[0]) {
      ert.push(page.data.url[0].first || "");
      if (page.data.url[0].second) {
        ert.push(page.data.url[0].second || "");
      }
    }
    console.log("ert", ert);

    return ert;
  });

  const paths = urls.map((slug) => {
    return {
      params: { uid: slug },
    };
  });

  return {
    paths: paths,
    // paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  };
};
