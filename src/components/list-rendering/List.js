
import { Component } from "react";
import React from "react";

 
class List extends Component{
    // render() {
    //     const names = ["Anup", "Piyush", "Bhushan", "kiran"];
    //     return (
    //         <div>
    //             {
    //                 names.map(name => (
    //                     <h2>{name}</h2>
    //                 ))
    //             }
    //         </div>
    //     );
    // }

    render(){
        const employees = [
           { name: 'Piyush', id:1 , age: 25 , job:'Lead'},
           { name: 'Bhushan', id:2 , age: 22 , job:'Developer'},
           { name: 'Tushar', id:3 , age: 26 , job:'JAVA'},
           { name: 'Kiran', id:4 , age: 26 , job:'QA'},
        ];

        const employeeList = employees.map(employee => {
            return <employee emp = {employee} key={employee.id}/>
        })

        return(
             <div>
                {
                    employeeList
                }
            </div>
            // <div>
            //     {
            //         employees.map(emp => {
            //             return <h2>{emp.name} having id {emp.id} of age {emp.age} and job profile {emp.job}</h2>
            //         })
            //     }
            // </div>
        )
    }
}
export default List;