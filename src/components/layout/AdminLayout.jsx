import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminPage from '../../pages/admin pages/AdminPage'

const AdminLayout = () => {
  return (
    <div><AdminPage><Outlet/></AdminPage></div>
  )
}

export default AdminLayout