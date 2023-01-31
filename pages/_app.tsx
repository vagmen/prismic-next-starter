import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { Layout } from "../components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          {/* <a {...props}> */}
          {children}
          {/* </a> */}
        </Link>
      )}
      // internalLinkComponent={(props) => {
      //   console.log("internalLinkComponent", props);

      //   return <Link {...props} />;
      // }}
      // linkResolver={(props) => {
      //   console.log("linkResolver", props);
      // }}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* <Component {...pageProps} /> */}
      </PrismicPreview>
    </PrismicProvider>
  );
}
