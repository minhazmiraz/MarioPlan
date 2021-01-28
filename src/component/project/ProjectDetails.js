const ProjectDetails = (props) => {
  const projectId = props.match.params.project_id;
  return (
    <div className="project-list container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {projectId}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quis
            est libero dolores officiis deleniti a quia, aliquid inventore, eum
            totam commodi. Ullam vero expedita reiciendis delectus veniam sunt
            dignissimos.
          </p>
        </div>
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>Posted by Minhaz</div>
        <div>28th Jan, 12am</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
