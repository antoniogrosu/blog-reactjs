import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import BlogPage from "./Pages/BlogPage";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="bg-orange-200 px-4 py-20">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
