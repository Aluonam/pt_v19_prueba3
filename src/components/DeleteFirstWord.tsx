import { useState } from "react"

const DeleteFirstWord = () => {

    const [sentence, setSentence] = useState<string>('')

    const handleDelWord = ()=>{
        const words = sentence.split(' ');
        words.shift()
        setSentence(words.join(' '))

    }

  return (
    <div>
        <input placeholder="Escribe tu frase" onChange={(e)=>{setSentence(e.target.value)}}></input>
        <button onClick={()=>{handleDelWord()}}>Elimina primera palabra</button>
        <br></br>
        {sentence}
    </div>
  )
}

export default DeleteFirstWord