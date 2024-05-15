import React from "react";

const Tugas7 = (props) => {
    return(
        <>
            <div className="App">
                <div className='container'>
                    <h1>Data diri peserta kelas Reactjs</h1>
                    <hr></hr>
                    <ul>
                        <li>Nama Lengkap : {props.name}</li>
                        <li>Email : {props.email}</li>
                        <li>Batch Pelatihan : {props.batch}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default Tugas7;

