import React from 'react'
import { Outlet } from 'react-router-dom'
import HomePage from '../../pages/clieant pages/HomePage'
import ClientPage from '../../pages/clieant pages/ClientPage'

const ClientLayout = () => {
  return (
    <div><ClientPage><Outlet/></ClientPage></div>
  )
}

export default ClientLayout