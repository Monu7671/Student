import React from "react";
import { useNavigate } from "react-router-dom";
import Edit from "./Edit";

function Body(elem) {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    localStorage.setItem("dataId", JSON.stringify(id));
    navigate("/edit_student_data");
  };

  const handleView = (id) => {
    localStorage.setItem("ViewId", JSON.stringify(id));
    navigate("/view_student_data");
  };

  return (
    <tr>
      <td>
        {elem.firstName} {elem.lastName}
      </td>
      <td>
        {elem.batch}-{elem.division}
      </td>
      <td>{elem.roll}</td>
      <td>
        <span className="relative" onClick={() => handleView(elem)}>
          <i className="fa-solid fa-eye"></i>
        </span>

        <span className="relative" onClick={() => handleEdit(elem)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </span>

        <span
          className="relative"
          onClick={() => {
            if (window.confirm(" Are you sure?")) {
              elem.deletedata(elem.id);
            }
            navigate("/manage_student");
          }}
        >
          <i className="fa-sharp fa-solid fa-trash"></i>
        </span>
      </td>
    </tr>
  );
}

export default Body;