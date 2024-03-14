import PropTypes from "prop-types";
const Course = ({ course, handleAddCourse }) => {
  const { credit, description, id, name, photo, price } = course;
  return (
    <div className="bg-slate-300 rounded-lg p-4 ">
      <img className="justify-center" src={photo} alt="" />
      <h2>Name: {name}</h2>
      <p>{description}</p>
      <div className="flex gap-2">
        <div>
          <p>$ Price: {price}</p>
        </div>
        <div>
          <p>
            <i className="fa-solid fa-book-open"></i> Credit: {credit}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleAddCourse(course)}
        className="bg-purple-600 p-2 rounded-lg  w-full text-white"
      >
        Purses
      </button>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object,
  handleAddCourse: PropTypes.func,
};
export default Course;
