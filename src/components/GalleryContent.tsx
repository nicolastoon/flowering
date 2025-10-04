import Divider from "./Divider.tsx";
import FlowerImage from "./FlowerImage.tsx";

export default function Gallery() {
  const flowers = [
    { id: "azure", src: "/flowering/img/B Simple.jpg", hover: "/flowering/img/B Shot.jpg", label: "azure (1/6)" },
    {
      id: "blossom",
      src: "/flowering/img/P Simple.jpg",
      hover: "/flowering/img/P Shot.jpg",
      label: "blossom (2/6)",
    },
    {
      id: "aurora",
      src: "/flowering/img/Multi Simple.jpg",
      hover: "/flowering/img/Multi Shot.jpg",
      label: "aurora (3/6)",
    },
    { id: "rouge", src: "/flowering/img/R Simple.jpg", hover: "/flowering/img/R Shot.jpg", label: "rouge (4/6)" },
    { id: "silk", src: "/flowering/img/W Simple.jpg", hover: "/flowering/img/W Shot.jpg", label: "silk (5/6)" },
    {
      id: "radiance",
      src: "/flowering/img/Y Simple.jpg",
      hover: "/flowering/img/Y Shot.jpg", 
      label: "radiance (6/6)",
    },
  ];

  return (
    <section className="root" id="gallery-page">
      <div className="banner">
        <div id="gallery-content" className="banner-content">
          <span className="banner-title tenor-sans">handmade collections</span>
          <Divider />
          <div id="gallery-photos">
            {flowers.map((flower) => (
              <FlowerImage
                key={flower.id}
                src={flower.src}
                hover={flower.hover}
                label={flower.label}
              />
            ))}
          </div>
        </div>
      </div>
      <span className="page-title">gallery</span>
    </section>
  );
}
