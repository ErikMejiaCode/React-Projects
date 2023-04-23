import React from "react";
import { useDispatch } from "react-redux";
import { resetReduxOPedia } from "../../redux/store";

function ResetApp() {
  const dispatch = useDispatch();

  const resetCounterAndDestination = () => {
    dispatch(resetReduxOPedia());
  };

  return (
    <div className="text-center">
      <button
        onClick={() => dispatch(resetCounterAndDestination)}
        className="btn btn-warning"
      >
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
