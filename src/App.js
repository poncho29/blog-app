import { HashRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./components/layout/Menu";

import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { PostPage } from "./pages/PostPage";
import { Profile } from "./pages/ProfilePage";
import { LoginPage } from "./pages/auth/LoginPage";

import { AuthProvider } from "./context/auth";
import { PostProvider } from "./context/posts";

import { PrivateRoute } from "./components/privates/PrivateRoute";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <PostProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<PostPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } />
            
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </PostProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
