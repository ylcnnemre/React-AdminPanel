import React from 'react'
import "./userList.css"
import {DataGrid} from '@material-ui/data-grid'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import {rows} from "../../dummyData"
import {Link} from "react-router-dom"
import { useState } from 'react';
const UserList = () => {
   const [data,setData]=useState(rows)
    const handleDelete=(id)=>{
        setData(data.filter((item)=>item.id!==id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
         /* { field: 'user', headerName: 'user', width: 200 , renderCell:(params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {
                        params.row.username
                    }
                </div>
            )
        } }, */ 
        { field: 'user', headerName: 'user', width: 200 , renderCell:(params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {
                        params.row.username
                    }
                </div>
            )
        } },
      
        { field: 'email', headerName: 'email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
         
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160,
        },
        {
            field : "action",
            headerName : "Action",
            width:150,
            renderCell : (params)=>{
                return (
                    <>
                    <Link to={"/user/"+params.row.id}>
                         <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline onClick={()=>{handleDelete(params.row.id)}} className="userListDelete"/>
                  
                    </>
                )
            }
        }
      ];
    
      
    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={6} checkboxSelection />
        </div>
    )
}

export default UserList
