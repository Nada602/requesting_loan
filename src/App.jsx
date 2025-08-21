import { useState } from "react";
import BopUp from "./BopUp";
function App() {
  const[personData,setPersonData]=useState({
      name:"",
      phone:"",
      age:"",
      status:false,
      salary:""

    })
    const [show, setShow] = useState(false);

    const close = () => setShow(false);
    
    const [message,setMessage]=useState("");
    function submithandeler() {
      
      
        if (personData.age > 100 || personData.age < 25) {
          setMessage("Age is Not Allowed");
        } else if (personData.phone.length < 12) {
          setMessage("Phone Is Not Allowed");
        } else {
          setMessage("Submit Data Successfully");
        }
    }
  return (
    <>
      <div
        className="container-fluid d-flex iustify-content-center align-items-center  bg-info"
        style={{ height: "100vh" }}
      >
        <form
          className="w-50 m-auto shadow-lg p-3 m-5 border-inside rounded"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setShow(true)
          }}
        >
          <label className="form-label fw-bold">Name</label>
          <input
          placeholder="Nada Essam"
            value={personData.name}
            onChange={(e) => {
              setPersonData({ ...personData, name: e.target.value });
            }}
            className="form-control"
            type="text"
            required
          />

          <label className="form-label fw-bold">Phone</label>
          <input

            value={personData.phone}
            onChange={(e) => {
              setPersonData({ ...personData, phone: e.target.value });
            }}
            className="form-control"
            type="tel"
            id="phone"
            name="phone"
            placeholder="+20 10 1234 5678"
            required
          />

          <label className="form-label fw-bold">Age</label>
          <input
          placeholder="Greater than 25"
            value={personData.age}
            onChange={(e) => {
              setPersonData({ ...personData, age: e.target.value });
            }}
            className="form-control"
            type="number"
          />

          <div className="fw-bolder m-3 d-flex flex-column justify-content-center align-items-center">
            Are You Employee
            <input
              value="employee"
              checked={personData.status}
              onChange={(e) => {
                setPersonData({ ...personData, status: e.target.checked });
              }}
              type="checkbox"
              required
            />
          </div>
          <label className="form-label fw-bold">Salary</label>
          <select
            value={personData.salary}
            onChange={(e) => {
              setPersonData({ ...personData, salary: e.target.value });
            }}
            className="form-control"
            
            required
          >
            <option value=""></option>
            <option value="less than 5000">less than 5000$</option>
            <option value="5000"> 5000$</option>
            <option value="greater than 5000">greater than 5000$</option>
          </select>
          <div className=" d-flex flex-column justify-content-center align-items-center">
            <button
              disabled={
                !personData.name ||
                !personData.phone ||
                !personData.age ||
                !personData.salary
              }
              className="btn btn-success mt-3"
              type="submit"
              onClick={submithandeler}
            >
              Submit
            </button>
          </div>
        </form>
        {message &&
        <BopUp show={show} close={close} text={message}/>}
      </div>
    </>
  );
}

export default App;