import { hover, unhover } from "../hover.ts"

export default function Header() {
  return (
    <div className="page-header">
      <div
        onClick={() => window.open("/flowering/")}
        className="button"
        id="home-btn"
      >
        <span>paper petals</span>
      </div>
      <div
        onClick={() => window.open("/flowering/gallery/")}
        onMouseEnter={() => hover("gallery")}
        onMouseLeave={() => unhover("gallery")}
        className="tenor-sans header-btn button"
        id="gallery-btn"
      >
        <span className="btn-text" id="gallery-link-head">
          gallery
        </span>
        <span className="btn-text" id="gallery-link-tail">
          gallery
        </span>
      </div>
      <div
        onClick={() => window.open("/flowering/commission/")}
        onMouseEnter={() => hover("commission")}
        onMouseLeave={() => unhover("commission")}
        className="tenor-sans header-btn button"
        id="commission-btn"
      >
        <span className="btn-text" id="commission-link-head">
          commission
        </span>
        <span className="btn-text" id="commission-link-tail">
          commission
        </span>
      </div>
    </div>
  );
}
