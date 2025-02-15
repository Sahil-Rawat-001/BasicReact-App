import List from "./List";


function App() {
 
  const vegetables = [ {id: 1, name: "Carrot" , calories: 95 },
  {id: 2, name: "Cabbage", calories: 66 }, 
  {id: 3, name: "Beans"  , calories: 98 }, 
  {id: 4, name: "Potato" , calories: 78 }, 
  {id: 5, name: "Peas"   , calories: 12 }, 
  {id: 6, name: "Spinach", calories: 10 }
 ];

  return(

    <>
      <List items={vegetables} category="vegetable"/>
    </>
  );
}

export default App
