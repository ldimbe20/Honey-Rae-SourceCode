//this module interacts with the navbar module, 
//you will define how your application will respond when the URL matches each of those patterns.
//named application views because it determines what view of the application should be rendered based on the URL on the browser is

import { CustomerList } from "./customers/customersList"
import { EmployeeList } from "./employees/employeeList"
import { TicketList } from "./serviceTickets/ticketList"
import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/tickets">
                <TicketList />
            </Route>
        </>
        // the routes are listening for the /customer event. When the URL matches the route path it will display CustomerList
    ) 
}