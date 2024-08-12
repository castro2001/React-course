import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UsersComponent } from './components/UsersComponent'


createRoot(document.getElementById('root')).render(
  <StrictMode>


<UsersComponent/>



  </StrictMode>,
)

//#region 
/*
import {CardComponent} from './components/CardComponent'
import { CountComponer } from './components/CountComponer'
import { ListComponent } from './components/ListComponent'
    <h1>Componentess reeutilizable</h1> 
<div className="cards">
<CardComponent  title={"Perfil 1"} image={"profile1"} content={"Perffil de maariaa Nobis molestiae esse error sed facilis consequuntur dolore provident aliquam harum quam"} />
<CardComponent  title={"Perfil 2"} image={"profile2"} content={"Perffil de Jason Nobis molestiae esse error sed facilis consequuntur dolore provident aliquam harum quam"}/>
<CardComponent  title={"Perfil 3"} image={"profile3"} content={"Perffil de Tom Nobis molestiae esse error sed facilis consequuntur dolore provident aliquam harum quam"}/>

</div>

<ListComponent/>
<CountComponer value={0} />
*/
//#endregion