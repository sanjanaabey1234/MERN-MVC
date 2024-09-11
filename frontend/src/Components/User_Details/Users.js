import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";

import "../User_Details/users.css";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const deleteHandler = async (id) => {
    await axios
      .delete(`http://localhost:5000/users/${id}`)
      .then((res) => res.data)
      .then(() => {
        // Re-fetch users after deletion to update the list
        fetchHandler().then((data) => setUsers(data.users));
      });
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
        User Details
      </h1>
      <div className="user-count">
        Total Users: <span className="count">{users.length}</span>
      </div>
      <div className="user-container">
        {users.length > 0 ? (
          users.map((user) => (
            <div className="user-card" key={user._id}>
              <p>
                <strong>Name: {user.name}</strong>
              </p>
              <p>
                <strong>Gmail: {user.gmail}</strong>
              </p>
              <p>
                <strong>Age: {user.age}</strong>
              </p>
              <p>
                <strong>Address: {user.address}</strong>
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <a
                  className="update-link"
                  href={`/userdetails/${user._id}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: "700",
                    padding: "14px 24px", // Adjusted padding for better balance
                    borderRadius: "12px",
                    transition:
                      "background 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                    border: "2px solid #4e54c8",
                    fontSize: "1.2rem",
                    background: "linear-gradient(135deg, #4e54c8, #6a60ff)",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                    width: "160px", // Optional: Increased width for better alignment
                    height: "50px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#4e54c8";
                    e.currentTarget.style.transform =
                      "translateY(-8px) scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#4e54c8";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 12px rgba(0, 0, 0, 0.2)";
                  }}
                >
                  Update
                </a>
                <button
                  className="delete-btn"
                  onClick={() => deleteHandler(user._id)}
                  style={{
                    background: "#ff4d4d",
                    color: "#ffffff",
                    border: "none",
                    padding: "14px 24px", // Adjusted padding for better balance
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition:
                      "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                    fontSize: "1.2rem",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "160px", // Optional: Increased width for better alignment
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#e03b3b";
                    e.currentTarget.style.transform =
                      "translateY(-8px) scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0, 0, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ff4d4d";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 12px rgba(0, 0, 0, 0.2)";
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default Users;
