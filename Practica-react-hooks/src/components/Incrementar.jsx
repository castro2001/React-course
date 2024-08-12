import React from "react";

export const Incrementar = React.memo(({increment})=>{
    console.log('Me esttoy redibunajndo');
    return(
        <button onClick={ ()=> increment(100)  } >+1</button>
    )
    
})