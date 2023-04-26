import React from "react";
import projectlist from "../Store/data";

function Home() {
  return (
    <div className="container p-5 text-white">
      <div className="h3 text-info">Project List</div>
      <div className="row">
        {projectlist.map((project, index) => {
          return <div key={index}>{project.title}</div>;
        })}
      </div>
    </div>
  );
}

export default Home;
