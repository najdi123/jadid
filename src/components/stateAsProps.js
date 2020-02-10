import React,{useState} from 'react';
import './App.css';

function App() {

    const [ isDisplayed, setIsDiaplayed ] = useState(true);

    const toggleShowHide = () => {
        setIsDiaplayed(!isDisplayed);
    };

    const helloMessage = 'Welcome to React'

    return (
        <div className="">
            {/*{ isDisplayed ?  <HelloReact hello={helloMessage} /> : null}*/}
            <HelloReact hello={helloMessage} isDis={isDisplayed} />
            <button onClick={toggleShowHide} type="button" >
                Toggle to show/hide</button>
        </div>
    );
}
const HelloReact = ({ hello, isDis }) =>
    isDis ? <h1>{hello}</h1> : null ;


export default App;