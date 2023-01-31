import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from '../styles/Home.module.css'
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import * as prismic from "@prismicio/client";

// import { createClient } from "../prismicio";
import { components } from "../slices";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import sm from "../sm.json";
import { findPageByUids, getUidFromParams } from "../utils";

// const inter = Inter({ subsets: ["latin"] });

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
  console.log("getStaticProps", pages, uids);

  const currentPage = findPageByUids(pages, uids);

  return {
    props: {
      page: currentPage,
    },
  };
};
