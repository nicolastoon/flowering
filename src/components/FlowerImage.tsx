interface Flower {
  src: string;
  label: string;
}

export default function FlowerImage({ src, label }: Flower) {
  return (
    <div className="flower-container">
      <span className="flower-label">{label}</span>
      <img className="flower-img" src={src} />
    </div>
  );
}
