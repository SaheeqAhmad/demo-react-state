import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [isLit, setLit] = useState(true)
    let [age, setAge] = useState(25)
    // function updatelit() {
    //     console.log('Button Click');
    //     setLit(!isLit)
    //     // setAge(++age)
    // }
    // const updateAge = () => {
    //     console.log('Button Click');
    //     //setLit(!isLit)
    //     setAge(++age)
    // }
    //const state = useState(true)
    //console.log("State = ", state);
    return (
        <div className={`room ${isLit ? "lit" : "dark"}`} >
            {/* <div className={"room " + (isLit ? "lit" : "dark")}></div> ---Old Method*/}
            This paragraph is {isLit ? "lit" : "dark"}
            <br />
            Age is { age}
            <br />
            <button onClick={() => setLit(!isLit)}> Toggle Light</button>
            <br />
            <button onClick={() => {
                console.log('Button Click');
                setAge(++age)
            }}> Increase Age</button>
        </div >
    );
}

export default Room;
