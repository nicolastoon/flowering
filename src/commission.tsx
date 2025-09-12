import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.tsx";
import CommissionContent from "./components/CommissionContent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <section className="root" id="commission-page">
      <Header />
      <CommissionContent />
      <span className="page-title">commission</span>
    </section>
  </StrictMode>
);
