import { useEffect, useState } from "react";
import { ILink, ILinkWithIcon } from "../../interfaces";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import * as prismic from "@prismicio/client";
import sm from "../../sm.json";
import { TestTheme } from "../TestTheme/TestTheme";
import { Header } from "../Header/Header";
import useWindowSize from "../../hooks/useWindowSize";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: ILayout) => {
  const [links, setData] = useState<ILinkWithIcon[]>([]);
  const client = prismic.createClient(sm.apiEndpoint);
  // const [first, second] = getUidFromParams(params);
  // const uids = getUidFromParams(params);

  useEffect(() => {
    const fetchMenu = async () => {
      const menu = await client.getSingle("menu");
      const preparedMenuData = menu.data.menuitem.map((item: any) => ({
        ...item,
        link: item.link || "",
      }));
      console.log("menu", menu, preparedMenuData);
      setData(preparedMenuData);
    };

    fetchMenu();

    // setData([
    //   { link: "", title: "Главная" },
    //   { link: "/services", title: "Услуги" },
    //   { link: "/about", title: "О нас" },
    //   { link: "/blog", title: "Блог" },
    //   { link: "/contacts", title: "Контакты" },
    // ]);
  }, []);

  // if (error) return <div>Failed to load</div>;
  // if (!links) return <div>Loading...</div>;

  // console.log("links", links);

  const { width } = useWindowSize();

  return (
    <>
      <Header links={links} />
      {width < 1000 && <MobileNavbar links={links} />}
      {/* <TestTheme /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};
