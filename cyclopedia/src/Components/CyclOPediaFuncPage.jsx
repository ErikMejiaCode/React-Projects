import React, { useRef, useId } from "react";
import { useState, useEffect } from "react";
import { getRandomUser } from "../Utilities/api";
import Instructor from "./Instructor";

const CyclOPediaFuncPage = () => {
  const [state, setState] = useState(() => {
    return {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  });

  //State used to keep track of how many times a component has rendered
  //const [totalRender, setTotalRender] = useState(0)
  const totalRender = useRef(0);
  const prevStudentCount = useRef(0);
  const feedbackInputRef = useRef(null);

  //userId hook
  const id = useId();

  const [inputName, setInputName] = useState(() => {
    return "";
  });
  const [inputFeedback, setInputFeedback] = useState(() => {
    return "";
  });

  useEffect(() => {
    // console.log("This will be called on EVERY Render");
    // setTotalRender((prevState) => prevState+1)
    totalRender.current = totalRender.current + 1;
  }, [state.studentCount]);

  //Used to grab an instructor
  useEffect(() => {
    // console.log("This will be called on Initial/first Render/Mount");

    const getUser = async () => {
      const response = await getRandomUser();
      // console.log(response);
      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    };
    if (!state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);

  //Used to populate the students as the count increases
  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();
      // console.log(response);
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList,
            { name: response.data.first_name + " " + response.data.last_name },
          ],
        };
      });
    };
    if (prevStudentCount.current < state.studentCount) {
      getUser();
    } else if (prevStudentCount.current > state.studentCount) {
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [],
        };
      });
    }
  }, [state.studentCount]);

  useEffect(() => {
    prevStudentCount.current = state.studentCount;
    console.log("Render: " + totalRender.current);
  });

  // useEffect(() => {
  //   console.log("This will be called whenever value of hideInstructor changes");
  // }, [inputFeedback, inputName]);

  useEffect(() => {
    feedbackInputRef.current.focus();
    // console.log("This will be called on Initial/first Render/Mount");
    return () => {
      // console.log("This will be called on when component will be UNMOUNTED");
    };
  }, []);

  const handleAddStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  const handleRemoveAllStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };

  const handletoggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  return (
    <div>
      <div className="p-3">
        <span className="h4 text-success">Instructor </span>
        <i
          className={`bi ${
            state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
          }  btn btn-success btn-sm`}
          onClick={handletoggleInstructor}
        ></i>
        {!state.hideInstructor && state.instructor ? (
          <Instructor instructor={state.instructor} />
        ) : null}
      </div>

      <div className="p-3">Total Render: {totalRender.current}</div>

      <div className="p-3">
        <span className="h4 text-success">Feedback</span>
        <br />
        <input
          type="text"
          value={inputName}
          placeholder="Name.."
          onChange={(e) => {
            setInputName(e.target.value);
          }}
          // id="inputName"
          id={`${id} - inputName`}
        />{" "}
        <label htmlFor={`${id} - inputName`}>Name Value: {inputName}</label>
        <br />
        <textarea
          value={inputFeedback}
          ref={feedbackInputRef}
          placeholder="Feedback..."
          onChange={(e) => {
            setInputFeedback(e.target.value);
          }}
          id={`${id} - inputFeedback`}
        ></textarea>{" "}
        <label htmlFor={`${id} - inputFeedback`}>
          Feedback Value: {inputFeedback}
        </label>
      </div>
      <div className="p-3">
        <span className="h4 text-success">Student</span>
        <br />
        <div>Student Count: {state.studentCount}</div>
        <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
          Add Student
        </button>
        &nbsp;
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveAllStudent}
        >
          Remove All Student
        </button>
        {state.studentList.map((student, index) => {
          return (
            <div className="text-white" key={index}>
              {" "}
              - {student.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CyclOPediaFuncPage;
