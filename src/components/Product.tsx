import type { BaseSyntheticEvent } from "react";
import { useState } from "react";

interface ProductProps {
  flowers: { main: string; sub: string };
  type: string;
}

function expandImage(imgId: string) {
  console.log("Expanding image");
  const img = document.getElementById(imgId) as HTMLDivElement;
  img.style.width = "100%";
}

function shrinkOthers(imgId: string) {
  const collection = document.querySelectorAll(".flower-img-wrapper");
  console.log("Shrinking other images");
  collection.forEach((i) => {
    if (i.id !== imgId) {
      (i as HTMLDivElement).style.width = "10%";
    }
  });
}

function resetImages() {
  console.log("Resetting images");
  const collection = document.querySelectorAll(".flower-img-wrapper");
  collection.forEach((i) => {
    (i as HTMLDivElement).style.width = "20%";
  });
}

export default function Product({ flowers, type }: ProductProps) {
  return (
    <div
      className="flower-img-wrapper"
      onMouseOver={() => {
        expandImage(`flower-${type}`);
        shrinkOthers(`flower-${type}`);
      }}
      onMouseOut={() => {
        resetImages();
      }}
      id={`flower-${type}`}
    >
      <img
        src={flowers.main}
        className="flower-img main"
        alt={`${type} flower`}
      />
      <img
        src={flowers.sub}
        className="flower-img sub"
        alt={`${type} flower`}
      />
    </div>
  );
}
