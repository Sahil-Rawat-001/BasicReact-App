import Greet from './Greet'


function App() {

  return(

    <>
        <Greet isLoggedIn="true" username="Sahil"/>
        <Greet isLoggedIn={false} username="Alex"/>
        <Greet isLoggedIn={false} username={4}/>
        <Greet isLoggedIn={true} />
    </>
  );
}

export default App
