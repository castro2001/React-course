export const fectchData = async (endpoints)=>{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoints}`);
        const data = await response.json();
        console.log(data);
        
        return {
           data,
            isLoading:false
        }
           
     
    } catch (error) {
     console.error(error);
     
    }
 }
  