import { useState} from "react";
import React from "react";
import axios from "axios";
import D_T from "./D_T";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

function Add() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [batch, setBatch] = useState("");
  const [division, setDivision] = useState("");
  const [roll, setRoll] = useState("");
  const [ad1, setAd1] = useState("");
  const [ad2, setAd2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [data, setdata] = useState([]);

  const navigate = useNavigate();
 

  function handleform(e,
    firstName,
    middleName,
    lastName,
    batch,
    division,
    roll,
    ad1,
    ad2,
    landmark,
    city,
    pin
  ) {
    e.preventDefault();
    if (
      firstName &&
      middleName &&
      lastName &&
      batch &&
      division &&
      roll &&
      ad1 &&
      ad2 &&
      landmark &&
      city &&
      pin
    ) {
      const obj = {
        firstName,
        middleName,
        lastName,
        batch,
        division,
        roll,
        ad1,
        ad2,
        landmark,
        city,
        pin,
      };
      axios.post("https://thawing-anchorage-36314.herokuapp.com/student_data", obj).then((res) => {
        console.log(res);

        console.log(res.data);

        setdata([...data, res.data]);
        alert("Student Data Successfully Added!")
        // navigate("/");

        setFirstName("")
        setMiddleName("")
        setLastName("")
        setBatch("")
        setDivision("")
        setRoll("")
        setAd1("")
        setAd2("")
        setLandmark("")
        setCity("")
        setPin("")

      });
    } else {
      alert("Please fill all required fields");
    }
  }

  const rollLimit = 2;

	const handleChangeRoll = (event) => {
		if (rollLimit - event.target.value.length >= 0) {
			setRoll(event.target.value);
		}
	};

  const pinLimit = 6;

	const handleChangePin = (event) => {
		if (pinLimit - event.target.value.length >= 0) {
			setPin(event.target.value);
		}
	};

  return (
    <form>
      <div className="add">
        <div className="same">
          <label htmlFor="name">Add Student</label>
          <div className="date-time">
            {" "}
            <D_T/>
            {" "}
          </div>
        </div>

        <br />
        <div className="info-input">
          <input
            required={true}
            className="input_box"
            type="text"
            value={firstName}
            placeholder="First Name"
            name="first-name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            placeholder="Middle Name"
            value={middleName}
            name="middle-name"
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            placeholder="Last Name"
            value={lastName}
            name="last-name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
         
    <select placeholder='Select option' value={batch} onChange={(e) => {setBatch(e.target.value)}}>
            <option value='default'>Select Class</option>
            <option value='I'>1</option>
            <option value='II'>2</option>
            <option value='III'>3</option>
            <option value='IV'>4</option>
            <option value='V'>5</option>
            <option value='VI'>6</option>
            <option value='VII'>7</option>
            <option value='VIII'>8</option>
            <option value='IX'>9</option>
            <option value='X'>10</option>
            <option value='XI'>11</option>
            <option value='XI'>12</option>
          </select>

          <select placeholder='Select option' value={division} onChange={(e) => {setDivision(e.target.value)}}>
            <option value='default'>Select Division</option>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
            <option value='D'>D</option>
            <option value='E'>E</option>
          </select>
         
          <input
            required={true}
            className="input_box roll_no"
            type="number"
            name="roll_no"
            value={roll}
            placeholder="Enter Roll Number in Digits"
            onChange={handleChangeRoll}
          />
        </div>
        <br />

        <div className="adinput same">
          <textarea
            required={true}
            className="input_box"
            type="text"
            name="ad1"
            value={ad1}
            placeholder="Address Line 1"
            onChange={(e) => {
              setAd1(e.target.value);
            }}
          />

          <textarea
            required={true}
            className="input_box"
            type="text"
            name="ad2"
            value={ad2}
            placeholder="Address Line 2"
            onChange={(e) => {
              setAd2(e.target.value);
            }}
          />
        </div>
        <div className="info-input">
          <input
            required={true}
            className="input_box"
            type="text"
            value={landmark}
            name="landmark"
            placeholder="Landmark"
            onChange={(e) => {
              setLandmark(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="text"
            name="city"
            value={city}
            placeholder="City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input
            required={true}
            className="input_box"
            type="number"
            name="pin"
            value={pin}
            placeholder="Pincode"
            onChange={handleChangePin}
          />
          <button
            className="button-5"
            onClick={(e) => {
              handleform(e,
                firstName,
                middleName,
                lastName,
                batch,
                division,
                roll,
                ad1,
                ad2,
                landmark,
                city,
                pin
              );
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Add;