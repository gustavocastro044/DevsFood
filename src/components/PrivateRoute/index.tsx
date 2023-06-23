import { useAppSelector } from "../../redux/hooks/useAppSelector"
import {Navigate} from 'react-router-dom'

type Props = {
  children: JSX.Element
}


export const PriveteRoute = ({ children }: Props) =>{
  const user =useAppSelector(state => state.user)
  if(user.token === true){
    return children
  }else{
    return <Navigate to="/"/>
  }
}

export default PriveteRoute