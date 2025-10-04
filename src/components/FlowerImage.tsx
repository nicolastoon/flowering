interface Flower {
  src: string;
  hover: string;
  label: string;
}

export default function FlowerImage({ src, hover, label }: Flower) {
  function hoverImage(e: React.MouseEvent) {
    const image = e.target as HTMLElement;
    if (image.classList.contains("flower-main-img")) {
      image.style.opacity = '0';
    }
  }

  function unhoverImage(e: React.MouseEvent) {
    const image = e.target as HTMLElement;
    if (image.classList.contains("flower-main-img")) {
      image.style.opacity = '1';
    }
  }

  function openTooltip(e: React.MouseEvent) {}

  function closeTooltip(e: React.MouseEvent) {}

  return (
    <div className="flower-container">
      {/* <span className="flower-label tenor-sans">{label}</span> */}
      <img
        className="flower-img flower-main-img"
        onMouseEnter={(e) => {
          hoverImage(e);
          openTooltip(e);
        }}
        onMouseLeave={(e) => {
          unhoverImage(e);
          closeTooltip(e);
        }}
        src={src}
      />
      <img
        className="flower-img flower-hover-img"
        onMouseEnter={(e) => hoverImage(e)}
        onMouseLeave={(e) => unhoverImage(e)}
        src={hover}
      />
    </div>
  );
}
