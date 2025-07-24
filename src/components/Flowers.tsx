export default function Flowers() {
  const imageDirectory = "./images/";
  const imagePaths = [
    "All Flowers.jpg",
    "B Shot.jpg",
    "B Simple.jpg",
    "Multi Shot.jpg",
    "Multi Simple.jpg",
    "P Shot.jpg",
    "P Simple.jpg",
    "R Shot.jpg",
    "R Simple.jpg",
    "Tara 1.jpg",
    "Tara 2.jpg",
    "Tara 3.5.jpg",
    "Tara 3.jpg",
    "Tara 4.jpg",
    "W Shot.jpg",
    "W Simple.jpg",
    "Y shot.jpg",
    "Y Simple.jpg",
  ].map((image) => imageDirectory + image);

  function getImagePath() {
    return imagePaths.map((path) => (
      <img key={path} src={path} alt={path} className="flower-img" />
    ));
  }

  return <div className="flower-collection">{getImagePath()}</div>;
}
