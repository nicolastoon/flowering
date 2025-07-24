interface ProductProps {
  flowers: string[];
  type: string;
};

export default function Product(props: ProductProps) {
  return (
    <div key={props.type} className="flower-grouped">
      <h2>{props.type}</h2>
      {props.flowers.map((path: string) => (
        <div key={path} className="individual-flower">
          <img src={path} alt={path} className="flower-img" />
          <small>{path}</small>
        </div>
      ))}
    </div>
  );
}
