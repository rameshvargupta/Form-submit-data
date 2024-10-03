import React, { useContext, useEffect } from 'react'
import { multiData } from '../Store'

const PrintData = () => {
  const { total } = useContext(multiData)

  return (
    <div>
      <table className="table table-bordered my-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last</th>
            <th>Email</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
         {total.map((item,index)=>{
          return(
            <tr key={index}>
            <td>{index+1}</td>
            <td>{item.first}</td>
            <td>{item.last}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td>{item.mobile}</td>
            <td>{item.address}</td>
          </tr>
          )
         })} 
       
        </tbody>
      </table>
    </div>
  )
}

export default PrintData
