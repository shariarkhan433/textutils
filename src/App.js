import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    
    <>
   
{/* <Navbar title="React-app"/> */}
    <Navbar title='Text Utility'></Navbar>
    <div className="container my-3">
    {/* <TextForm headings="Enter the text to analyze"></TextForm> */}
    </div>
    <About></About>
    </>
  );
}

export default App;
