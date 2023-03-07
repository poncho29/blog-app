import { HashRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./components/Menu";

import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { PostPage } from "./pages/PostPage";
import { Profile } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage";

import { AuthProvider } from "./context/auth";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/logout" element={
            <PrivateRoute>
              <LogoutPage />
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
