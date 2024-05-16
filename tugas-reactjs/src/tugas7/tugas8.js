import React from "react";
import { useState } from "react";

const Tugas8 = () => {

    const [angka, setAngka] = useState(0)
    const [pesan, setPesan] = useState("");
    
    const handleAngka = () => {
       setAngka(angka + 1)

       if(angka >= 10){
        setPesan("State count sudah lebih dari 10!!")
       }
    };

    return(
        <>
            <div className="App">
                <div className='container'>
                    <p>{angka}</p>
                    <button onClick={handleAngka}>Tambah</button>
                    <p>{pesan}</p>
                </div>
            </div>
        </>
    )
}

export default Tugas8;