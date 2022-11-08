//import axios, { Axios } from 'axios';
import  Axios  from 'axios';
import './App.css';
import React, {useState} from 'react';
import Iframe from 'react-iframe';
import myLogo from './better_logo.png';

function App() {
  const url="http://127.0.0.1:5000/result"
  const [data,setData]= useState({the_q:''})
  const [showResults, setShowResults] = React.useState(false)

  const handleSumbit=(e)=>{
    e.preventDefault();
    Axios.post(url,{the_q: data.the_q});//.then(res=>{console.log(res.data)})
    data.the_q!==''&&setShowResults(true);
  }

  const handle=(e)=>{
    const newData={...data}
    newData[e.target.id]=e.target.value;
    setData(newData);
    console.log(newData);
    //Axios.post(url, {the_q: data.the_q})//.then(res=>{console.log(res.data)})    
  }
  const Results = () => (
    <div>
         <h1>{data.the_q}</h1>
        <Iframe url="https://www.n12.co.il/"  width="90%" height="300" ></Iframe>
        </div>
  )


  return (
    <div className="App">
      <header className="App-header">
        <img src={myLogo} className="App-logo" alt="logo" />
        <form onSubmit={handleSumbit}>
          <div>
             <input onChange={(e)=> handle(e)} dir="rtl" type="text" id="the_q" value={data.the_q} className="App-input" />
          </div>
        <button>חפש</button>
        </form>
      </header>
      { showResults ? <Results/> : null }
    </div>
  );
}
export default App;
