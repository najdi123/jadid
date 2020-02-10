import React,{useState} from 'react';
import './App.css';

function App() {

  const [ isDisplayed, setIsDiaplayed ] = useState(true);

  const toggleShowHide = () => {
    setIsDiaplayed(!isDisplayed);
  };

  const helloMessage = 'Welcome to React';

  return (
    <div className="">
      {/*{ isDisplayed ?  <HelloReact hello={helloMessage} /> : null}*/}
      <HelloReact hello={helloMessage} isDis={isDisplayed}/>
      <Button onClick={toggleShowHide}/>
    </div>
  );
}
https://ebrahimi-recycling.herokuapp.com/
const Button = ({ onClick }) => {

  return(
      <button onClick={onClick} >
        Toggle shwow/hide
      </button>
  );
}

const HelloReact = ({ hello, isDis }) =>
    isDis ? <h1>{hello}</h1> : null;

// const HelloReact = ({ hello, isDis }) =>
//     isDis ? <h1>{hello}</h1> : null ;


export default App;

