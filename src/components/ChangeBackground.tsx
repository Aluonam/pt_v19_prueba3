import { useState } from "react"

const ChangeBackground = () => {

    const [colorSelected, setColorSelected] = useState<string>()
  return (
    <div>
        <input type="color" onChange={(e)=>{setColorSelected(e.target.value)}}></input>
        {colorSelected}
    </div>
  )
}

export default ChangeBackground