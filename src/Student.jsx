// props = read only properties that are shared between components.
//         A parent component can send data to a child component
//         <component key = value />

function Student(props){

    return(

        <div>
            <p>
                Name: {props.name}
            </p>
        </div>
    );
}

export default Student