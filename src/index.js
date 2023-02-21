import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EmployeeList from "./pages/EmployeeList";
import { Provider } from "react-redux";
import { store } from "./service/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/add-employee"} element={<AddEmployee />} />
            <Route path={"/employee-list"} element={<EmployeeList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
