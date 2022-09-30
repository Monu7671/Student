import React, { useState, useEffect } from "react";
import axios from "axios";
import Body from "./Body";
import D_T from "./D_T";
import loader from './loder.png'
import noData from './noData.png'
function Manage() {
  const [data, setdata] = useState([]);
  const [loding, setLoding] = useState(false);
  const [error,setError] = useState(false)

  const getdatas = () => {
    setLoding(true);
    axios.get("https://thawing-anchorage-36314.herokuapp.com/student_data").then((res) => {
      setdata([...res.data]);
      setLoding(
        false
      )
    });
  };

  const deletedata = (id) => {
    console.log(id);
    axios.delete(`https://thawing-anchorage-36314.herokuapp.com/student_data/${id}`).then((res) => {
      getdatas();
    });
  };

  useEffect(() => {
    getdatas();
  }, []);

  return (
    <div className="add">
      <div className="same">
        <label htmlFor="name">Manage Students</label>
        <div className="date-time">
          <D_T />
        </div>
      </div>
      { loding ? ( 
      <>
      <h1 className="text-center">Loading...</h1>
         <img style={{width:"30%"}} src={loader}/>
         </>
      ) : data.length==0 ? (   <>
        <h1 className="text-center">No Data Found !</h1>
           <img style={{width:"50%"}} src={noData}/>
           </>) : (
      <table className="head">
        <thead>
          <tr>
            <td className="head1 he">Name</td>
            <td className="head1">Class</td>
            <td className="head1">Roll No.</td>
            <td className="head1 ad">View/Edit/Delete</td>
          </tr>
        </thead>
        <tbody>
           {
            data.map((elem) => {
              return (
                <Body
                  key={elem.id}
                  {...elem}
                  deletedata={deletedata}
                  getdatas={getdatas}
                />
              );
            })}
        </tbody>
      </table>)
      }

    </div>
  );
}

export default Manage;