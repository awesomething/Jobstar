import "./SearchPage.css";
import { useState } from "react";
import Axios from "axios";

function SearchPage() {
  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = (event) => {
    event.preventDefault();
    Axios.post("https://fast-cliffs-44772.herokuapp.com/create", {
      company: company,
      experience: experience,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          company: company,
          experience: experience,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("https://fast-cliffs-44772.herokuapp.com/employees").then(
      (response) => {
        setEmployeeList(response.data);
      }
    );
  };

  const updateEmployeeWage = (id) => {
    Axios.put("https://fast-cliffs-44772.herokuapp.com/update", {
      wage: newWage,
      id: id,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                company: val.company,
                country: val.country,
                experience: val.experience,
                position: val.position,
                wage: newWage,
              }
            : val;
        })
      );
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`https://fast-cliffs-44772.herokuapp.com/delete/${id}`).then(
      (response) => {
        setEmployeeList(
          employeeList.filter((val) => {
            return val.id !== id;
          })
        );
      }
    );
  };

  return (
    <div className="Search  dark:bg-gray-800 ">
      <div className="information px-7 py-4 lg:px-96">
        <input
          className="shadow mt-1"
          placeholder="Company"
          type="text"
          onChange={(event) => {
            setCompany(event.target.value);
          }}
        />
        <input
          className="shadow mt-1"
          placeholder="Experience"
          type="number"
          onChange={(event) => {
            setExperience(event.target.value);
          }}
        />
        <input
          className="shadow mt-1"
          placeholder="Country"
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <input
          className="shadow mt-1"
          placeholder="Position"
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />

        <input
          className="shadow mt-1"
          placeholder="Wage (monthly):"
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button className="btn btn-block btn-info mt-3" onClick={addEmployee}>
          Add Job
        </button>
        <button
          className="btn btn-block btn-warning mt-3"
          onClick={getEmployees}
        >
          Show Jobs
        </button>
      </div>

      <div className=" employees xs:px-8 px-10 	  mb-6 lg:px-100">
        {employeeList.map((val, key) => {
          return (
            <div
              key={key}
              className="w-full sm:w-full lg:w-1/2   employee py-1 pb-4 px-2 bg-white shadow-lg mx-0 rounded-lg mt-20 mb-10"
            >
              <div>
                <h3>Company: {val.company}</h3>
                <h3>Experience: {val.experience}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
              <input
                className="shadow"
                type="text"
                // eslint-disable-next-line
                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white mb-2 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                placeholder="20000.."
                onChange={(event) => {
                  setNewWage(event.target.value);
                }}
              />
              <div className="flex space-x-4 ">
                <button
                  className="btn btn-info btn-block"
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-warning btn-block mt-0"
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;


/*import "./SearchPage.css";
import { useState } from "react";
import Axios from "axios";

function SearchPage() {

  const [company, setCompany] = useState("");
  const [experience, setExperience] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("https://fast-cliffs-44772.herokuapp.com/create", {
      company: company,
      experience: experience,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          company: company,
          experience: experience,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get("https://fast-cliffs-44772.herokuapp.com/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };


  const updateEmployeeWage = (id) => {
    Axios.put("https://fast-cliffs-44772.herokuapp.com/update", { wage: newWage, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  company: val.company,
                  country: val.country,
                  experience: val.experience,
                  position: val.position,
                  wage: newWage,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`https://fast-cliffs-44772.herokuapp.com/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="Search">
      <div className="information">
        <label>Company:</label>
        <input
          type="text"
          onChange={(event) => {
            setCompany(event.target.value);
          }}
        />
        <label>Experience:</label>
        <input
          type="number"
          onChange={(event) => {
            setExperience(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (year):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Job</button>

      </div>
    <div className="employees">
        <button onClick={getEmployees}>Show Jobs</button>
      
      {employeeList.map((val, key) => {
        return (
          <div className="employee">
            <div>
              <h3>Company: {val.company}</h3>
              <h3>Experience: {val.experience}</h3>
              <h3>Country: {val.country}</h3>
              <h3>Position: {val.position}</h3>
              <h3>Wage: {val.wage}</h3>
            </div>
            <div>
                <input
                  type="text"
                  className="line"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                > <br/>
                  {" "}
                  Update
                </button>
                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                ><br/>
                  Delete
                </button>
                </div>
        </div> 
        );
      })}
    </div>
        
    </div>
  );
}

export default SearchPage;*/
