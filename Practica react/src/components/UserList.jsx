
import { useEfectHookData } from "../hooks/useEfectHookData"


export const UserList = ({endpoints}) => {
   const {data,isLoading} =  useEfectHookData(endpoints)
  //mi ccustom hooks
 //const {data,isLoading}  = useEfectHookData(endpoint);//destructuracion
  
  /*
    const [data,setdata]= useState([]);
    const fectchData = async ()=>{
        try {
         const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoints}`);
         const data = await response.json();
         setdata(data);
         //console.log(data);
         
        } catch (error) {
         console.error(error);
         
        }
     }

     useEffect(() => {
        fectchData()
    }, [endpoints])

*/



  return (
        <>
            <ul>
                {isLoading ? <p>carggando: </p>: 
                    endpoints == "users"? data.map(user=><li key={user.id} > <b>{user.id}- </b> {user.name}</li>)
                    : data.map(user=><li key={user.id} > <b>{user.id}- </b> {user.name}</li>)
                }               
            </ul>
        </>
  )
}
