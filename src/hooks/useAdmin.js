import { useEffect, useState } from "react"

const useFakeData = ()=>{
    const [samsungData , setSamsungData] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-journey-31295.herokuapp.com/samsungs')
        .then(res=>res.json())
        .then(data=> setSamsungData(data))
    },[])
    return [samsungData];

    
}
export default useFakeData