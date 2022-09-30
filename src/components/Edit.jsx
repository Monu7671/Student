import { useState } from "react";
import React from "react";
import axios from "axios";
import D_T from "./D_T";
import { useNavigate } from "react-router-dom";

function Edit() {
  let local = JSON.parse(localStorage.getItem("dataId"));

  const [firstNames, setFirstNames] = useState(local.firstName);
  const [middleNames, setMiddleNames] = useState(local.middleName);
  const [lastNames, setLastNames] = useState(local.lastName);
  const [batchs, setBatchs] = useState(local.batch);
  const [divisions, setDivisions] = useState(local.division);
  const [rolls, setRolls] = useState(local.roll);
  const [ad1s, setAd1s] = useState(local.ad1);
  const [ad2s, setAd2s] = useState(local.ad2);
  const [landmarks, setLandmarks] = useState(local.landmark);
  const [citys, setCitys] = useState(local.city);
  const [pins, setPins] = useState(local.pin);

  const navigate = useNavigate();

  const data = {
    firstName: firstNames,
    middleName: middleNames,
    lastName: lastNames,
    batch: batchs,
    division: divisions,
    roll: rolls,
    ad1: ad1s,
    ad2: ad2s,
    landmark: landmarks,
    city: citys,
    pin: pins,
  };
  const handleEdit = (e) => {
    e.preventDefault();

    let id = local.id;

    console.log(id, data);
    axios
      .put(`https://thawing-anchorage-36314.herokuapp.com/student_data/${id}`, data)
      .then((res) => {
        //   local.getdatas();
        navigate("/manage_student");
      })
      .then((res) => {
        alert("Update Successfull");
      });
  };

  const handleExit = () => {
    navigate("/manage_student");
  };

  const rollLimit = 2;

  const handleChangeRoll = (event) => {
    if (rollLimit - event.target.value.length >= 0) {
      setRolls(event.target.value);
    }
  };

  const pinLimit = 6;

  const handleChangePin = (event) => {
    if (pinLimit - event.target.value.length >= 0) {
      setPins(event.target.value);
    }
  };

  return (
    <form onSubmit={handleEdit}>
      <div className="add">
        <div className="same">
          <label htmlFor="name">Edit Student Data</label>
          <div className="date-time">
            <D_T />
          </div>
        </div>

        <br />
        <div className="info-input">
          <input
            required={true}
            className="input_box"
            type="text"
            name="first-name"
            placeholder="First Name"
            value={firstNames}
            onChange={(e) => {
              setFirstNames(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            name="middle-name"
            placeholder="Middle Name"
            value={middleNames}
            onChange={(e) => {
              setMiddleNames(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            name="last-name"
            placeholder="Last Name"
            value={lastNames}
            onChange={(e) => {
              setLastNames(e.target.value);
            }}
          />
          <select
            placeholder="Select option"
            onChange={(e) => {
              setBatchs(e.target.value);
            }}
          >
            <option value="default">Select Class</option>
            <option value="I">1</option>
            <option value="II">2</option>
            <option value="III">3</option>
            <option value="IV">4</option>
            <option value="V">5</option>
            <option value="VI">6</option>
            <option value="VII">7</option>
            <option value="VIII">8</option>
            <option value="IX">9</option>
            <option value="X">10</option>
            <option value="XI">11</option>
            <option value="XI">12</option>
          </select>

          <select
            placeholder="Select option"
            onChange={(e) => {
              setDivisions(e.target.value);
            }}
          >
            <option value="default">Select Division</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="I">E</option>
          </select>
          <input
            required={true}
            className="input_box roll_no"
            placeholder="Enter Roll Number in Digits"
            type="number"
            name="roll_no"
            value={rolls}
            onChange={handleChangeRoll}
          />
        </div>
        <br />

        <div className="adinput same">
          <textarea
            required={true}
            className="input_box"
            type="text"
            placeholder="Address Line 1"
            name="ad1"
            value={ad1s}
            onChange={(e) => {
              setAd1s(e.target.value);
            }}
          />

          <textarea
            required={true}
            className="input_box"
            type="text"
            placeholder="Address Line 2"
            name="ad2"
            value={ad2s}
            onChange={(e) => {
              setAd2s(e.target.value);
            }}
          />
        </div>
        <div className="info-input">
          <input
            required={true}
            className="input_box"
            type="text"
            name="landmark"
            placeholder="Landmark"
            value={landmarks}
            onChange={(e) => {
              setLandmarks(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            placeholder="City"
            name="city"
            value={citys}
            onChange={(e) => {
              setCitys(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="number"
            placeholder="Pincode"
            name="pin"
            value={pins}
            onChange={handleChangePin}
          />
          <button className="button-5" type="submit">
            Update
          </button>
          <button className="button-5" onClick={handleExit}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
export default Edit;