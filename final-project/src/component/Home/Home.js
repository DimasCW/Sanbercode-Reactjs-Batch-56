import React from "react";
import Navbar from "../Navbar/navbar";
import Jumbotron from "../Jumbotron/jumbotron";
import Footer from "../Footer/Footer";
import { useContext, useEffect } from "react";
import Vacancy from "../Vacancy/Vacancy"
import { GlobalContext } from "../../context/GlobalContext";


const Home = () => {
    const { data, fetchData } = useContext(GlobalContext);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return(
        <>
            <Navbar />
            <Jumbotron/>
            <Vacancy />
            <Footer />
        </>
    )
}

export default Home;