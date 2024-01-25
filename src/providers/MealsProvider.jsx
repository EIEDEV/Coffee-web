import './App.css';
import React, { Component, useState, useRef } from 'react';

function App() {
    const inputRef=useRef(null);
    const resultRef= useRef(null);
    const [result, setResult] = useState(0);

    function plus(e){
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value))
    }
    function minus(e){
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value))
    }
    function times(e){
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value))
    }
    function devide(e){
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value))
    }
    function resetInput(e){
        e.preventDefault();
        inputRef.current.value=0
    }
    function resetResult(e){
        e.preventDefault();
        setResult((prevVal) => prevVal * 0)
    }

    return(
        <div className='App'>
            <div>
                <h1>Simplest Working Calculator</h1>
            </div>
            <form>
                <p ref={resultRef}>{result}</p>
                <input pattern='[0-9]' type='number' placeholder='type a num' ref={inputRef}/>
                <button onClick={plus}>Add</button>
                <button onClick={minus}>sub</button>
                <button onClick={times}>times</button>
                <button onClick={devide}>devide</button>
                <button onClick={resetInput}>reset input</button>
                <button onClick={resetResult}>reset result</button>
            </form>
        </div>
    )
}       

export default App;

    // <React.Fragment>
    //     <Link to="/">Homepage</Link>
    //     <Link to="./a">About Me</Link>
    //     <img src={logo512}></img>
    //      <Routes>
    //         <Route path='/'element={<Homepage />}/>
    //         <Route path='/a' element={<AboutMe />} />
    //     </Routes>
    //  </React.Fragment>
