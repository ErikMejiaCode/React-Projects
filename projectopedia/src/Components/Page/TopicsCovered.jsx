import React from "react";
import projectlist from "../../Store/data";

function TopicsCovered() {
  return (
    <div className="container p-5 text-white">
      <div className="h3 text-info">Topics Covered</div>
      <hr />
      <div className="row">
        {projectlist.map((project, index) => (
          <div key={index} className="border rounded m-3 p-2">
            <div className="h5 text-info">{project.title}</div>
            <p>{project.description}</p>
            <ul>
              {project.topicsCovered.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicsCovered;
