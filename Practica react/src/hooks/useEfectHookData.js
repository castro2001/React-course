//mi customHookk o helper mmodularisa el codigo 
import { useState, useEffect } from "react"
import { fectchData } from "../helpers/fetchData";

export const useEfectHookData = (endpoints) => {
  const [data,setdata]= useState([]);
  const [isLoading,setIsLoading]= useState(true);

  // lo quiero usar como desstrucctturacionn primero creo una funcion aasinccrina 
const getData = async ()=>{
  //destructuracion 
  const {data, isLoading} = await fectchData(endpoints)
  setdata(data);
  setIsLoading(isLoading);
}


useEffect(() => {
/* lo estamos usando como unaa promesa
  fectchData(endpoints)
  .then(res=>{
    setdata(res.data);
    setIsLoading(res.isLoading);
  })*/

getData();;


}, [endpoints])
  return {
    data,
    isLoading
  }
}
