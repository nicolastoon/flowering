import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.tsx";
import InfoBanner from "./components/InfoBanner.tsx";

const banners = [
  {
    id: "top-banner",
    title: "thoughtfully crafted",
    desc: "the beautiful colors and flowers can be seen from afar, but every precise fold, crease, and bend make it elaborate and genuine",
    buttonText: "view gallery",
    buttonLink: "/flowering/gallery/",
  },
  {
    id: "bottom-banner",
    title: "made to last forever",
    desc: "literally. no withering, no molding, no seasonal changes. just don’t water them.",
    buttonText: "commission now",
    buttonLink: "/flowering/commission/",
  },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <div className="banner" id="top-banner">
        <Header />
        <InfoBanner info={banners[0]} />
        {/* <img id="top-banner-flower-img" src="./img/flower-temp.png" alt="flower showcase"/> */}
      </div>
      <div className="banner" id="bottom-banner">
        <InfoBanner info={banners[1]} />
        {/* <img id="bottom-banner-flower-img" src="./img/recollections.png" alt="flower showcase"/> */}
      </div>
  </StrictMode>
);
