import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from "./components/Header.tsx";
import GalleryContent from "./components/GalleryContent.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <section className="root" id='gallery-page'>
      <Header />
      <GalleryContent />
      <span className="page-title">gallery</span>
    </section>
  </StrictMode>,
)