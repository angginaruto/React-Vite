import alien5 from "../assets/alien5.png"
import alien6 from "../assets/alien6.png"
import alien7 from "../assets/alien7.png"

function Service() {
  return (
    <div className="service-container">
      <h1>Service</h1>

      <div className="service-box-container">
        <div className="box-service">
          <img src={alien5} alt="Service 1" />
          <ul>
            <li>Data Analysis</li>
            <li>Data Science</li>
            <li>Data Engineer</li>
            <li>Machine Learning</li>
          </ul>
          <div className="lorem">Contact Me</div>
        </div>

        <div className="box-service">
          <img src={alien6} alt="Service 2" />
          <ul>
            <li>Full-Stack Web</li>
            <li>Front-End</li>
            <li>Back-End</li>
            <li>Web Dev</li>
          </ul>
          <div className="lorem">Contact Me</div>
        </div>

        <div className="box-service">
          <img src={alien7} alt="Service 3" />
          <ul>
            <li>Cloud Engineer</li>
            <li>AI Engineer</li>
            <li>Dev Ops Engineer</li>
            <li>MLOps</li>
          </ul>
          <div className="lorem">Contact Me</div>
        </div>
      </div>
    </div>
  )
}

export default Service
