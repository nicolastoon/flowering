import Product from "./Product";

export default function Flowers() {
  const flowerTypes = [
    {
      main: "./flowering/B Simple.jpg",
      sub: "./flowering/B Shot.jpg",
      type: "blue",
      name: "Azure",
    },
    {
      main: "./flowering/P Simple.jpg",
      sub: "./flowering/Tara 2.jpg",
      type: "pink",
      name: "Blossom",
    },
    {
      main: "./flowering/R Simple.jpg",
      sub: "./flowering/R Shot.jpg",
      type: "red",
      name: "Rouge",
    },
    {
      main: "./flowering/Multi Simple.jpg",
      sub: "./flowering/Multi Shot.jpg",
      type: "multi",
      name: "Aurora",
    },
    {
      main: "./flowering/Y Simple.jpg",
      sub: "./flowering/Y Shot.jpg",
      type: "yellow",
      name: "Radiance",
    },
    {
      main: "./flowering/W Simple.jpg",
      sub: "./flowering/W Shot.jpg",
      type: "white",
      name: "Silk",
    },
  ];

  function getImagePath() {
    return flowerTypes.map((flower) => (
      <Product key={flower.type} flower={flower} />
    ));
  }

  return <div className="flower-collection">{getImagePath()}</div>;
}
