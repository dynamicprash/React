
import PropTypes from "prop-types"
function Student({name = "Guest",age = 0,isStudent = false}){//to set the default value
    return(
        <div className="student">
            <p className="studentData">Name: {name}</p>
            <p  className="studentData">Age: {age}</p>
            <p  className="studentData"> Student: {isStudent ? "Yes" : "No"}</p>
            
        </div>
    );
}
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
export default Student