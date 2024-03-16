import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/page/Home";
import Layout from "./components/common/Layout";
import Login from "./components/page/Login";
import PageNotFound from "./components/page/PageNotFound";
import PrivateRoute from "./components/route/PrivateRoute";
import PublicRoute from "./components/route/PublicRoute";
import Registration from "./components/page/Registration";
import Blog from "./components/page/Blog";
import Components from "./components/page/Components";
import Hooks from "./components/page/Hooks";
import PageLayout from "./components/page/PageLayout";
import Tools from "./components/page/Tools";
import Utils from "./components/page/Utils";
import SingleHooks from "./components/post/SinglePost";
import AddPost from "./components/page/AddPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} exact />
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/write" element={<AddPost />} />
            </Route>
            <Route element={<PageLayout />}>
              <Route path="/components" element={<Components />} />
              <Route path="/hooks" element={<Hooks />} />
              <Route path="/hooks/:name" element={<SingleHooks />} />
              <Route path="/utils" element={<Utils />} />
              <Route path="/utils/:name" element={<SingleHooks />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/tools/:name" element={<SingleHooks />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
