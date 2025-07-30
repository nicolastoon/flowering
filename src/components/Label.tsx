interface LabelProps {
  name: string;
}

export default function Label({ name }: LabelProps) {
  return (
    <h3 className='flower-label'>{name}</h3>
  )
}