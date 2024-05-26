import React, { useEffect, useState } from "react";
import axios from "axios";

const Tugas10 = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 25,
    pageCount: 0,
    total: 0
  });

  const [input, setInput] = useState({
    no: "",
    name: "",
    mataKuliah: "",
    score: ""
  });

  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    if (fetchStatus) {
      axios
        .get("http://localhost:1337/api/apis")
        .then((res) => {
          setData(res.data.data);
          setPagination(res.data.meta.pagination);
          setFetchStatus(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [fetchStatus]);

  console.log(data);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(input);

    let { no, name, mataKuliah, score } = input;
    axios.post('http://localhost:1337/api/apis', { no, name, mataKuliah, score })
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });

    setInput({
      no: "",
      name: "",
      mataKuliah: "",
      score: ""
    });
  };

  const handleIndexScore = (score) => {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "E";
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:1337/api/apis/${id}`)
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <div className="App">
      <div className="container-table">
        <div className="relative overflow-x-auto shadow-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs bg-purple-700 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">NO</th>
                <th scope="col" className="px-6 py-3">NAMA</th>
                <th scope="col" className="px-6 py-3">MATA KULIAH</th>
                <th scope="col" className="px-6 py-3">NILAI</th>
                <th scope="col" className="px-6 py-3">INDEX NILAI</th>
                <th scope="col" className="px-6 py-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center">No data available</td>
                </tr>
              ) : (
                data.map((res) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={res.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{res.attributes.no}</th>
                    <td className="px-6 py-4">{res.attributes.name}</td>
                    <td className="px-6 py-4">{res.attributes.mataKuliah}</td>
                    <td className="px-6 py-4">{res.attributes.score}</td>
                    <td className="px-6 py-4">{handleIndexScore(res.attributes.score)}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(res.id)}
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tugas10;
