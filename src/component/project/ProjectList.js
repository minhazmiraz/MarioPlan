import React, { Component } from "react";
import ProjectSummery from "./ProjectSummery";

class ProjectList extends Component {
  render() {
    return (
      <div className="project-list section">
        <ProjectSummery />
        <ProjectSummery />
        <ProjectSummery />
        <ProjectSummery />
        <ProjectSummery />
      </div>
    );
  }
}

export default ProjectList;
