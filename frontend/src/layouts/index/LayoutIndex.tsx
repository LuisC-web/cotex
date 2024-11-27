import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const LayoutIndex = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default LayoutIndex;
