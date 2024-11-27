import { createBrowserRouter } from "react-router-dom";
import LayoutIndex from "./layouts/LayoutIndex";
import ElementsTex, { loader as ElementsTexLoaders } from "./views/ElementsTex";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutIndex />,
    children: [
      {
        index: true,
        element: <ElementsTex></ElementsTex>,
        loader: ElementsTexLoaders,
      },
    ],
  },
]);
