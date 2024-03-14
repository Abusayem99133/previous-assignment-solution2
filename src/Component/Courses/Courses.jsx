import { useState } from "react";
import Course from "../Course/Course";
import { useEffect } from "react";
import PropTypes from "prop-types";
const Courses = ({ handleAddCourse }) => {
  const [Courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 mt-5  m-10 ">
      {Courses.map((course, idx) => (
        <Course
          key={idx}
          course={course}
          handleAddCourse={handleAddCourse}
        ></Course>
      ))}
    </div>
  );
};
Courses.propType = {
  handleAddCourse: PropTypes.func,
};
export default Courses;
