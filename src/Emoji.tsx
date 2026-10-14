import { useState } from 'react';
import './Emoji.css'
import Atributo from './Atributo';

type EMOJI_KEYS = "happy" | "sick" | "dead";
const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "🙂"],
    ["sick", "🤢"],
    ["dead", "😵"]
])





export default function Emoji(){
  const [situacao, setSituacao] = useState<EMOJI_KEYS>('happy');
  const [saude, setSaude] = useState<number>(4);
  const [energia, setEnergia] = useState<number>(3);
  const [agua, setAgua] = useState<number>(2);
  const [comida, setComida] = useState<number>(1);
  const [luz, setLuz] = useState<boolean>(false);




    function Alimentar(){  
      setComida((Math.min(5, comida + 1)));

    }
    function Hidratar(){
      setAgua((Math.min(5, agua + 1)));
    }
    function LigarDesligar(){
      setLuz(!luz);
    }
    function Ciclo(){
      setComida((Math.max(0, comida - 1)));
      if (comida === 0){
        setSaude((Math.max(0, saude - 1)));
      }
      setAgua((Math.max(0, agua - 1)));
      if (agua === 0){
        setSaude((Math.max(0, saude - 1)));
      }
      if (luz){
        setEnergia((Math.min(0, energia - 1)));
      } else {
        setEnergia((Math.max(5, energia + 1)));
        
      }
    }
    return (
        <>
            <div className="emoji">
              {EMOJI_MAP.get(situacao) || "😶"}
            <div className="atributos">
            <Atributo icone="♥" valor={saude}></Atributo>
            <Atributo icone="⚡" valor={energia}></Atributo>
            <Atributo icone="💧" valor={agua}></Atributo>
            <Atributo icone="🍔" valor={comida}></Atributo>

            </div>
    
            

            <div className = "acoes">
                <button onClick={Alimentar}>Alimentar</button>
                <button onClick={Hidratar}>Hidratar</button>
                <button onClick={LigarDesligar}>Ligar/Desligar</button>
                <button onClick={Ciclo}>Ciclo</button>
                <button onClick={LigarDesligar}>{luz ? "Desligar Luz" : "Ligar Luz"}</button>
            </div>
            </div>
            
          
          
        </>
    )
  }
