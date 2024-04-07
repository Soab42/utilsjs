import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import SingleBlog from "./components/components/page/SingleBlog";
import ProfileInfo from "./components/components/profile/ProfileInfo";
import AddPost from "./components/page/AddPost";
import Blog from "./components/page/Blog";
import Components from "./components/page/Components";
import Home from "./components/page/Home";
import Hooks from "./components/page/Hooks";
import Login from "./components/page/Login";
import PageLayout from "./components/page/PageLayout";
import PageNotFound from "./components/page/PageNotFound";
import Registration from "./components/page/Registration";
import Tools from "./components/page/Tools";
import Utils from "./components/page/Utils";
import SingleHooks from "./components/post/SinglePost";
import PrivateRoute from "./components/route/PrivateRoute";
import PublicRoute from "./components/route/PublicRoute";
import Test from "./Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} exact />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/test" element={<Test />} />
            <Route path="/blogs/:name/:id" element={<SingleBlog />} />
            <Route path="/components" element={<Components />} />
            <Route path="/components/:name" element={<Components />} />
            <Route path="/profile/:id" element={<ProfileInfo />} />

            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/write" element={<AddPost />} />
            </Route>
            <Route element={<PageLayout />}>
              <Route path="/hooks" element={<Hooks />} />
              <Route path="/hooks/:name" element={<SingleHooks />} />
              <Route path="/utils" element={<Utils />} />
              <Route path="/utils/:name" element={<SingleHooks />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/tools/:name" element={<SingleHooks />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
