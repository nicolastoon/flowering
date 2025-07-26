interface ProductProps {
  flowers: { main: string; sub: string };
  type: string;
}

export default function Product({ flowers, type }: ProductProps) {
  return (
    <div className="flower-img-wrapper">
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
