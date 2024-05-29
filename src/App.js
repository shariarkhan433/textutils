import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode,setmode] = useState("light"); //by default it is light mode

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#072b61'
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = 'white'
    }
  }
  
  return (
    <>
{/* <Navbar title="React-app"/> */}
    <Navbar title='Text Utility' mode={mode} togglemode={toggleMode}></Navbar>
    <div className="container my-3">
    <TextForm headings="Enter the text to analyze" mode={mode}></TextForm>
    </div>
    {/* <About></About> */}
    </>
  );
}

export default App;
