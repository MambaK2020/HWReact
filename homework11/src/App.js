import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ArticleListPage from "./pages/ArticleListPage";
import SingleArticlePage from "./pages/SingleArticlePage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/articles" element={<ArticleListPage />} />
          <Route path="/articles/:id" element={<SingleArticlePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

