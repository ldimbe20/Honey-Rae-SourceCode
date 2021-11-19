import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {  //declaring the functional component 
    const [employees, setEmployee] = useState([])// employees is a variable , changeEmployee is a variable  whose function changes state
    const [specialties, setSpecial] = useState("") // specialties is a variable whose value is set by the setSpecial function. 
    const history = useHistory()
    //useState is a house that houses the specialies and setSpecials so it is a place to store them. 

    useEffect(
        () => {
            fetch("http://localhost:8088/employees") 
                .then(res => res.json())
                .then((employeesFromAPI) => {
                    setEmployee(employeesFromAPI)
                })
        },
        [] //called the dependency array because if you put a variable into it, it will listen for the state changes in it if not it will only run once. It is dependent on what is put into it
    )

    useEffect(() => {
        const justSpecialities = employees.map(emp => emp.specialty)
        setSpecial(justSpecialities.join(", "))
    }, [employees])

    return (
        <>
        <div>
         <button onClick={() => history.push("/employees/create")}>Pick Employee</button>
        </div> 
            <div>
                Specialties: { specialties } 
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>  //the key={`employee--  is used for React as a unique identifier
                    }
                )
            }
        </>
    )
}

