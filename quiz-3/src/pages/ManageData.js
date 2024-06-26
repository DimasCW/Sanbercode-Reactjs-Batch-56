import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageData = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    id: null,
    name: "",
    description: "",
    category: "",
    size: "",
    price: "",
    rating: "",
    image_url: "",
    is_android_app: "",
    is_ios_app: "",
    release_year: ""
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (fetchStatus) {
      axios.get("http://localhost:1337/api/mobile-apps")
        .then((res) => {
          setData(res.data.data);
          setFetchStatus(false);
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
    const {
      id,
      name,
      description,
      category,
      size,
      price,
      rating,
      image_url,
      is_android_app,
      is_ios_app,
      release_year
    } = input;

    if (isEdit) {
      // Update existing data
      axios.put(`http://localhost:1337/api/mobile-apps/${id}`, {
        data: {
          name,
          description,
          category,
          size: parseInt(size),
          price: parseInt(price),
          rating: parseInt(rating),
          image_url,
          is_android_app: parseInt(is_android_app),
          is_ios_app: parseInt(is_ios_app),
          release_year: parseInt(release_year)
        }
      })
        .then((res) => {
          console.log('Data updated:', res);
          setFetchStatus(true);
        })
        .catch((error) => {
          console.error('Error updating data:', error);
        });
    } else {
      // Add new data
      axios.post('http://localhost:1337/api/mobile-apps', {
        data: {
          name,
          description,
          category,
          size: parseInt(size),
          price: parseInt(price),
          rating: parseInt(rating),
          image_url,
          is_android_app: parseInt(is_android_app),
          is_ios_app: parseInt(is_ios_app),
          release_year: parseInt(release_year)
        }
      })
        .then((res) => {
          console.log('Data submitted:', res);
          setFetchStatus(true);
        })
        .catch((error) => {
          console.error('Error posting data:', error);
        });
    }

    setIsEdit(false);
    setInput({
      id: null,
      name: "",
      description: "",
      category: "",
      size: "",
      price: "",
      rating: "",
      image_url: "",
      is_android_app: "",
      is_ios_app: "",
      release_year: ""
    });
  };

  const handleEdit = (item) => {
    setInput({
      id: item.id,
      name: item.attributes.name,
      description: item.attributes.description,
      category: item.attributes.category,
      size: item.attributes.size,
      price: item.attributes.price,
      rating: item.attributes.rating,
      image_url: item.attributes.image_url,
      is_android_app: item.attributes.is_android_app,
      is_ios_app: item.attributes.is_ios_app,
      release_year: item.attributes.release_year || "" // Handle if release_year is not present
    });
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:1337/api/mobile-apps/${id}`)
      .then((res) => {
        console.log('Data deleted:', res);
        setFetchStatus(true);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Manage Data</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            value={input.name}
            onChange={handleInput}
            placeholder="Name"
            className="p-2 border rounded"
            required
          />
          <input
            name="description"
            value={input.description}
            onChange={handleInput}
            placeholder="Description"
            className="p-2 border rounded"
            required
          />
          <input
            name="category"
            value={input.category}
            onChange={handleInput}
            placeholder="Category"
            className="p-2 border rounded"
            required
          />
          <input
            name="size"
            value={input.size}
            onChange={handleInput}
            placeholder="Size (MB)"
            className="p-2 border rounded"
            required
          />
          <input
            name="price"
            value={input.price}
            onChange={handleInput}
            placeholder="Price"
            className="p-2 border rounded"
            required
          />
          <input
            name="rating"
            value={input.rating}
            onChange={handleInput}
            placeholder="Rating (0-5)"
            className="p-2 border rounded"
            required
          />
          <input
            name="image_url"
            value={input.image_url}
            onChange={handleInput}
            placeholder="Image URL"
            className="p-2 border rounded"
            required
          />
          <input
            name="is_android_app"
            value={input.is_android_app}
            onChange={handleInput}
            placeholder="Is Android App (0 or 1)"
            className="p-2 border rounded"
            required
          />
          <input
            name="is_ios_app"
            value={input.is_ios_app}
            onChange={handleInput}
            placeholder="Is iOS App (0 or 1)"
            className="p-2 border rounded"
            required
          />
          <input
            name="release_year"
            value={input.release_year}
            onChange={handleInput}
            placeholder="Release Year"
            className="p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {isEdit ? "Update" : "Submit"}
        </button>
      </form>

      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs bg-purple-700 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Size</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Rating</th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Android</th>
              <th scope="col" className="px-6 py-3">iOS</th>
              <th scope="col" className="px-6 py-3">Release Year</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="11" className="px-6 py-4 text-center">No data available</td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.attributes.name}</td>
                  <td className="px-6 py-4">{item.attributes.description}</td>
                  <td className="px-6 py-4">{item.attributes.category}</td>
                  <td className="px-6 py-4">{item.attributes.size} MB</td>
                  <td className="px-6 py-4">{item.attributes.price === 0 ? "FREE" : `${item.attributes.price}`}</td>
                  <td className="px-6 py-4">{item.attributes.rating}</td>
                  <td className="px-6 py-4"><img src={item.attributes.image_url} alt={item.attributes.name} className="w-20 h-20 object-cover"/></td>
                  <td className="px-6 py-4">{item.attributes.is_android_app ? "Yes" : "No"}</td>
                  <td className="px-6 py-4">{item.attributes.is_ios_app ? "Yes" : "No"}</td>
                  <td className="px-6 py-4">{item.attributes.release_year || "-"}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEdit(item)}
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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
  );
};

export default ManageData;

