import './App.css';
import Navbar from "./MyComponents/Navbar.js";
import TextForm from "./MyComponents/TextForm.js";
import React, { useState } from 'react';
// import Alert from "./MyComponents/Alert.js";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function toggleMode(event){
    if(event.target.checked){
      setMode("dark");
    }
    else{
      setMode("light");
    }
  }

  // function toggleMode(event) {
  //   console.log(event.target.checked);
  //   // console.log(event.target.value = "off");
  //   if (event.target.value === "on") {
  //     if (event.target.checked === true) {
  //       setMode("dark");
  //       document.body.style.backgroundColor = "rgb(34, 37, 56)";
  //       document.body.style.color = "#fff";
  //       showAlertMessage("Dark mode activated", "primary");
  //       Array.from(document.getElementsByTagName("button")).forEach((element) => {
  //         element.style.backgroundColor = "rgb(30, 20, 50)";
  //         element.style.border = "1px solid #fff";
  //       });
  //       setTimeout(() => {
  //         setAlert(null);
  //       }, 1500);
  //     }
  //     else {
  //       setMode("light");
  //       document.body.style.backgroundColor = "#fff";
  //       document.body.style.color = "black";
  //       Array.from(document.getElementsByTagName("button")).forEach(element => element.style.backgroundColor = "rgb(0,20,200)");
  //       // showAlertMessage("Dark mode activated", "primary");
  //     }
  //   }
  //   else if (event.target.value === "green") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "rgb(10,100,0)";
  //     document.body.style.color = "#fff";
  //     showAlertMessage("Green mode Activated", "primary");
  //     Array.from(document.getElementsByTagName("button")).forEach(element => element.style.backgroundColor = "rgb(10,7 0,0)");

  //     // setAlert(null);
  //   }
  //   else if (event.target.value === "red") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "red";
  //     document.body.style.color = "#fff";
  //     document.title = "red mode Activated";
  //     Array.from(document.getElementsByTagName("button")).forEach(element => element.style.backgroundColor = "rgb(200,10,0)");
  //     setTimeout(() => {
  //       document.title = "Text Utils";
  //     }, 2000);
  //   }
  //   else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "#fff";
  //     document.body.style.color = "black";
  //     Array.from(document.getElementsByTagName("button")).forEach(element => element.style.backgroundColor = "rgb(0,20,200)");
  //   }

  // }

  function showAlertMessage(message, type) {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} alert={alert} />
        {/* <Alert alert={alert} /> */}
        <div className="container my-3">
          <TextForm heading="Methods on strings..." mode={mode} showAlertMessage={showAlertMessage}/>
          {/* <About/> */}
        </div>
    </>
  );
}

export default App;
