import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Dropdown } from "react-bootstrap";

const Tablepage = (props) => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      maxWidth: "0px",
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      maxWidth: "0px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      maxWidth: "0px",
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
      maxWidth: "0px",
    },
    {
      name: "Sold",
      selector: (row) => (row.sold === true ? "true" : "false"),
      sortable: true,
      maxWidth: "0px",
    },
    {
      name: "Image",
      selector: (row) => row.image,
      maxWidth: "0px",
    },
  ];

  const { data, updateMonth } = props;
  const [values, setValues] = useState(data);
  const [month, setMonth] = useState("March");

  const handleFilter = (val) => {
    const newData = data.filter(
      (row) =>
        row.title.toLocaleLowerCase().includes(val) ||
        (row.price + "").toLocaleLowerCase().includes(val) ||
        row.description.toLocaleLowerCase().includes(val)
    );
    setValues(newData);
  };
  const handleMonth = (name, val) => {
    setMonth(name);
    updateMonth(val, name);
  };
  useEffect(() => {
    setValues(data);
  }, [data]);
  return (
    <div className="dashboard">
      <h4 className="sub-heading">Tansaction Dashboard</h4>
      <div className="filter-box row">
        <div className="col-8">
          <input
            className=" form-control"
            type="text"
            onChange={(e) => {
              handleFilter(e.target.value.toLocaleLowerCase());
            }}
          />
        </div>
        <div className="col-4">
          <Dropdown className="w-100">
            <Dropdown.Toggle
              className="w-100"
              variant="dark"
              id="dropdown-basic"
            >
              {month}
            </Dropdown.Toggle>

            <Dropdown.Menu className="text-center w-100">
              <Dropdown.Item
                onClick={() => {
                  handleMonth("January", "01");
                }}
              >
                January
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleMonth("February", "02");
                }}
              >
                February
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleMonth("March", "03");
                }}
              >
                March
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleMonth("April", "04");
                }}
              >
                April
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleMonth("May", "05");
                }}
              >
                May
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleMonth("June", "06");
                }}
              >
                June
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleMonth("July", "07");
                }}
              >
                July
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleMonth("August", "08");
                }}
              >
                August
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleMonth("September", "09");
                }}
              >
                September
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleMonth("October", "10");
                }}
              >
                October
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleMonth("November", "11");
                }}
              >
                November
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleMonth("December", "12");
                }}
              >
                December
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <DataTable pagination fixedHeader columns={columns} data={values} />
    </div>
  );
};

export default Tablepage;
