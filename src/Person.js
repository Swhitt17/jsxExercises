import React from "react";


const Person = ({name,age,hobbies}) => {
    let response;
     if(age < 18){
        response = "You must be 18"
     }
     else{
        response = "Please go vote!"

     }

     const hobbiesLis = hobbies.map(h => <li>{h}</li>)
    return (
        <>
        <p>Learn some information about this person</p>
        <ul>
           <li >Name: {name}</li>
           <li >Age: {age}</li>
        </ul>
        <h3> {response}</h3>
        <ul>
            Hobbies:
            {hobbiesLis}
          </ul>
        </>
       
        
    
    )
}

export default Person;