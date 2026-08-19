
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

    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Navbar
        </p>

        <p className="text-lg text-gray-600">
       Central hub for navigating your app.
        </p>
      </header>



      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
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
    </div>
  );
};

export default NavbarPage;
