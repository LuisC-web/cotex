import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutIndex from "./layouts/index/LayoutIndex";
import HomeView from "./views/home/HomeView";
import LayoutEditor from "./layouts/editor/LayoutEditor";
import EditorView from "./views/editor/EditorView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutIndex></LayoutIndex>}>
          <Route path="/" element={<HomeView></HomeView>} index></Route>
        </Route>
        <Route element={<LayoutEditor></LayoutEditor>}>
          <Route
            path="/editor"
            element={<EditorView></EditorView>}
            index
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
