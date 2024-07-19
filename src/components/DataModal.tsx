import { useEffect, useState } from "react";

interface dataPropstype {
    avatar : string,
    email: string,
    first_name: string,
    id: number,
    last_name: string
}

const DataModal = () => {

    const [data, setData] = useState<dataPropstype>();

    useEffect(() => {
        callData()
    }, [])
    

    const callData = async ()=>{
        const call = await fetch(`https://reqres.in/api/users?page=2`);
        const dataCall = await call.json();
        console.log(dataCall.data)
        setData(dataCall.data)
    }


  return (
    <div>DataModal</div>
  )
}

export default DataModal