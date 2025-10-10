import HeaderButton from "./HeaderButton.tsx";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const hamburger = document.getElementById("menu-btn") as HTMLElement;
    const x = document.getElementById("close-menu-btn") as HTMLElement;
    const mobileNav = document.getElementById("mobile-nav") as HTMLDivElement;

    if (nav) {
      hamburger.style.display = "none";
      x.style.display = "block";
      mobileNav.style.display = "flex";
      setTimeout(() => {
        mobileNav.style.opacity = "1";
      }, 1);
    } else {
      hamburger.style.display = "block";
      x.style.display = "none";
      mobileNav.style.opacity = "0";
      setTimeout(() => {
        mobileNav.style.display = "none";
      }, 500);
    }
  }, [nav]);

  return (
    <>
      <div className="mobile-page-header">
        <Menu
          id="menu-btn"
          onClick={() => {
            setNav(true);
          }}
        />
        <X
          id="close-menu-btn"
          onClick={() => {
            setNav(false);
          }}
        />
        <div
          onClick={() => (window.location.href = "#")}
          className="button"
          id="home-btn"
        >
          <span>paper petals</span>
        </div>
      </div>
      <div id="mobile-nav">
        <HeaderButton
          page="mobile-gallery"
          onClick={() => {
            window.location.href = "#/gallery";
            setNav(false);
          }}
        />
        <HeaderButton
          page="mobile-commission"
          onClick={() => {
            window.location.href = "#/commission";
            setNav(false);
          }}
        />
      </div>
      <div className="page-header">
        <div
          onClick={() => (window.location.href = "#")}
          className="button"
          id="home-btn"
        >
          <span>paper petals</span>
        </div>
        <HeaderButton page="gallery" onClick={() => {
            window.location.href = "#/gallery";
          }}/>
        <HeaderButton page="commission" onClick={() => {
            window.location.href = "#/commission";
          }}/>
      </div>
    </>
  );
}
