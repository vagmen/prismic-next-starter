import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./styles.module.css";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageWithCaptionSlice} ImageWithCaptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageWithCaptionSlice>} ImageWithCaptionProps
 * @param { ImageWithCaptionProps }
 */
const ImageWithCaption = ({ slice }) => (
  <section className={styles.section}>
    {/* <div className={styles.imageWrapper}>
      <Image
        src={slice.primary.image.url}
        alt={slice.primary.image.alt}
        width={300}
        height={150}
        className={styles.image}
        // fill={true}
      />
    </div> */}
    <PrismicNextImage
      field={slice.primary.image}
      className={styles.image}
      imgixParams={{ txt: "qweqweqwe" }}
    />
    <span>{slice.primary.caption}</span>
  </section>
);

export default ImageWithCaption;
