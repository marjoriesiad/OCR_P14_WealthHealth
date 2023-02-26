import { useSelector } from "react-redux";
import { selectEmployee } from "../../service/employeeSlice.js";
import DataTable from "react-data-table-component";
import FilterComponent from "react-data-table-component";
import mockedEmployees from "../../data/employees.js";
import { useState, useMemo } from "react";
import "./employeeList.css";

/**
 *
 * @returns the employee Table
 */
const EmployeeList = () => {
  const employees = useSelector(selectEmployee);

  //changer par "mockedEmployee" pour avoir une plus grande liste
  const datas = employees;
  const [filterText, setFilterText] = useState("");
  const onFilter = (e) => setFilterText(e.target.value);
  const [resetPagination, setResetPagination] = useState(false);

  const filteredItems = datas.filter(
    (item) =>
      item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.birthDate.includes(filterText.toLowerCase()) ||
      item.startDate.includes(filterText.toLowerCase()) ||
      item.department.toLowerCase().includes(filterText.toLowerCase()) ||
      item.usState.toLowerCase().includes(filterText.toLowerCase()) ||
      item.street.toLowerCase().includes(filterText.toLowerCase()) ||
      item.city.toLowerCase().includes(filterText.toLowerCase()) ||
      item.zipCode.includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPagination(!setResetPagination);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, setResetPagination]);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Date of birth",
      selector: (row) => row.birthDate,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.usState,
      sortable: true,
    },
    {
      name: "Zip code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  return (
    <div className="employee-list">
      <div className="searchField">
        <label htmlFor="search">Search : </label>
        <input type="text" id="search" onChange={onFilter} />
      </div>
      <div className="table">
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          striped
          paginationResetDefaultPage={resetPagination} // optionally, a hook to reset pagination to page 1
          subHeaderComponent={subHeaderComponentMemo}
        />
      </div>
    </div>
  );
};

export default EmployeeList;
