import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

/**
 * @returns the Home Page
 */
const Home = () => {
  return (
    <>
      <Link to="/add-employee" className="main-link">
        Add Employee
      </Link>
      <Link to="/employee-list" className="main-link">
        Employee List
      </Link>
    </>
  );
};

export default Home;
