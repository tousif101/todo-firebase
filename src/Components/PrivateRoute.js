import {Navigate, Outlet} from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'
import {CircularProgress} from '@mui/material'

function PrivateRoute() {

    const {loggedIn, checkingStatus} = useAuthStatus()
    if (checkingStatus){
        return <CircularProgress />
    }

    return (
        loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
    )
}

export default PrivateRoute