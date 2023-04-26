import React from "react";

function ProjectCard() {
  return (
    <div className="col-12 col-sm-6 col-md-4 text-black">
      <div className="card m-3">
        <div className="card-body p-0">
          <div className="imageBox">
            <img
              src="https://via.placeholder.com/150"
              style={{
                maxHeight: "200px",
                width: "100%",
                objectFit: "cover",
              }}
              alt="no content"
            />
            <div className="overlay">
              <button className="btn btn-light">
                <i className="bi bi-link-45deg"></i>
              </button>
            </div>
          </div>
          <div className="p-3">
            <h3>Title</h3>
            <p>Description</p>
            <div style={{ textAlign: "center" }}>
              <button className="btn m-1 btn-dark">
                <i className="bi bi-github"></i> Github
              </button>
              <button className="btn m-1 btn-danger">
                <i className="bi bi-youtube"></i> Youtube
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
