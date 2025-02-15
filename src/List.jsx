import PropTypes from 'prop-types'

function List(props){

    // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];


    // fruits.sort();
     
    // This will create a array of fruits element inside li tag like <li> apple </li>
    // const listItems = fruits.map( fruit => <li>{fruit}</li> );


    // const vegetables = [ {id: 1, name: "Carrot" , calories: 95 },
    //                      {id: 2, name: "Cabbage", calories: 66 }, 
    //                      {id: 3, name: "Beans"  , calories: 98 }, 
    //                      {id: 4, name: "Potato" , calories: 78 }, 
    //                      {id: 5, name: "Peas"   , calories: 12 }, 
    //                      {id: 6, name: "Spinach", calories: 10 }
                        
    //                     ];

    // vegetables.sort((a,b) => (a.name.localeCompare(b.name))); // alphabetical order sorting
    // vegetables.sort((a,b) => (b.name.localeCompare(a.name))); // reverse alphabetical order sorting

    // vegetables.sort((a,b) => a.calories - b.calories); // Numeric order sorting
    // vegetables.sort((a,b) => b.calories - a.calories); // Reverse Numeric order sorting

    // filter object on certain criteria
    // const lowCalVegies = vegetables.filter(vegetable => vegetable.calories < 80); // Low calories vegeies < 80
    // const highCalVegies = vegetables.filter(vegetable => vegetable.calories > 80); // High calories vegies > 80



    // const vegetableList = highCalVegies.map( highCalVegie => <li key={highCalVegie.id} >
    //                                                        {highCalVegie.name}: &nbsp;
    //                                                     <b>{highCalVegie.calories}</b>
    //                                                     </li> );



    // props work

    const itemList = props.items;
    const category = props.category;

    const vegetableList = itemList.map( item => <li key={item.id} >
                                                        {item.name}: &nbsp;
                                                        <b>{item.calories}</b>
                                                </li> );

    return(

        <>
            {/* <ol>{listItems}</ol> */}
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{vegetableList}</ol>
        </>
    );
}
List.propTypes = {

    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number
                                            })),
    category: PropTypes.string
}

List.defaultProps = {

    category: "Category",
    items: []
}

export default List