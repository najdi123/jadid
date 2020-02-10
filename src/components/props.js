import React from 'react';
import '../App.css';

function App() {

    // const hello = 'Say Hello';

    return (
        <div className="App">
            <HelloReact hello={{ text: 'say Hello' }}/>
        </div>
    );
}

const HelloReact = ({hello}) => <h1>{hello.text}</h1>;
// const HelloReact = (props) =>{
//
//   return <h1>{props.hello}</h1>
// }

export default App;
