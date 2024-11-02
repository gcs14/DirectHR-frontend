import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployee() {

    const navigate = useNavigate()

    const [employee, setEmployee]= useState({
        name:"",
        username:"",
        email:"",
        phoneNumber:"",
        birthday:"",
        position:"",
        jobType:"",
        salary:"",
        hourlyWage:"",
        hireDate:"",
    });

    const {name, username, email, phoneNumber, birthday, position, jobType, salary, hourlyWage, hireDate}=employee;

    const onInputChange= (e)=>{
        setEmployee({...employee,[e.target.name]: e.target.value});
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/employee", employee);
        navigate("/");
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Enter New Employee</h2>
                
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Full Name</label>
                        <input 
                            type={"text"} 
                            className="form-control" 
                            placeholder="Enter full name" 
                            name="name"
                            value={name}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Username" className="form-label">Username</label>
                        <input 
                            type={"text"} 
                            className="form-control" 
                            placeholder="Enter an username" 
                            name="username"
                            value={username}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input 
                            type={"text"} 
                            className="form-control" 
                            placeholder="Enter a email address" 
                            name="email"
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Phone Number" className="form-label">Phone Number</label>
                        <input 
                            type={"text"} 
                            className="form-control" 
                            placeholder="Enter a phone number" 
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Birthday" className="form-label">Birthday</label>
                        <input 
                            type={"text"} 
                            className="form-control" 
                            placeholder="Enter a birthday (YYYY-MM-DD)" 
                            name="birthday"
                            value={birthday}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Position" className="form-label">Position</label>
                        <input 
                            type={"text"} 
                            className="form-control" 
                            placeholder="Enter the employee's postion" 
                            name="position"
                            value={position}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Job Type" className="form-label">Job Type</label>
                        <input 
                            type={"text"} 
                            className="form-control" 
                            placeholder="Is the employee 'full-time' or 'part-time'?" 
                            name="jobType"
                            value={jobType}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Salary" className="form-label">Salary</label>
                        <input 
                            type={"text"} 
                            className="form-control" 
                            placeholder="If full-time, enter annual salary" 
                            name="salary"
                            value={salary}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Hourly Wage" className="form-label">Hourly Wage</label>
                        <input 
                            type={"text"} 
                            className="form-control" 
                            placeholder="If part-time, enter hourly pay rate" 
                            name="hourlyWage"
                            value={hourlyWage}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Date Hired" className="form-label">Date Hired</label>
                        <input 
                            type={"text"} 
                            className="form-control" 
                            placeholder="Enter the date emoployee was hired (YYYY-MM-DD)" 
                            name="hireDate"
                            value={hireDate}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-warning">Submit</button>
                    <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  );
}
