import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark'); //Whether darks mode is set
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  
  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color ='black';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
          <Route exact path="/" element={<Textform heading='Enter text to analyze below' showAlert={showAlert} mode={mode}/>}/> 
          <Route exact path="/about" element={<About/>}/>
    </Routes>  */}
    <Textform heading='Enter text to analyze below' showAlert={showAlert} mode={mode}/>
    {/* <About/> */}
    </div>
    {/* </Router> */}
    
    </>
  );
}
export default App;