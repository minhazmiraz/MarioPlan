const ProjectSummery = (props) => {
  const { project } = props;
  return (
    <div className="card z-depth-0 project-summery">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Minhaz</p>
        <p className="grey-text">28th Jan, 12am</p>
      </div>
    </div>
  );
};

export default ProjectSummery;
