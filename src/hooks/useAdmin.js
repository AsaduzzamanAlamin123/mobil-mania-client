import { useEffect, useState } from "react"

const useFakeData = ()=>{
    const [samsungData , setSamsungData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/samsungs')
        .then(res=>res.json())
        .then(data=> setSamsungData(data))
    },[])
    return [samsungData];

    
}
export default useFakeData