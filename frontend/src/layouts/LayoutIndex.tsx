import NavMenu from "@/components/NavMenu";
import { Outlet } from "react-router-dom";

const LayoutIndex = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default LayoutIndex;
