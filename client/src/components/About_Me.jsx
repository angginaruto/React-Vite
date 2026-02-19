import alien from "../assets/alien_ungu_9.png";

function About_Me() {
  const containerStyle = {
    minHeight: "60vh",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  };

  const bingkaiStyle = {
    height: "300px",
    width: "300px",
    overflow: "hidden",
    borderRadius: "50%",
    border: "6px solid #7b5cff",
    boxShadow: "1px 4px 8px rgba(0, 0, 0, 0.41)",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const textStyle = {
    maxWidth: "700px",
    fontFamily: "sans-serif",
    textAlign: "center",
  };

  const headingStyle = {
    color: "#9b5de0",
    margin: "30px",
  };

  return (
    <div style={containerStyle}>
      <div style={bingkaiStyle}>
        <img src={alien} alt="Alien" style={imgStyle} />
      </div>

      <div style={textStyle}>
        <h1 style={headingStyle}>About Me</h1>
        <p>
          I am an ambitious student who thinks far ahead about my career, even
          from the early stages of college, because I don’t want to be just
          average. I take building real skills like coding and basic machine
          learning seriously, not just chasing grades but creating a genuine
          competitive edge for the job market. At the same time, I understand
          the importance of maintaining a strong GPA, so I try to balance
          academic performance with personal development. I have strong energy,
          a competitive mindset, and a constant drive to grow. If I stay
          consistent and keep my focus sharp, I know I have the potential to
          move faster and further than most people.
        </p>
      </div>
    </div>
  );
}

export default About_Me;
