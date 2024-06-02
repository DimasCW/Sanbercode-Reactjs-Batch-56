import axios from "axios";
import { useState, useEffect } from "react";
import '../Vacancy/vacancy.css'

const Vacancy = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
            setData(res.data.data); // Set the nested data to the state
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <>
            <h1 id="vacancy" className="titleVacancy fontStyle">Job Vacancy</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                
                {data !== null && data.map((res) => (
                    <div key={res.id} className="card-vacancy">
                        <div className="img-vacancy">
                            <img src={res.company_image_url}/>
                        </div>
                        <div className="content-vacancy">
                            <h3 className="text-white text-bold">{res.title}</h3>
                            <p className="text-small text-white">
                            🏢{res.company_name}</p>
                            <p className="text-small text-white">⌚{res.job_tenure}</p>
                            <p className="mb text-small text-white">📍{res.company_city}</p>
                            <button
                                type="button"
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                Detail
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Vacancy;
