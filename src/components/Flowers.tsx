import Product from "./Product";

export default function Flowers() {
  const flowerTypes = [
    {
      main: "./B Simple.jpg",
      sub: "./B Shot.jpg",
      type: "blue",
      name: "Azure",
    },
    {
      main: "./P Simple.jpg",
      sub: "./Tara 2.jpg",
      type: "pink",
      name: "Blossom",
    },
    {
      main: "./R Simple.jpg",
      sub: "./R Shot.jpg",
      type: "red",
      name: "Rouge",
    },
    {
      main: "./Multi Simple.jpg",
      sub: "./Multi Shot.jpg",
      type: "multi",
      name: "Aurora",
    },
    {
      main: "./Y Simple.jpg",
      sub: "./Y Shot.jpg",
      type: "yellow",
      name: "Radiance",
    },
    {
      main: "./W Simple.jpg",
      sub: "./W Shot.jpg",
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
