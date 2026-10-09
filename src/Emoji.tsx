import { useState } from 'react';
import './Emoji.css';
import Atributo from './Atributo';

type EMOJI_KEYS = "happy" | "dead" | "sick" | "surprised" | "laughing";
const EMOJI_MAP = new Map<string, string>([
  ["happy", "😀"],
  ["dead", "😢"],
  ["sick", "😠"],
  ["surprised", "😮"],
  ["laughing", "😂"],
]);


export default function Emoji() {

    const [status, setStatus] = useState<EMOJI_KEYS>("happy");

    function HappyClick() {
      console.log("Status!!", status);
      console.log("Happy!!");
      setStatus("happy");
      console.log("Status!!", status);
    }
    function SickClick(){
      console.log("Status: " + status);
      setStatus("sick");
      console.log("Status: " + status);
    }

    function deadClick(){
      console.log("Status: " + status);
      setStatus("dead");
      console.log("Status: " + status);
    }

    function cicleClick(){
        switch (status){
          case "dead":
            setStatus("happy");
            break;
          case "happy":
            setStatus("sick");
            break;
          case "sick":
            setStatus("dead");
            break; 
          default:
            setStatus("happy");

        }


    }

      return (
        <>
    
    <div className="emoji">  {EMOJI_MAP.get(status) || "not defined"} </div>
    
    <div className='acoes'>
        <button onClick={HappyClick}>Happy</button>
        <button onClick={SickClick}>Sick</button>
        <button onClick={deadClick}>Dead</button>
        <button onClick={cicleClick}>Cicle</button>
        
    </div>

    <Atributo></Atributo>

    </>
      );
}

            
  
