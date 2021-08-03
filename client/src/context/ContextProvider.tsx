import axios from "axios";
import { FC, createContext, useState } from "react";



export const AppContext = createContext<any>(null);

type ScoreProps = {
  playerOne: number,
  playerTwo: number
}


const ContextProvider :FC = ({ children } ) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [score, setScore] = useState<ScoreProps>({playerOne: 0, playerTwo: 0});
  const [mode, setMode] = useState<string>('');
  const dbStr = 'http://localhost:5000/api/score'
  const getCurrentScore = async () =>{
    const res = await axios.get(dbStr)
    setScore(res.data)
  }
  const setCurrentScore = async (obj: object) =>{
    const res = await axios.post(dbStr,obj)
    console.log(res.data);
    
  }
  return (
    <AppContext.Provider value={{ loading, score, mode,setScore, setMode, getCurrentScore, setCurrentScore}}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
