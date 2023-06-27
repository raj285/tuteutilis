import './App.css';
// title can be changed witht he help of props
import TextForm from './components/TextForm';
// import About from  './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
function App() {
  const[mode,setMode] =useState('light');
  const[btnclr,setbtnclr]=useState('Enable Dark Mode');
  const[alert,setAlert]=useState(null);
  const showalert = (message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      setbtnclr('Enable light Mode')
      document.body.style.backgroundColor='#042743'
      showalert("dark mode has been enabled","succes")
      // your lappy has virus instaal this antivirus type
      // setInterval(() => {
        // document.title='Text Utils is amazing app'
      // }, 2000);
      // setInterval(() => {
        // document.title='download it'
      // }, 7000);
    }
    else{
      setMode('light')
      setbtnclr('Enable Dark Mode')
      document.body.style.backgroundColor='white'
      showalert("light mode has been enabled","succes")
      // document.title='Text Utils Light'
  }
    
  }
  return (
    // <Router>
    <>
    <Navbar title='textutilis2' aboutText='about us' mode1={mode} toggleMode={toggleMode}  bttc={btnclr}/> 
    <Alert alert1={alert}></Alert>
    <div className="container-sm">
      {/* <Routes> */}
      <TextForm heading="enter the text to analyze" mode1={mode} showalert={showalert}/>
      {/* <Route exact path='/about' element={}> */}
      {/* <About/> */}
      {/* </Route> */}
      {/* <Route exact path ='/' element={}></Route> */}
      {/* </Routes> */}
    </div>
    </>
    // </Router>
  );
}

export default App;
