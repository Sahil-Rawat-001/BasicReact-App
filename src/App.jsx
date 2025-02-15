import List from "./List";


function App() {
 
  const vegetables = [  {id: 1, name: "Carrot" , calories: 95 },
                        {id: 2, name: "Cabbage", calories: 66 }, 
                        {id: 3, name: "Beans"  , calories: 98 }, 
                        {id: 4, name: "Potato" , calories: 78 }, 
                        {id: 5, name: "Peas"   , calories: 12 }, 
                        {id: 6, name: "Spinach", calories: 10 }
                    ];


  const fruits = [  {id: 6, name: "Mango" , calories: 100 },
                    {id: 7, name: "Apple", calories: 68 }, 
                    {id: 8, name: "Banana"  , calories: 99 }, 
                    {id: 9, name: "Kiwi" , calories: 58 }, 
                    {id: 10, name: "Pineapple", calories: 120 }, 
                    {id: 11, name: "Papaya", calories: 77 }
                 ];

                 

  return(

    <>
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/> }
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {fruits.length > 0 && <List items={fruits} />}
    </>
  );
}

export default App
