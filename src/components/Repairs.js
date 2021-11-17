import { CustomerList } from "./customers/customersList"
import { EmployeeList } from "./employees/employeeList"
import { TicketList } from "./serviceTickets/ticketList"


//what state do I want this componant to render

export const Repairs = () => { 

    return (
    <>
        <h1> Honey Rae's Repairs Shop</h1> 
        <CustomerList />
        <h1> Honey Rae's Employees</h1> 
        <EmployeeList />
        <h1>Service Tickets</h1>
        <TicketList />


       
    </>

    )
} 

// the return of this function is html code or JSX 

