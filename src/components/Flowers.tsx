import Product from "./Product";

export default function Flowers() {
  const bluePaths = ["./images/B Shot.jpg", "./images/B Simple.jpg"];
  const pinkPaths = ["./images/P Shot.jpg", "./images/P Simple.jpg", "./images/Tara 2.jpg", "./images/Tara 4.jpg"];
  const redPaths = ["./images/R Shot.jpg", "./images/R Simple.jpg"];
  const whitePaths = ["./images/W Shot.jpg", "./images/W Simple.jpg"];
  const yellowPaths = ["./images/Y shot.jpg", "./images/Y Simple.jpg"];
  const multiPaths = ["./images/Multi Shot.jpg", "./images/Multi Simple.jpg"];

  function getImagePath() {
    const flowerTypes = {'blue': bluePaths, 'pink': pinkPaths, 'red': redPaths, 'white': whitePaths, 'yellow': yellowPaths, 'multi': multiPaths};
    return Object.entries(flowerTypes).map(([type, flowers]) => (
      <Product key={type} flowers={flowers} type={type}/>
    ));
  }

  return <div className="flower-collection">{getImagePath()}</div>;
}
