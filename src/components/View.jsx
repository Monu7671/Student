import React from "react";
import { useNavigate } from "react-router-dom";

function View() {
  let local = JSON.parse(localStorage.getItem("ViewId"));
  const navigate = useNavigate();
  const exit = () => {
    navigate("/manage_student");
  };
  return (
    <div className="add">
      <h3>
        Full Name: {local.firstName} {local.middleName} {local.lastName}
      </h3>
      <h3>
        Class: {local.batch}-{local.division}{" "}
      </h3>
      <h3>Roll_No: {local.roll}</h3>
      <h3>Address-1: {local.ad1}</h3>
      <h3>Address-2: {local.ad2}</h3>
      <h3>Landmark: {local.landmark}</h3>
      <h3>
        City: {local.city}-{local.pin}
      </h3>

      <button className="button-5" onClick={exit}>
        Cancel
      </button>
    </div>
  );
}

export default View;