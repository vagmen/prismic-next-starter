import { ParsedUrlQuery } from "querystring";
import { PrismicDocument } from "@prismicio/types";

export const getUidFromParams = (params: ParsedUrlQuery | undefined) => {
  if (!params || !params.uid) {
    return [];
  }
  if (typeof params.uid === "object") {
    return params.uid;
  } else {
    return [params.uid];
  }
};

export const findPageByUids = (
  pages: PrismicDocument<Record<string, any>, string, string>[],
  uids: (string | undefined)[]
) => {
  const [first, second] = uids;
  const currentPage = pages.filter((page) => {
    if (
      (page.data.url[0].first === first ||
        (!page.data.url[0].first && !first)) &&
      (page.data.url[0].second === second ||
        (!page.data.url[0].second && !second))
    ) {
      return true;
    }
    return false;
  });
  return currentPage.length > 0 ? currentPage[0] : null;
};
