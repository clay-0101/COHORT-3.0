
import ComponentDemo from "../ComponentsDemo";
import { useState } from "react";
import NavbarOne from "@/components/navbar/Navbar1";
import NavbarTwo from "@/components/navbar/Navbar2";
import NavbarThree from "@/components/navbar/Navbar3";
import NavbarFour from "@/components/navbar/Navbar4";
import useNavbarCode from "@/components/navbar/CodeUsage";
import PropsTable from "@/components/Personal/PropsTable";


const NavbarPage = () => {
  let { navbarOneUsageCode,
    navbarFourUsageCode,
    navbarThreeUsageCode,
    navbarTwoUsageCode,
    propsData } = useNavbarCode()


  return (

    <div>
      <ComponentDemo code={navbarOneUsageCode}>
        <NavbarOne />
      </ComponentDemo>
      <ComponentDemo code={navbarTwoUsageCode}>
        <NavbarTwo />
      </ComponentDemo>
      <ComponentDemo code={navbarThreeUsageCode}>
        <NavbarThree />
      </ComponentDemo>
      <ComponentDemo code={navbarFourUsageCode}>
        <NavbarFour />
      </ComponentDemo>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
