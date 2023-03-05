import { HashRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./components/Menu";

import { HomePage } from "./components/HomePage";
import { BlogPage } from "./components/BlogPage";
import { Profile } from "./components/Profile";

function App() {
  return (
    <HashRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
