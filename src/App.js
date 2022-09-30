import "./App.css";
import React from "react";
import Add from "./components/Add";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Manage from "./components/Manage";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
import View from "./components/View";

function App() {
  return (
    <div className="App">
      <div className="division1">
        <Sidebar />
        <div>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Add />}></Route>
              <Route path="/manage_student" element={<Manage/>}></Route>
              <Route path="/edit_student_data" element={<Edit/>}></Route>
              <Route path="/view_student_data" element={<View/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;