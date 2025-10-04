import { hover, unhover } from "../hover.ts";
import Divider from "./Divider.tsx";

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
      <Divider />
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
