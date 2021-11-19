import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const TicketForm = () => {
    
    const [ticket, update] = useState({
        description:"",
        emergency:false,
    })

    const history =  useHistory()

    const saveTicket = (evt) => {  //this function is using the state, useState, to create an object to store to API
        evt.preventDefault()
        const newTicket ={  //creating an object to save 
            description: ticket.description,  //getting information form state 
            emergency: ticket.emergency, //getting information from state
            customerId:parseInt(localStorage.getItem("honey_customer")), //need to pull this information out of localStorage
            employeeId:1,
            dateCompleted:""
    } //we want to send above object to API
   
   const fetchOption = {
            method: "POST", //posting to the API using POst method
            headers: {
                "Content-Type": "application/json" 
           },
           body:JSON.stringify(newTicket) // sending the body of the object new ticket, can't send javascript so need to stringify 
        }

         return fetch ("http://localhost:8088/serviceTickets", fetchOption)
            .then(response => response.json())
            .then (() => {
                history.push("/tickets")
        })

   }
   
   
    


    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                             (evt) =>{
                                 const copy ={...ticket}     //using object spread operator to copy the initual state
                                 copy.description = evt.target.value  //making the new description = the value of someone typing into the description field
                                 update(copy)}      
                         }/>
                         {/* above isnow that copy is updated with new data it will take that copy to update from useState hook */}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                         onChange={ //onChange is like an event listener that listens for a change and records it- we are listening for the change in description here
                             (evt) =>{
                                 const copy ={...ticket}     //using object spread operator to copy the initual state
                                 copy.emergency = evt.target.checked  //making the new description = the value of someone typing into the description field
                                 update(copy)}      
                         }/>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
    )
}
