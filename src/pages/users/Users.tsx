
import './users.scss'
import {  GridColDef } from "@mui/x-data-grid"

import noavatar from '../../../public/noavatar.png';
import DataTable from '../../components/dataTable/DataTable';
import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../components/add/Add';

const Users = () => {
  const [ open , setOpen] = useState(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'img', headerName: 'Avatar', width: 100,
      renderCell: (params)=>{
        return <img src={params.row.img || noavatar} alt=""/>
      }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      type:"string"
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      type:"string"
    },
    {
      field: 'email',
      type: 'string',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'phone',
      type: 'string',
      headerName: 'Phone',
      width: 150,
    },
    {
      field: 'createdAt',
      type: 'string',
      headerName: 'CreatedAt',
      width: 200,
    },
    {
      field: 'verified',
      type: 'boolean',
      headerName: 'Verified',
      width: 150,
    }
  ];

  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add new user</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows}/>
      {open && <Add slug='user' colums={columns} setOpen = {setOpen}/>}
    </div>
  )
}

export default Users
