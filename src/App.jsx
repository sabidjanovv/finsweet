import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Header from "./components/header/Header";
import Service from "./pages/service/Service";
import Company from "./pages/company/Company";
import Career from "./pages/career/Career";
import Blog from "./pages/blog/Blog";
import CloneProjects from "./pages/clone-projects/Clone-Projects";
import Layout from "./pages/Layout";
import Auth from "./pages/auth/Auth";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/contact_us" element={<Contact />} /> */}
          {/* <Route path="/blog" element={<Blog />} />
          <Route path="/clone_projects" element={<CloneProjects />} /> */}
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
