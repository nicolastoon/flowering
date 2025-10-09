type Flower = {
  id: string;
  desc: string;
  src: string;
  hover: string;
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

  function openTooltip(
    e: React.MouseEvent,
    id: string,
    desc: string,
    isMobile: boolean = false
  ) {
    const element = isMobile ? "mobile-flower-tooltip" : "flower-tooltip";
    const tooltip = document.getElementById(element) as HTMLDivElement;
    (tooltip.querySelector("#flower-name") as HTMLSpanElement).textContent = id;
    (
      tooltip.querySelector("#flower-desc") as HTMLParagraphElement
    ).textContent = desc;
    tooltip.style.opacity = "1";
    if (!isMobile) {
      tooltip.style.left = `${e.clientX}px`;
      tooltip.style.top = `${e.clientY}px`;
    }
  }

  function closeTooltip(isMobile: boolean = false) {
    const element = isMobile ? "mobile-flower-tooltip" : "flower-tooltip";
    const tooltip = document.getElementById(element) as HTMLDivElement;
    tooltip.style.opacity = "0";
  }

  const pictures = document.getElementsByClassName("mobile-flower-container");

  function toggleMobileClick(e: React.MouseEvent, id: string, desc: string) {
    const target = e.currentTarget as HTMLDivElement;
    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i] === target) {
        const main = target.querySelector(
          ".mobile-flower-main-img"
        ) as HTMLImageElement;
        if (window.getComputedStyle(main).opacity === "1") {
          hoverImage(target);
          openTooltip(e, id, desc, true);
        } else {
          unhoverImage(target);
          closeTooltip(true);
        }
      } else {
        unhoverImage(pictures[i] as HTMLDivElement);
      }
    }
  }

  return (
    <>
      <div
        className="flower-container"
        onMouseEnter={(e) => {
          hoverImage(e.currentTarget);
          openTooltip(e, id, desc);
        }}
        onMouseLeave={(e) => {
          unhoverImage(e.currentTarget);
          closeTooltip();
        }}
      >
        <img className="flower-img flower-main-img" src={src} />
        <img className="flower-img flower-hover-img" src={hover} />
      </div>
      <div
        className="flower-container mobile-flower-container"
        onClick={(e) => {
          toggleMobileClick(e, id, desc);
        }}
      >
        <img
          className="flower-img flower-main-img mobile-flower-main-img"
          src={src}
        />
        <img
          className="flower-img flower-hover-img mobile-flower-hover-img"
          src={hover}
        />
      </div>
    </>
  );
}
