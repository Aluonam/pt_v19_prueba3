import { useEffect, useState } from "react"

const DataModal = () => {

    // const [data, setData] = useState();

    useEffect(() => {
        callData()
    }, [])
    

    const callData = async ()=>{
        const call = await fetch(`https://reqres.in/api/users?page=2`);
        const dataCall = await call.json();
        console.log(dataCall.data)

    }


  return (
    <div>DataModal</div>
  )
}

export default DataModal