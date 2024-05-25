import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Tugas11 = () => {

    const [input, setInput] = useState({
        name : ""
    })

    const handleInput = (haha) => {
        let name = haha.target.name
        let value = haha.target.value

        if(name == name){
            setInput({...input, name : value})
        }
    }
    return(
        <>
            <p>Belajar React js</p>
            <input onChange={handleInput} value = {input.name} type="text" name="name"/>
        </>
    )
}

export default Tugas11