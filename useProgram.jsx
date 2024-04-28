import { useEffect, useState } from "react";
import { HOST, HOST_API } from "./utilities";


const useProgram = (proId) => {

    const [proDetail, setProDetail] = useState(null);
    useEffect(()=>{
        fetchData();
        
    }, []);

    const fetchData = async () =>{
        const data =await fetch(HOST_API + proId +"/programs?populate=*");
        const json = await data.json();
    
        setProDetail(json.data);


  
}
return proDetail;
}


export default useProgram;