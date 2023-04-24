import React from "react";

function AddDestination() {
  return (
    <div className="p-4 border">
      <form action="">
        <div className="row col-8 offset-2">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter City..."
            />
          </div>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country..."
            />
          </div>
          <div className="col-2 p-1">
            <button className="form-control btn btn-success">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
