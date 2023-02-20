import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import BlogPage from "./Pages/BlogPage";
import Navbar from "./Components/Navbar";
import AdminPage from "./Pages/AdminPage";
import PostPage from "./Pages/PostPage";
import { AuthContextProvider } from "../authContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <div className="bg-orange-200 px-4 py-20 md:px-24 md:py-20">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slang" element={<PostPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
