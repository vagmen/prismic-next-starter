import { EmptyImageFieldImage, FilledImageFieldImage } from "@prismicio/types";

export interface ILink {
  title: string;
  link: string;
  href: any;
}

export interface ILinkWithIcon extends ILink {
  icon: EmptyImageFieldImage | FilledImageFieldImage | null | undefined;
}
