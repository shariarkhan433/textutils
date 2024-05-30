import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const[mode,setmode] = useState("light"); //by default it is light mode
  const[alert,setalert]= useState(null)

  const shootAlert=(message,type)=>{
    setalert({
      msg:message,
      tp:type
    })
    setTimeout(()=>{
      //it will run some logic here if we wanted
      setalert(null)
    }, 2000) //timer
   
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#072b61'
      shootAlert("Dark mode has been enabled", "success")
      setInterval(()=>{
        document.title = "Install textutils now!"
      },2000);
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = 'white'
      shootAlert("Light mode has been enabled", "success")
    }
  }
  
  return (
    <>
{/* <Navbar title="React-app"/> */}

    <Navbar title='Text Utility' mode={mode} togglemode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    <div className="container my-3">
          <TextForm shootAlert={shootAlert} headings="Enter the text to analyze" mode={mode}></TextForm>
          <About></About>
    </div>
   
    </>
  );
}

export default App;
