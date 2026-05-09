

import { Outlet } from "react-router"
import Header from "./Header"


function LayOut()
{
  return(
    <div>
        <Header />
        <br /><br />
        <Outlet />
    </div>
  )
}

export default LayOut


