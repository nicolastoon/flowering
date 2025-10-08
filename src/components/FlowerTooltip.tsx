import { useEffect, useState } from "react";

export default function FlowerTooltip() {
  function useMousePosition() {
    const [position, setPosition] = useState({ x: -1, y: -1 });

    useEffect(() => {
      window.addEventListener("mousemove", (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      });

      return () => {
        window.removeEventListener("mousemove", (e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        });
      };
    }, []);

    return position;
  }

  const mousePosition = useMousePosition();

  useEffect(() => {
    const tooltip = document.getElementById("flower-tooltip") as HTMLDivElement;
    tooltip.style.top = `${mousePosition.y}px`;
    tooltip.style.left = `${mousePosition.x}px`;
  }, [mousePosition]);

  return (
    <div id="flower-tooltip">
      <span id="flower-name"></span>
      <p className="tenor-sans" id="flower-desc"></p>
    </div>
  );
}
