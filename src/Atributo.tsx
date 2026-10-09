import { useState } from "react";
import "./Atributo.css";

export default function Atributo() {
    const [valor, setValor] = useState<number>(0);
    let vermelhos = "";
    for(let i =0; i<= 5; i++){
        if (i <= valor){
            vermelhos += "🟥" ;
        }
    }
  return (
    <div className="atributo">
      {valor}
      <button onClick={() => {
        setValor(valor === 5 ? 0 : valor + 1);
      }}>Incrementar</button>
    </div>
  );
}

