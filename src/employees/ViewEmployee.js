import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewEmployee() {

    const [employee, setEmployee] = useState({
        name: "",
        username: "",
        email: "",
        phoneNumber: "",
        birthday: "",
        position: "",
        jobType: "",
        salary: "",
        hourlyWage: "",
        hireDate: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadEmployee();
        // eslint-disable-next-line
    }, []);

    const loadEmployee = async () =>{
        const result = await axios.get(`http://directhr-env.eba-9d3qncmp.us-east-2.elasticbeanstalk.com/employee/${id}`);
        setEmployee(result.data);
    };

    let formatPhoneNumber = (str) => {
        let cleaned = ('' + str).replace(/\D/g, '');
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        };
        return null
      };

      function numberWithCommas(str) {
        return "$" + str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Employee Details</h2>

                <div className='card'>
                    <div className='card-header'>
                        Employee Profile: 
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Id: </b>
                                {employee.id}
                            </li>
                            <li className='list-group-item'>
                                <b>Name: </b>
                                {employee.name}
                            </li>
                            <li className='list-group-item'>
                                <b>Username: </b>
                                {employee.username}
                            </li>
                            <li className='list-group-item'>
                                <b>Email: </b>
                                {employee.email}
                            </li>
                            <li className='list-group-item'>
                                <b>Phone Number: </b>
                                {formatPhoneNumber(employee.phoneNumber)}
                            </li>
                            <li className='list-group-item'>
                                <b>Birthday: </b>
                                {employee.birthday}
                            </li>
                            <li className='list-group-item'>
                                <b>Position: </b>
                                {employee.position}
                            </li>
                            <li className='list-group-item'>
                                <b>Job Type: </b>
                                {employee.jobType}
                            </li>
                            <li className='list-group-item'>
                                <b>Salary: </b>
                                {numberWithCommas(employee.salary)}
                            </li>
                            <li className='list-group-item'>
                                <b>Hourly Wage: </b>
                                {"$" + employee.hourlyWage + "/hr"}
                            </li>
                            <li className='list-group-item'>
                                <b>Date Hired: </b>
                                {employee.hireDate}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"}>Return</Link>
            </div>
        </div>
    </div>
  )
}

