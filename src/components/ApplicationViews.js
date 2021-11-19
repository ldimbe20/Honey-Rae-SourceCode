//this module interacts with the navbar module, 
//you will define how your application will respond when the URL matches each of those patterns.
//named application views because it determines what view of the application should be rendered based on the URL on the browser is

import { CustomerList } from "./customers/customersList"
import { EmployeeList } from "./employees/employeeList"
import { TicketList } from "./serviceTickets/ticketList"
import { TicketForm } from "./serviceTickets/ticketForm"
import { EmployeeForm } from "./employees/employeeForm"
import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
            {/* Exact path specifies that it needs to match exactly so it wouldnt pick up / in paths below such as /customer */}
                <CustomerList />
            </Route>
             <Route path="/customers">
            {/* each of these Routers will render  the below components if the anchor tag in navbar is clicked */}
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
            
            <Route path="/tickets/create">
                <TicketForm />
            </Route>

            <Route exact path="/tickets">
            {/* this is an exact path so tickets/create isn't also rendered*/}
                <TicketList />
            </Route>
        </>
        // the routes are listening for the /customer event. When the URL matches the route path it will display CustomerList
    ) 
}




