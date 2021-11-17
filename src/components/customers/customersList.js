import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])  //customers is variable, the second variable is a variable whose function returns the changed state of customers
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((data) => {
                    setCustomers(data)
                })
        },
        [] 
    )//this hook runs once and renders, but never renders again this is because the array is empty

    useEffect(
        () => {
            if (customers.length === 1){
             updateMessage("You have 1 customer")
        } 
        else {
            updateMessage(`You have ${customers.length} customers`) 
        }
    },
        [customers] //this watched the state because theere is something in the bracket
    ) //this is a different useEffect that tracks state of customer

    return (
        <>
            <div> {totalCustomerMessage} </div>
            {
                customers.slice(0,2).map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}


//what state do I want this componant to render

// //!customer=defining variable hold state setCustomer=defining a variable to hold the function to modify state 
// //!if component needs data from API use UseEffect with a function as first argument and an empty array as second argument
// //!use fetch call to get data from API
// //! then invoke function, setCostomer line 19 to, that useState gave you to modify the function

// export const CustomerList = () => { //name of our component -
// const [customers, setCustomers] = useState([]) // customers is variable, setCustomers is the varaible whose function 
//is to modify the state of customers


// useEffect( //purpose is to run whenever state changes its an event listener
//     () => {
//          fetch ("http://localhost:8088/customers")
//          .then (res => res.json())
//          .then ((customerArray)=>{
//              setCustomers(customerArray)
//          })
//     },
//     []
// )


//     return (
//     <>
       
//         {
//             customers.map(
//             (customerObject) => {
//                     return <h2 key={`customer--${customerObject.id}`}>{customerObject.name}</h2> 
//                 }
//             )
//         }
//     </>

//     )
// } 

// the return on line 75 is JSX code which is an extension of javascript that allows us to write html directly into React