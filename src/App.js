
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";

function App() {
  const[newAlert,setNewAlert]=useState(null);
  const showAlert=(message,type)=>{
    setNewAlert({
msg: message,
type: type
    })
    setTimeout(()=>{
      setNewAlert(null);
    },2000);
  }
  const [darkMode,setDarkMode]=useState('light');
  const toggleMode=()=>{
    if(darkMode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled!","Success")
      document.title='TextUtils-Dark Mode';
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled!","Success")
      document.title='TextUtils-Light Mode';
    }
    }
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode}/>
    <Alert alert={newAlert}/>
    
    <Routes>
    <Route path="/" element={<TextForm heading="Enter your text below: "  mode={darkMode} showAlert={showAlert}/>} ></Route>
          <Route path="/about" element= {<About mode={darkMode}/>}> </Route>
          
        </Routes>
        </Router>
   </>
    
    
  );
}

export default App;
