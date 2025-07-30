import Label from "./Label";

interface ProductProps {
  flower: { main: string; sub: string; type: string; name: string };
}

function expandImage(imgId: string) {
  console.log("Expanding image");
  const img = document.getElementById(imgId) as HTMLDivElement;
  img.style.width = "40%";
}

function shrinkOthers(imgId: string) {
  const collection = document.querySelectorAll(".flower-img-wrapper");
  console.log("Shrinking other images");
  collection.forEach((i) => {
    if (i.id !== imgId) {
      (i as HTMLDivElement).style.width = "15%";
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

export default function Product({ flower }: ProductProps) {
  return (
    <div
      className="flower-img-wrapper"
      onMouseOver={() => {
        expandImage(`flower-${flower.type}`);
        shrinkOthers(`flower-${flower.type}`);
      }}
      onMouseOut={() => {
        resetImages();
      }}
      id={`flower-${flower.type}`}
    >
      <img
        src={flower.main}
        className="flower-img main"
        alt={`${flower.type} flower`}
      />
      <img
        src={flower.sub}
        className="flower-img sub"
        alt={`${flower.type} flower`}
      />
      <Label key={flower.name} name={flower.name} />
    </div>
  );
}
