import React from "react";
import { Routes, Route } from "react-router-dom";

//styles
import "./styles/App.css";

//components
import PrivateRoute from "./components/PrivateRoute";
import Headers from "./components/Headers";
import Footer from "./components/Footer";

//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
