import './App.css';
// import DragDrop from './components/DragDrop';
import Hola from './components/Hola';
// import Loginpage from './components/Loginpage';

import cons from './Cons.png'


function App() {
  return (
    <>
    <div className="text-center" id='header'>
      <h3> <img src={cons} alt="/"  className='cons mx-3'/> CBIT  <strong>Activity</strong> Points.</h3>
    </div>

    {/* <div className="cotainer">
      <Loginpage></Loginpage>
    </div> */}

{/* <div className="section"> */}
    {/* <DragDrop></DragDrop> */}
    {/* <Loginpage></Loginpage> */}

<Hola></Hola>
{/* </div> */}
      


<div  id='footer'>
  <div className="row row-cols-3">
    <div className="col"><span className='dot0'></span> <span className='foot'>1 week</span></div>
    <div className="col"><span className='dot1'></span> <span className='foot'>2 weeks</span></div>
    <div className="col"><span className='dot3'></span> <span className='foot'>3 weeks</span></div>
  </div>
</div>
    </>
  );
}

export default App;
