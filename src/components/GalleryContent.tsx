import Divider from "./Divider.tsx";
import FlowerImage from "./FlowerImage.tsx";
import FlowerTooltip from "./FlowerTooltip.tsx";
import flowers from "../../lib/flowers.json";

export default function Gallery() {
  return (
    <section id="gallery-page">
      <FlowerTooltip />
      <div id="gallery-content" className="banner">
        <span className="banner-title tenor-sans">handmade collections</span>
        <Divider />
        <div id="gallery-photos">
          {flowers.map((flower) => (
            <FlowerImage
              key={flower.id}
              id={flower.id}
              desc={flower.desc}
              src={flower.src}
              hover={flower.hover}
            />
          ))}
        </div>
      </div>
      <span className="page-title">gallery</span>
    </section>
  );
}
