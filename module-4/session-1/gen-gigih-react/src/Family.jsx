export default function Family({ id, name, gender }) {
  return (
    <div className="card" key={id}>
      <h1>{name}</h1>
      <h2>{gender}</h2>
    </div>
  );
}
