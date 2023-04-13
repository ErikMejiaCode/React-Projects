import React from "react";
import { getRandomUser } from "../Utilities/api";
import Instructor from "./Instructor";

class CyclOPediaClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("cyclopediastate")) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: "",
    };
  }

  componentDidMount = async () => {
    console.log("Component did Mount");
    if (JSON.parse(localStorage.getItem("cyclopediastate"))) {
      //this.setState(JSON.parse(localStorage.getItem("cyclopediastate")));
    } else {
      const response = await getRandomUser();
      console.log(response);
      this.setState((prevState) => {
        return {
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    }
  };

  componentDidUpdate() {
    console.log("Component did Update");
    localStorage.setItem("cyclopediastate", JSON.stringify(this.state));
  }

  componentWillUnmount() {
    console.log("Component will Mount");
  }

  handleAddStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  handleRemoveAllStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: 0,
      };
    });
  };

  handletoggleInstructor = () => {
    this.setState((prevState) => {
      return {
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  render() {
    console.log("Render Component");
    return (
      <div>
        <div className="p-3">
          <span className="h4 text-success">Instructor </span>
          <i
            className={`bi ${
              this.state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
            }  btn btn-success btn-sm`}
            onClick={this.handletoggleInstructor}
          ></i>
          {!this.state.hideInstructor ? (
            <Instructor instructor={this.state.instructor} />
          ) : null}
        </div>

        <div className="p-3">
          <span className="h4 text-success">Feedback</span>
          <br />
          <input
            type="text"
            value={this.state.inputName}
            placeholder="Name.."
            onChange={(e) => {
              this.setState({ inputName: e.target.value });
            }}
          />{" "}
          Value: {this.state.inputName}
          <br />
          <textarea
            value={this.state.inputFeedback}
            placeholder="Feedback..."
            onChange={(e) => {
              this.setState({ inputFeedback: e.target.value });
            }}
          ></textarea>{" "}
          Value: {this.state.inputFeedback}
        </div>
        <div className="p-3">
          <span className="h4 text-success">Student</span>
          <br />
          <div>Student Count: {this.state.studentCount}</div>
          <button
            className="btn btn-success btn-sm"
            onClick={this.handleAddStudent}
          >
            Add Student
          </button>
          &nbsp;
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleRemoveAllStudent}
          >
            Remove All Student
          </button>
        </div>
      </div>
    );
  }
}

export default CyclOPediaClassPage;
