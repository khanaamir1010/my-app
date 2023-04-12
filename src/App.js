
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';

import {
    BrowserRouter as Router,
    Routes,
    // Switch,
    Route
    // RouterProvider,
    // Link
} from "react-router-dom";

// let name ="Aamir Khan";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })

  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const removebodyClasses=()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-danger');
}

  const toggleMode=(cls)=>{
    removebodyClasses();
    document.body.classList.add('bg-'+cls);

    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enabled','success');
      document.title="TextUtils - Dark mode enabled";

    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light modes has been enabled','success');
      document.title="TextUtils - Light mode enabled";
    }
  }
  return(
  <>
  <Router>
  {/* Navbar is an component , title is a props */}
<Navbar title="textUtils" about="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">

<Routes> 
            
            <Route exact path="/about" element={<About/> } /> 
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> } /> 
</Routes> 
</div>

</Router>
  </>
  );
}

export default App;
