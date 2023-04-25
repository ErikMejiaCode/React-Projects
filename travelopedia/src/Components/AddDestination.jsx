import React from "react";
import { useState } from "react";

function AddDestination() {
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add Destination

    setNewCity("");
    setNewCountry("");
  };

  return (
    <div className="p-4 border">
      <form onSubmit={handleSubmit}>
        <div className="row col-8 offset-2">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter City..."
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
            />
          </div>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country..."
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
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
