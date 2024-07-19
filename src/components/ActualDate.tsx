import { useEffect, useState } from "react"


interface localeDatPropstype {
    day: string,
    hour: string
}
const ActualDate = () => {

    const [date, setDate] = useState<localeDatPropstype>();

    useEffect(() => {
      const dataDate = new Date();
      const day = dataDate?.toLocaleDateString()
      const hour = dataDate?.toLocaleString().split(' ')[1]
      setDate({
        day: day,
        hour: hour
      })
    }, [])
    
  return (
    <div>
        Hoy es: {date?.day}
        <br></br>
        La hora es: {date?.hour}
        
    </div>

  )
}

export default ActualDate