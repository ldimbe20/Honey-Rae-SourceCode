import React, { useEffect, useState } from "react"


export const TicketList = () => {
    const [tickets, setTicket] = useState([])

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
            {
                tickets.map(
                    (ticket) => {


                        return <div key={`ticket--${ticket.id}`}>
                            <p> {ticket.description} Submitted by {ticket.customer?.name} 
                            {/* Optional Chaining the ? above asks does this have customer if it does then move to name  */}
                             and worked on by {ticket.employee?.name||"Unknown" }</p>  
                             {/* Two vertical pipes means is there ticket.employee.name if not then post "unknown"  */}
                            
                            </div>
                    }
                )
            }
        </>
    )
}