export default function Review() {
  const section = {
    padding: "40px 200px",
  };

  const title = {
    fontFamily: "sans-serif",
    color: "#9b5de0",
    textAlign: "center",
    marginBottom: "60px",
  };

  const container = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };

  const box = {
    backgroundColor: "#dfdfdf",
    height: "200px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    borderRadius: "30px",
  };

  return (
    <section style={section}>
      <h1 style={title}>Review</h1>
      <div style={container}>
        <div style={box}>
          <h2>Anggi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita
            beatae harum. Deleniti ad culpa necessitatibus esse repellendus eum.
            Neque eligendi deserunt quia praesentium a.
          </p>
          <p>⭐⭐⭐</p>
        </div>
        <div style={box}>
          <h2>Anggi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita
            beatae harum. Deleniti ad culpa necessitatibus esse repellendus eum.
            Neque eligendi deserunt quia praesentium a.
          </p>
          <p>⭐⭐⭐</p>
        </div>
        <div style={box}>
          <h2>Anggi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita
            beatae harum. Deleniti ad culpa necessitatibus esse repellendus eum.
            Neque eligendi deserunt quia praesentium a.
          </p>
          <p>⭐⭐⭐</p>
        </div>
      </div>
    </section>
  );
}
