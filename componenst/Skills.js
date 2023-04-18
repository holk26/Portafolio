
const Skills = ({name, progressbar }) => (
  
  <div className="py-3">
    <h5>{name}</h5>
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: progressbar+"%" }}
      ></div>
    </div>
  </div>
);

export default Skills;
