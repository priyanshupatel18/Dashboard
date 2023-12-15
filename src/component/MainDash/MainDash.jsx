import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import "./MainDash.css"
// import { Table } from '@mui/material'
// prabhakar

const MainDash = () =>{
  return (
   <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards/>
      <Table/>
   </div>
  )
}

export default MainDash