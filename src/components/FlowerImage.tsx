type Flower = {
  id: string,
  desc: string,
  src: string,
  hover: string,
};

export default function FlowerImage({ id, desc, src, hover }: Flower) {
  function hoverImage(container: HTMLDivElement) {
    const image = container.querySelector(
      ".flower-main-img"
    ) as HTMLImageElement;
    image.style.opacity = "0";
  }

  function unhoverImage(container: HTMLDivElement) {
    const image = container.querySelector(
      ".flower-main-img"
    ) as HTMLImageElement;
    image.style.opacity = "1";
  }

  function openTooltip(e: React.MouseEvent, id: string, desc: string) {
    const tooltip = document.getElementById("flower-tooltip") as HTMLDivElement;
    (tooltip.querySelector("#flower-name") as HTMLSpanElement).textContent = id;
    (tooltip.querySelector("#flower-desc") as HTMLParagraphElement).textContent = desc;
    tooltip.style.opacity = "1";
    tooltip.style.left = `${e.clientX}px`;
    tooltip.style.top = `${e.clientY}px`;
  }

  function closeTooltip(e: React.MouseEvent) {
    const tooltip = document.getElementById("flower-tooltip") as HTMLDivElement;
    tooltip.style.opacity = "0";
  }

  return (
    <div
      className="flower-container"
      onMouseEnter={(e) => {
        hoverImage(e.currentTarget);
        openTooltip(e, id, desc);
      }}
      onMouseLeave={(e) => {
        unhoverImage(e.currentTarget);
        closeTooltip(e);
      }}
    >
      <img className="flower-img flower-main-img" src={src} />
      <img className="flower-img flower-hover-img" src={hover} />
    </div>
  );
}
