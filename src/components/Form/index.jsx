import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../../service/employeeSlice.js";
import Modal from "../Modal/index.jsx";
import Select from "../Select";
import "./form.css";

let first = "";
let last = "";

/**
 * @component
 * @returns a form to add a new user
 */

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [usState, setUsState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setDisplayModal(false);
  };
  const onLastNameChange = (e) => setLastName(e.target.value);
  const onStartDateChange = (e) => setStartDate(e.target.value);
  const onDepartmentChange = (e) => setDepartment(e.target.value);
  const onBirthDateChange = (e) => setBirthDate(e.target.value);
  const onStreetChange = (e) => setStreet(e.target.value);
  const onCityChange = (e) => setCity(e.target.value);
  const onUsStateChange = (e) => setUsState(e.target.value);
  const onZipCodeChange = (e) => setZipCode(e.target.value);

  const dispatch = useDispatch();

  const saveEmployee = () => {
    if (
      firstName.length < 2 ||
      lastName.length < 2 ||
      department.length < 2 ||
      street.length < 2 ||
      city.length < 2 ||
      usState.length < 2 ||
      birthDate === "" ||
      startDate === "" ||
      zipCode === ""
    ) {
      alert("Please fill all the fields with 2 character minimum.");
      return false;
    }

    dispatch(
      addUser({
        firstName: firstName,
        lastName: lastName,
        startDate: startDate,
        department: department,
        birthDate: birthDate,
        street: street,
        city: city,
        usState: usState,
        zipCode: zipCode,
      })
    );

    // Saving names for modal display
    first = firstName;
    last = lastName;
    setDisplayModal(true);

    // Data Reset
    setFirstName("");
    setLastName("");
    setStartDate("");
    setDepartment("");
    setBirthDate("");
    setStreet("");
    setCity("");
    setUsState("");
    setZipCode("");
  };

  return (
    <>
      <Modal
        text={"employee " + first + " " + last + " has been created"}
        display={displayModal}
        width="50%"
        height="100%"
        bgColor="#6e860e"
        margin="0 auto"
        button="yes"
        buttonText="fermer"
        buttonWidth="auto"
        buttonHeight="auto"
        buttonBgColor="white"
        buttonBorder="none"
        buttonMargin="auto"
        buttonPadding="auto"
      />
      <div className="employee-form">
        <div className="container">
          <Link to="/employee-list" className="current-employee">
            View Current Employees
          </Link>
          <h2>Create Employee</h2>
          <form action="#" id="create-employee">
            <div className="infos-field">
              <fieldset className="infos">
                <legend>Infos</legend>
                <label htmlFor="first-name">First Name</label>
                <input
                  id="first-name"
                  onChange={onFirstNameChange}
                  value={firstName}
                />
                <label htmlFor="last-name">Last Name</label>
                <input
                  id="last-name"
                  onChange={onLastNameChange}
                  value={lastName}
                />
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input
                  id="date-of-birth"
                  onChange={onBirthDateChange}
                  type="date"
                  value={birthDate}
                />
                <label htmlFor="start-date">Start Date</label>
                <input
                  id="start-date"
                  onChange={onStartDateChange}
                  type="date"
                  value={startDate}
                />
              </fieldset>
            </div>
            <div className="address-field">
              <fieldset className="address">
                <legend>Address</legend>
                <label htmlFor="street">Street</label>
                <input id="street" onChange={onStreetChange} value={street} />
                <label htmlFor="city">City</label>
                <input id="city" onChange={onCityChange} value={city} />
                <label htmlFor="state">State</label>
                <Select onChange={onUsStateChange} />
                <label htmlFor="zip-code">Zip Code</label>
                <input
                  id="zip-code"
                  type="number"
                  onChange={onZipCodeChange}
                  value={zipCode}
                />
                <label htmlFor="department">Department</label>
                <select
                  name="department"
                  id="department"
                  onChange={onDepartmentChange}
                  defaultValue={"deptSelect"}
                >
                  <option value="deptSelect" disabled>
                    Select department
                  </option>
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Engineering</option>
                  <option>Human Resources</option>
                  <option>Legal</option>
                </select>
              </fieldset>
            </div>
          </form>
          <button className="btn" onClick={saveEmployee} type="submit">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
