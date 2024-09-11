import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Nav from "../Nav/Nav";
import "../UpdateUser/updateuser.css";

function UpdateUser() {
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  }); // Initialized with empty strings
  const navigate = useNavigate(); // Renamed for consistency
  const { id } = useParams(); // Destructured id from useParams

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/users/${id}`) // Fixed template literal
        .then((res) => res.data)
        .then((data) => setInputs(data.user))
        .catch((error) => console.error("Error fetching user:", error)); // Added error handling
    };
    fetchHandler();
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => navigate("/userdetails"))
      .catch((error) => {
        console.error("Error updating user:", error); // Added error handling
      });
  };

  const sendRequest = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/users/${id}`, {
        name: inputs.name,
        gmail: inputs.gmail,
        age: inputs.age,
        address: inputs.address,
      });
      return response.data;
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <div>
      <Nav />
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          textAlign: "center",
          margin: "20px 0",
          padding: "10px",
          background: "linear-gradient(135deg, #3498db, #2ecc71)",
          color: "transparent",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          letterSpacing: "1px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Update User
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gmail:</label>
          <input
            type="email"
            name="gmail"
            value={inputs.gmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={inputs.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={inputs.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateUser;
