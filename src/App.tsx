import Header from "./components/Header.tsx";
import HomeContent from "./components/HomeContent.tsx";
import GalleryContent from "./components/GalleryContent.tsx";
import CommissionContent from "./components/CommissionContent.tsx";
import { Routes, Route, HashRouter } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/gallery" element={<GalleryContent />}></Route>
          <Route path="/commission" element={<CommissionContent />}></Route>
          <Route path="/" element={<HomeContent />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}
