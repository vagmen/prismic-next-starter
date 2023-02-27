import { useEffect, useState } from "react";
import { ILinkWithIcon } from "../../interfaces";
import { Footer } from "../Footer/Footer";
import * as prismic from "@prismicio/client";
import sm from "../../sm.json";
import { TestTheme } from "../TestTheme/TestTheme";
import { Header } from "../Header/Header";
import useWindowSize from "../../hooks/useWindowSize";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import { EmptyImageFieldImage, FilledImageFieldImage } from "@prismicio/types";
interface IConfig {
  logo: EmptyImageFieldImage | FilledImageFieldImage | null | undefined;
}

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: ILayout) => {
  const [links, setData] = useState<ILinkWithIcon[]>([]);
  const [config, setConfig] = useState<IConfig>();
  const client = prismic.createClient(sm.apiEndpoint);
  // const [first, second] = getUidFromParams(params);
  // const uids = getUidFromParams(params);

  useEffect(() => {
    const fetchMenu = async () => {
      const [menu, configResponse] = await Promise.all([
        client.getSingle("menu"),
        client.getSingle("config") as unknown as { data: IConfig },
      ]);

      const preparedMenuData = menu.data.menuitem.map((item: any) => ({
        ...item,
        link: item.link || "",
      }));
      console.log("menu", menu, preparedMenuData, config);
      setData(preparedMenuData);
      setConfig(configResponse.data);
    };

    fetchMenu();
  }, []);

  // if (error) return <div>Failed to load</div>;
  // if (!links) return <div>Loading...</div>;

  // console.log("links", links);

  const { width } = useWindowSize();

  return (
    <>
      <Header links={links} logo={config?.logo} />
      {width < 1000 && <MobileNavbar links={links} />}
      {/* <TestTheme /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};
