import React, {useState, useEffect} from 'react';
import './styles/App.css';
import Navbar from "./components/Navbar";
import MainTitle from "./components/MainTitle";
import Question from "./components/Question";
import Submitbutton from "./components/Submitbutton";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState<Array<string>>();
  const [token, setToken] = useState<string>();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [gansw, setGansw] =  useState<number>(0);

  useEffect(() => {
    axios.get("http://frozen-hamlet-99845.herokuapp.com/token")
      .then(res => {
        const data = res.data;
        setToken(data[0]);
      })
    axios.get("http://frozen-hamlet-99845.herokuapp.com/tasks")
      .then(res => {
        const data : Array<string> = res.data;
        setDatas(data);
      })
    
  }, [])

  return (
    <div className="App">
      <Navbar />

      <MainTitle submitted={submitted} length={datas && datas.length} gansw={gansw} />
      
      {!datas && <h1 className="mt-10 text-xl text-center text-gray-900 sm:text-3xl sm:truncate">Loading data....</h1>}
      
      {datas && datas.map((data: string, key: number) => 
        <Question submitted={submitted} data={data} key={key} token={token} setGansw={setGansw} gansw={gansw}/>
      )}
      {datas &&  !submitted && <Submitbutton setSubmitted={setSubmitted} submitted={submitted} />}
     

    </div>
  );
}

export default App;
