const projects = [
  { img: "alien2.png", title: "Analisis Data New York City" },
  { img: "alien3.png", title: "Project 2" },
  { img: "alien4.png", title: "Project 3" },
];

function Project() {
  return (
    <div className="project-container">
      <h1>My Project</h1>

      <div className="project">
        {projects.map((p, i) => (
          <div className="box-project" key={i}>
            <img src={`/src/assets/${p.img}`} />
            <h3>{p.title}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button>Link</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
