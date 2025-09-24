import { hover, unhover } from "../hover.ts";

interface BannerInfo {
  info: {
    id: string;
    title: string;
    desc: string;
    buttonText: string;
    buttonLink: string;
  };
}

export default function InfoBanner({ info }: BannerInfo) {
  return (
    <div className="banner-content" id={`${info.id}-content`}>
      <span className="banner-title tenor-sans">{info.title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="50"
        viewBox="0 0 90 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        className="lucide lucide-minus-icon lucide-minus"
      >
        <path d="M0 12h90" />
      </svg>
      <span className="tenor-sans banner-desc">{info.desc}</span>
      <button
        className="tenor-sans banner-btn button"
        onClick={() => window.open(info.buttonLink)}
        onMouseEnter={() => hover(info.buttonText)}
        onMouseLeave={() => unhover(info.buttonText)}
      >
        <div className="button">
          <span className="btn-text" id={`${info.buttonText}-link-head`}>
            {info.buttonText}
          </span>
          <span className="btn-text" id={`${info.buttonText}-link-tail`}>
            {info.buttonText}
          </span>
        </div>
      </button>
    </div>
  );
}
