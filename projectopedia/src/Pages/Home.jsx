import React from "react";
import projectlist from "../Store/data";
import ProjectCard from "../Components/Page/ProjectCard";

function Home() {
  return (
    <div className="container p-5 text-black">
      <div className="h3 text-info">Project List</div>
      <div className="row">
        {projectlist.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Home;
