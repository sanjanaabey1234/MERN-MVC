import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx"; // Import XLSX for Excel export
import "./statistics.css";
import Nav from "../Nav/Nav";

function Statistics() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else if (data && Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          console.error("Unexpected response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [["ID", "Name", "Email", "Age"]],
      body: users.map((user) => [user._id, user.name, user.gmail, user.age]),
    });
    doc.save("user_statistics.pdf");
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      users.map((user) => ({
        ID: user._id,
        Name: user.name,
        Email: user.gmail,
        Age: user.age,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "user_statistics.xlsx");
  };

  return (
    <div>
      <Nav />
      <header className="statistics-header">
        <h1>User Statistics</h1>
        <button onClick={downloadPDF} className="download-button">
          Download PDF
        </button>
        <button onClick={downloadExcel} className="download-button">
          Download Excel
        </button>
      </header>
      <section className="statistics-content">
        <table className="statistics-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.gmail}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Statistics;
