// import React from 'react'
// import { PrismicRichText } from '@prismicio/react'

// /**
//  * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
//  * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
//  * @param { FaqProps }
//  */
// const Faq = ({ slice }) => (
//   <section>
//     <span className="title">
//       {
//         slice.primary.title ?
//         <PrismicRichText field={slice.primary.title}/>
//         : <h2>Template slice, update me!</h2>
//       }
//     </span>
//     {
//       slice.primary.description ?
//       <PrismicRichText field={slice.primary.description}/>
//       : <p>start by editing this slice from inside Slice Machine!</p>
//     }
//     <style jsx>{`
//         section {
//           max-width: 600px;
//           margin: 4em auto;
//           text-align: center;
//         }
//         .title {
//           color: #8592e0;
//         }
//     `}</style>
//   </section>
// )

// export default Faq

// slices/FaqSlice/index.js

import React from "react";

/**
 * The following React component renders a <section> tag
 * with a <script> containing the JSON schema
 * of the FAQ Slice.
 */
const Faq = ({ slice }) => {
  // Declare an empty array
  const schemaData = [];

  // Loop through the Slice array
  slice.items.forEach((slice) => {
    const questions = [];
    // console.log("slice", slice.question, slice.answer);
    // Find the question and answer fields
    questions.push({
      "@type": "Question",
      name: slice.question[0].text,
      acceptedAnswer: {
        "@type": "Answer",
        text: slice.answer[0].text,
      },
    });
    // Add the fields to the JSON schema
    schemaData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: questions,
    });
  });
  //return a fully formed FAQ schema
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </section>
  );
};

export default Faq;
