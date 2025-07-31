import { createContext, useState } from "react";
import useSWR from "swr";
import MenuHeader from "../menuHeader";
import About from "./about";
// import ContactMe from "./contactMe";
import Footer from "./footer";
import Portfolio from "./portfolio";
import Presentation from "./presentation";
import Services from "./services";
import Skills from "./skills";
import { fetcherJson, ROUTEJSON } from "@/common/services/general";
import { PortafolioMainResponse } from "@/domain/models/portafolioMain/portafolioMain";

export const DataContext = createContext<PortafolioMainResponse | null>(null);

const PortafolioMain = () => {
  const {data, isLoading, error} = useSWR(ROUTEJSON, fetcherJson);

  return (
    <div className="containerHeader">
      <MenuHeader />
      <div className="container">
        <DataContext value={data}>
          <Presentation />
          <About />
          <Skills />
          <Portfolio />
          <Services />
          {/* <ContactMe /> */}
        </DataContext>
        <Footer />
      </div>
    </div>
  );
}

export default PortafolioMain;