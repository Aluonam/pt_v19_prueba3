

type ChangeBackgroundPropsTypes = {
  changeColor: (data:string) => void
}

const ChangeBackground = ({changeColor}:ChangeBackgroundPropsTypes) => {

  return (
    <div>
        <input type="color" onChange={(e)=>{changeColor(e.target.value)}}></input>
    </div>
  )
}

export default ChangeBackground