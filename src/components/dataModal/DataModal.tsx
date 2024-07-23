import { useEffect, useState } from "react";
import ModalUsers from "./ModalUsers";

interface dataProptype {
    avatar : string,
    email: string,
    first_name: string,
    id: number,
    last_name: string
}

const DataModal = () => {

    const [data, setData] = useState<dataProptype[]>([]);

    useEffect(() => {
        callData()
    }, [])
    

    const callData = async ()=>{
        const call = await fetch(`https://reqres.in/api/users?page=2`);
        const dataCall = await call.json();
        setData(dataCall.data)
    }

  return (
    <div>
     <ModalUsers data={data} />
    </div>
  )
}

export default DataModal