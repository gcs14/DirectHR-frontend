import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Home() {

    const [employees, setEmployees]=useState([])
    // eslint-disable-next-line
    const {id} = useParams()

    const loadEmployees=async()=>{
        const result=await axios.get("https://3.18.126.132:8080/employees")
        setEmployees(result.data);
    };

    const deleteEmployee = async (id) =>{
      await axios.delete(`https://3.18.126.132:8080/employee/${id}`)
      loadEmployees();
    };

    useEffect(()=>{
      loadEmployees();
  },[])

  let formatPhoneNumber = (str) => {
    let cleaned = ('' + str).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    };
    return null
  };

  return (
    <div className='container'>
        <div className='py-5'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        employees.map((employee, index)=>(
            <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{employee.name}</td>
                <td>{employee.username}</td>
                <td>{employee.email}</td>
                <td>{formatPhoneNumber(employee.phoneNumber)}</td>
                <td>
                    <Link className="btn btn-primary mx-2"to={`/viewemployee/${employee.id}`}>View</Link>
                    <Link className='btn btn-outline-primary mx-2'to={`/editemployee/${employee.id}`}>Edit</Link>
                    <button className="btn btn-danger mx-2"
                    onClick={()=> deleteEmployee(employee.id)}>Delete</button>
                </td>
            </tr>
        ))
    }

  </tbody>
</table>
        </div>
    </div>
  )
}
