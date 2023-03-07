import { HashRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./components/Menu";

import { HomePage } from "./components/HomePage";
import { BlogPage } from "./components/BlogPage";
import { BlogPost } from "./components/BlogPost";
import { Profile } from "./components/Profile";
import { LoginPage } from "./components/LoginPage";
import { LogoutPage } from "./components/LogoutPage";

import { AuthProvider } from "./components/auth";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
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
