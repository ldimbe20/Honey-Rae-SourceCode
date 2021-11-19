import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    
    const [employee, update] = useState({ 
        specialties:"",
        name:"",
    })

    const history =  useHistory()

    const saveEmployee = (evt) => {  //this function is using the state, useState, to create an object to store to API
        evt.preventDefault()
        const newEmployee ={  //creating an object to save 
            specialties: employee.specialties,  //getting information form state 
            name: employee.name, //getting information from state
            employeeId:employee.id
            
    } //we want to send above object to API
   
   const fetchOption = {
            method: "POST", //posting to the API using POst method
            headers: {
                "Content-Type": "application/json" 
           },
           body:JSON.stringify(newEmployee) // sending the body of the object new employee, can't send javascript so need to stringify 
        }

         return fetch ("http://localhost:8088/employees", fetchOption)
            .then(response => response.json())
            .then (() => {
                history.push("/employees")
        })

   }
   
   
    


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title"> Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee Name"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                             (evt) =>{
                                 const copy ={...employee}     //using object spread operator to copy the initual state
                                 copy.name = evt.target.value  //making the new description = the value of someone typing into the description field
                                 update(copy)}      
                         }/>
                         {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                </div>
            </fieldset>
            <h2 className="specailtyForm__title"> Specialties</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialties">Specialties:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee Specialties"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                             (evt) =>{
                                 const copy ={...employee}     //using object spread operator to copy the initual state
                                 copy.specialties = evt.target.value  //making the new description = the value of someone typing into the description field
                                 update(copy)}      
                         }/>
                         {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                </div>
            </fieldset>
        
            <button className="btn btn-primary" onClick={saveEmployee}>
                Submit Job
            </button>
        </form>
    )
}
