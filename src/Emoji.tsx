import { useState } from 'react';
import './Emoji.css';

type EMOJI_KEYS = "happy" | "sad" | "angry" | "surprised" | "laughing";
const EMOJI_MAP = new Map<string, string>([
  ["happy", "😀"],
  ["sad", "😢"],
  ["angry", "😠"],
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

      return (
        <>
    
    <div className="emoji">  {EMOJI_MAP.get(status) || "not defined"} </div>
    
    <div className='acoes'>
        <button onClick={HappyClick}>Happy</button>
    </div>
    
    </>
      );
}

            
  
