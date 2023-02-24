import {useRoutes} from "react-router-dom"
import routes from "./routers"

export default function APP (){
  return(
    useRoutes(routes)
  )
}