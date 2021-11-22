import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"


export const TicketList = () => {
    const [tickets, setTicket] = useState([])
    const history = useHistory()

    useEffect( //instead of calling a fetch call to display change here we are invoking the getTickets function which does it for us 
        () => {
            getTickets()
        },
        []
    ) //invoking getTickets 

    const getTickets = () => {  //this function is used to replace data information after ticket has been deleted
        return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
            .then(res => res.json())
            .then((data) => {
                setTicket(data)
            })
    }


    const deleteTicket = (id) => { //in order to delete ticket you need to know what ticket to be deleted so you use id
        //this matches what is interpolated on line 23
        fetch(`http://localhost:8088/serviceTickets/${id}`, { //you are interpolating ${id} because it is that specific id that will be deleted
            //from line line 52

            method: "DELETE"
        })
            .then
            (() => { getTickets() }) //replacing information after ticket entry is deleted
    }





    return (
        <>
            <div>
                <button onClick={() => history.push("/tickets/create")}> Create Ticket </button>
                {/* above is bringing user to service ticket component by using the /tickets/create */}
            </div>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <div className={ticket.emergency ? "emergency" : "ticket"}>
                                {/* above states if className is emergency is ticket.emergy is true and is ticket if ticket.emergency is false */}

                                <p>{ticket.emergency ? "🚑" : ""}
                                    <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link>  </p>
                                {/* link is creating a hyperlink that appears on description */}
                                <p>Submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                                </p>

                                <button onClick={() => {
                                    deleteTicket(ticket.id)  // taking the argument of ticket.id and mapping through ticket array to find correct id number to delete
                                }}>Delete</button>


                            </div>


                        </div>
                    }
                )
            }
        </>
    )
}