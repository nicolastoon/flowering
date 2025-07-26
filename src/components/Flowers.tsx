import Product from "./Product";

export default function Flowers() {
  const bluePaths = {"main": "./images/B Simple.jpg", "sub": "./images/B Shot.jpg"};
  const pinkPaths = {"main": "./images/P Simple.jpg", "sub": "./images/Tara 2.jpg"};
  const redPaths = {"main": "./images/R Simple.jpg", "sub": "./images/R Shot.jpg"};
  const whitePaths = {"main": "./images/W Simple.jpg", "sub": "./images/W Shot.jpg"};
  const yellowPaths = {"main": "./images/Y Simple.jpg", "sub": "./images/Y Shot.jpg"};
  const multiPaths = {"main": "./images/Multi Simple.jpg", "sub": "./images/Multi Shot.jpg"};

  function getImagePath() {
    const flowerTypes = {'multi': multiPaths, 'blue': bluePaths, 'pink': pinkPaths, 'red': redPaths, 'white': whitePaths, 'yellow': yellowPaths};
    return Object.entries(flowerTypes).map(([type, flowers]) => (
      <Product key={type} flowers={flowers} type={type}/>
    ));
  }

  return <div className="flower-collection">{getImagePath()}</div>;
}
