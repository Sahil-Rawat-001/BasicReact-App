// props = read only properties that are shared between components.
//         A parent component can send data to a child component
//         <component key = value />


/*
propTypes  =  a mechanism that ensures that the passed value is of the correct datatype.
              age: propTypes.number
*/

/*
DefaultProps  = default values for props in case they are not
                passed from the parent component
                name: "Guest"
*/


import PropTypes from 'prop-types';


 const Student = ({name,age,isStudent}) => {

    return(

        <div className="student">
            <p>Name: {name}</p>
            <p>Age : {age}</p>
            <p>Student : {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.PropTypes ={
    name: PropTypes.string,
    age:  PropTypes.number,
    isStudent: PropTypes.bool,
}


Student.defaultProps = {
    name: "Guest",
    age : 0,
    isStudent: false,
}

export default Student