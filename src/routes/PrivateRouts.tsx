import { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalContext/GlobalContext'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRout = () =>{
    const {CurrentUser} = useContext(GlobalContext)

    return CurrentUser ? <Outlet/> : <Navigate to='/'/>
}

export const PrivateRout = () =>{
    const {CurrentUser} = useContext(GlobalContext)

    return CurrentUser?.role == 'hospede' ? <Navigate to='/user'/> : <Outlet/>
}