   const history= useHistory()

    const saveTicket = (event) => {
        event.preventDefault()// prevents weird behavior that submitting a ticket triggers
        
        const newTicket = {
             //getting description from state
            description: ticket.description,
            emergency: ticket.emergency, //getting emergency from state
            customerId: parseInt(localStorage.getItem("honey_customer")), //when user authenticates we are storing userid in application tab in local storage
            employeeId: 1,
            dateCompleted: ""
        }
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
           },
           body:JSON.stringify(newTicket)
        }

        return fetch ("http://localhost:8088/serviceTickets", fetchOptions)
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
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                                update(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input
                     onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.checked
                                update(copy)
                            }
                        }
                        type="checkbox"/>

                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.emergency = evt.target.checked
                                update(copy)
                            }
                        } type="checkbox"/>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
    )
}
