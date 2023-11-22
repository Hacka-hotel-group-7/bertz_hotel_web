import { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalContext/GlobalContext'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRout = ()=>{
    const {CurrentUser} = useContext(GlobalContext)

    if(!CurrentUser){
        return <Outlet/>
    }else if (CurrentUser.role == 'gerente' || CurrentUser.role == 'staff') {
        return <Navigate to='/adm/dashboard'/>
    }else{
        return <Navigate to='/user'/>
    }
}