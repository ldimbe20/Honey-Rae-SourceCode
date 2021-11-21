import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"


export const TicketList = () => {
    const [tickets, setTicket] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    setTicket(data)
                })
        },
        []
    )



    return (
        <>
        <div>
        <button onClick={()=> history.push("/tickets/create")}> Create Ticket </button>  
        {/* above is bringing user to service ticket component by using the /tickets/create */}
        </div>
            {
                tickets.map(
                    (ticket) => {


                        return <div key={`ticket--${ticket.id}`}>
                            <div className={ticket.emergency ? "emergency": "ticket"}>  
                            {/* above states if className is emergency is ticket.emergy is true and is ticket if ticket.emergency is false */}
                        
                           <p>{ticket.emergency ? "🚑" : ""}  
                           <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> </p>
                           <p>{ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}</p>

                            </div>
                            
                        </div>
                    }
                )
            }
        </>
    )
}