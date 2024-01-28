import React from 'react'
import UserSidebar from '../components/UserSidebar'
import Footer from '../components/Footer'
import AddItemForm from '../components/AddItemForm'
const AddItem = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
        <UserSidebar />
        <div style={{ flex: 1, marginLeft: '400px' }} className="ml-96">
          <AddItemForm />
          <Footer />

        </div>
      </div>
  )
}

export default AddItem