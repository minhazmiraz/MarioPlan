import React, { Component } from "react";
import ProjectSummery from "./ProjectSummery";

class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="project-list section">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectSummery project={project} key={project.id} />
          ))}
        {!projects.length && (
          <div className="card z-depth-0 project-summery">
            <div className="card-content grey-text text-darken-3">
              No Project added yet!!!
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectList;
