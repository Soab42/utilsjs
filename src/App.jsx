import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/ui/common/Layout";
import SingleBlog from "./page/SingleBlog";
import ProfileInfo from "./components/ui/profile/ProfileInfo";
import AddPost from "./page/AddPost";
import Blog from "./page/Blog";
import Components from "./page/Components";
import Home from "./page/Home";
import Hooks from "./page/Feature";
import Login from "./page/Login";
import PageLayout from "./page/PageLayout";
import PageNotFound from "./page/PageNotFound";
import Registration from "./page/Registration";
import Tools from "./page/Tools";
import Utils from "./page/Utils";
import SingleHooks from "./components/ui/post/SinglePost";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";
import Test from "./Test";
import Feature from "./page/Feature";
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
            <Route path="/:page" element={<Feature />} />

            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/write" element={<AddPost />} />
              <Route path="/write/:category" element={<AddPost />} />
            </Route>
            <Route element={<PageLayout />}>
              <Route path="/:page/:name" element={<SingleHooks />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
