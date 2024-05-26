import React, { useEffect, useState } from "react";
import axios from "axios";
import Tugas10 from "../tugas10/tugas10";

const Tugas11 = () => {
  const [input, setInput] = useState({
    name: "",
    mataKuliah: "",
    score: ""
  });

  const [fetchStatus, setFetchStatus] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (fetchStatus) {
      axios.get("http://localhost:1337/api/apis")
        .then((res) => {
          setData(res.data.data); // Adjusted for typical Strapi response structure
          setFetchStatus(false); // Ensure we set fetchStatus to false after fetching
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [fetchStatus]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, mataKuliah, score } = input;

    axios.post('http://localhost:1337/api/apis', {
      data: { name, mataKuliah, score } // Adjusted for typical Strapi payload structure
    })
      .then((res) => {
        console.log('Data submitted:', res);
        setFetchStatus(true); // Trigger data fetch after submission
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });

    setInput({
      name: "",
      mataKuliah: "",
      score: ""
    });
  };

  return (
    <>

    <Tugas10/>
      <form onSubmit={handleSubmit} className="max-w-full mx-auto container-table">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name:
          </label>
          <input
            onChange={handleInput}
            value={input.name}
            name="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Mata Kuliah:
          </label>
          <input
            value={input.mataKuliah}
            onChange={handleInput}
            name="mataKuliah"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nilai:
          </label>
          <input
            value={input.score}
            onChange={handleInput}
            name="score"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Tugas11;
