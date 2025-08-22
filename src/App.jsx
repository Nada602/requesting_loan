import { useState } from "react";
import BopUp from "./BopUp";
import InputComponent from "./InputComponent";
function App() {
  const [personData, setPersonData] = useState({
    name: "",
    phone: "",
    age: "",
    status: false,
    salary: "",
  });
  const [show, setShow] = useState(false);

  const close = () => setShow(false);

  const [message, setMessage] = useState("");
  function submithandeler() {
    if (personData.age > 100 || personData.age < 25) {
      setMessage("Age is Not Allowed");
    } else if (personData.phone.length < 12) {
      setMessage("Phone Is Not Allowed");
    } else {
      setMessage("Submit Data Successfully");
    }
  }

  function handlePhoneInputChange(value) {
    setPersonData({ ...personData, phone: value });
  }
  function handleNameInputChange(value) {
    setPersonData({ ...personData, name: value });
  }
  function handleAgeInputChange(value) {
    setPersonData({ ...personData, age: value });
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
            setShow(true);
          }}
        >
          <InputComponent
            value={personData.name}
            handelChange={handleNameInputChange}
            placetext="Nada Essam"
            type="text"
          />

          <InputComponent
            value={personData.phone}
            handelChange={handlePhoneInputChange}
            placetext="01143495516"
            type="tel"
          />

          <InputComponent
            value={personData.age}
            handelChange={handleAgeInputChange}
            placetext="up to 100"
            type="number"
          />

          <div className="fw-bolder m-2 d-flex flex-column justify-content-center align-items-center">
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
        {message && <BopUp show={show} close={close} text={message} />}
      </div>
    </>
  );
}

export default App;
