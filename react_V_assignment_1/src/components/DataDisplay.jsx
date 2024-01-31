export function DataDisplay({ item }) {
  return (
    <div
      style={{
        border: "2px solid lightgray",
        margin: "auto",
        marginTop: "20px",
        padding: "20px",
        textAlign: "center",
        width: "50%",
      }}
    >
      <h2> ID: {item.id}</h2>
      <p>Title: {item.title}</p>
      <p>UserId: {item.userId}</p>
    </div>
  );
}
