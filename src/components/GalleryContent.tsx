import FlowerImage from "./FlowerImage.tsx";

export default function Gallery() {
  const flowers = [
    { id: "azure", src: "/flowering/img/B Simple.jpg", label: "azure (1/6)" },
    {
      id: "blossom",
      src: "/flowering/img/P Simple.jpg",
      label: "blossom (2/6)",
    },
    {
      id: "aurora",
      src: "/flowering/img/Multi Simple.jpg",
      label: "aurora (3/6)",
    },
    { id: "rouge", src: "/flowering/img/R Simple.jpg", label: "rouge (4/6)" },
    { id: "silk", src: "/flowering/img/W Simple.jpg", label: "silk (5/6)" },
    {
      id: "radiance",
      src: "/flowering/img/Y Simple.jpg",
      label: "radiance (6/6)",
    },
  ];

  return (
    <div className="banner" id="gallery-content">
      <div className="banner-content">
        <span className="banner-title tenor-sans">handmade collections</span>
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
        <div id="gallery-photos">
          {flowers.map((flower) => (
            <FlowerImage
              key={flower.id}
              src={flower.src}
              label={flower.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
