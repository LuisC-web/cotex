import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const LayoutEditor = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default LayoutEditor;
