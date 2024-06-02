import axios from "axios";
import { useState, useEffect } from "react";
import '../Vacancy/vacancy.css';

const Vacancy = () => {
    const [data, setData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
            setData(res.data.data); // Set the nested data to the state
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    const openModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    return (
        <>
            <h1 id="vacancy" className="titleVacancy fontStyle">Job Vacancy</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {data !== null && data.map((job) => (
                    <div key={job.id} className="card-vacancy">
                        <div className="img-vacancy">
                            <img src={job.company_image_url} alt={`${job.company_name} logo`} />
                        </div>
                        <div className="content-vacancy">
                            <h3 className="text-white text-bold">{job.title}</h3>
                            <p className="text-small text-white">🏢{job.company_name}</p>
                            <p className="text-small text-white">⌚{job.job_tenure}</p>
                            <p className="mb text-small text-white">📍{job.company_city}</p>
                            <button
                                type="button"
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                onClick={() => openModal(job)}
                            >
                                Detail
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedJob && (
                <div
                    id="static-modal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {selectedJob.title}
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={closeModal}
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-4 md:p-5 space-y-4">
                                <div className="img-vacancy">
                                    <img src={selectedJob.company_image_url} alt={`${selectedJob.company_name} logo`} />
                                </div>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    <strong>Job Description:</strong> {selectedJob.job_description}
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    <strong>Job Qualification:</strong> {selectedJob.job_qualification}
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    <strong>Type:</strong> {selectedJob.job_type}
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    <strong>Tenure:</strong> {selectedJob.job_tenure}
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    <strong>City:</strong> {selectedJob.company_city}
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    <strong>Salary:</strong> {selectedJob.salary_min} - {selectedJob.salary_max}
                                </p>
                            </div>
                            {/* Modal footer */}
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={closeModal}
                                >
                                    Lamar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Vacancy;
