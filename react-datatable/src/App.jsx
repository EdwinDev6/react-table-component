import DataTable from "react-data-table-component";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function App() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: "last Name",
      selector: (row) => row.lastName,
    },

    {
      name: "Age",
      selector: (row) => row.age,
    },
  ];
  const data = [
    {
      name: "Juan",
      lastName: "García",
      age: 28,
    },
    {
      name: "María",
      lastName: "López",
      age: 35,
    },
    {
      name: "Carlos",
      lastName: "Martínez",
      age: 42,
    },
    {
      name: "Laura",
      lastName: "Hernández",
      age: 22,
    },
    {
      name: "Pedro",
      lastName: "Díaz",
      age: 39,
    },
    {
      name: "Ana",
      lastName: "Pérez",
      age: 31,
    },
    {
      name: "David",
      lastName: "Sánchez",
      age: 45,
    },
    {
      name: "Sofía",
      lastName: "González",
      age: 26,
    },
    {
      name: "Javier",
      lastName: "Rodríguez",
      age: 37,
    },
    {
      name: "Lucía",
      lastName: "Gómez",
      age: 29,
    },
    {
      name: "Manuel",
      lastName: "Fernández",
      age: 34,
    },
    {
      name: "Carmen",
      lastName: "Torres",
      age: 40,
    },
    {
      name: "Diego",
      lastName: "Ruiz",
      age: 25,
    },
    {
      name: "Elena",
      lastName: "Morales",
      age: 38,
    },
    {
      name: "Marta",
      lastName: "Jiménez",
      age: 33,
    },
  ];
  const [records, setRecords] = useState(data);

  const handleChange = (e) => {
    const filterRecords = data.filter((record) => {
      return record.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(filterRecords);
  };
  return (
    <div>
      <input className="search" type="text" onChange={handleChange} />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <DataTable
        title="User Data"
        columns={columns}
        data={records}
        selectableRows
        pagination
        fixedHeader
        paginationPerPage={5}
      />
    </div>
  );
}
