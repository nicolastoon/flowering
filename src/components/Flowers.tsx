import Product from "./Product";

export default function Flowers() {
  const bluePaths = {
    main: "./B Simple.jpg",
    sub: "./B Shot.jpg",
  };
  const pinkPaths = {
    main: "./P Simple.jpg",
    sub: "./Tara 2.jpg",
  };
  const redPaths = {
    main: "./R Simple.jpg",
    sub: "./R Shot.jpg",
  };
  const whitePaths = {
    main: "./W Simple.jpg",
    sub: "./W Shot.jpg",
  };
  const yellowPaths = {
    main: "./Y Simple.jpg",
    sub: "./Y Shot.jpg",
  };
  const multiPaths = {
    main: "./Multi Simple.jpg",
    sub: "./Multi Shot.jpg",
  };

  function getImagePath() {
    const flowerTypes = {
      multi: multiPaths,
      blue: bluePaths,
      pink: pinkPaths,
      red: redPaths,
      white: whitePaths,
      yellow: yellowPaths,
    };
    return Object.entries(flowerTypes).map(([type, flowers]) => (
      <Product key={type} flowers={flowers} type={type} />
    ));
  }

  return <div className="flower-collection">{getImagePath()}</div>;
}
